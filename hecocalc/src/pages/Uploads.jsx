import Navbar from '../components/Navbar'
import Upload from '../components/Upload'
import React, { useState } from "react";
import { Buffer } from "buffer";
import AWS from "aws-sdk";


Buffer.from("anything", "base64");
window.Buffer = window.Buffer || require("buffer").Buffer;

function Uploads() {
  const [files, setFiles] = useState([]);

  const S3_BUCKET = process.env['REACT_APP_BUCKET_NAME'];
  const REGION = process.env['REACT_APP_REGION'];

  AWS.config.update({
    accessKeyId: process.env['REACT_APP_ACCESS_ID'],
    secretAccessKey: process.env['REACT_APP_ACCESS_KEY'],
  });

  const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
  });

  const uploadImageToS3 = (file) => {
    console.log(file);
    const params = {
      ACL: "public-read",
      Body: file,
      /* Using the constant S3_BUCKET doesn't work -> so I just entered manually bucket name
      Bucket : S3_BUCKET */
      Bucket: 'alancompany/Snapshots/',
      Key: file.name,
    };

    console.log("params", params);
    // console.log(REGION)
    console.log("eu-west-2")

    myBucket.putObject(params).send((err) => {
      if (err) console.log(err);
    });
  };

  const handleUpload = (event) => {
    event.preventDefault();

    console.log("Uploading files");
    for (const file in files) {
      uploadImageToS3(files[file].file);
    }
    setFiles([]);
  };

  return (
    <>
      <Navbar />
      <div>
        <form onSubmit={handleUpload}>
          <Upload
            // accept=".jpg,.png,.jpeg,.svg"
            label="File Uploader"
            files={files}
            setFiles={setFiles}
            multiple
          />
          <button type="submit">Upload To S3</button>
        </form>
      </div>
    </>
  )
}

export default Uploads;
