import { useOutletContext } from "react-router-dom";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../UserPool";
import "../css/loginsettings.css";





export default function Settings(){

    const getRepo = useOutletContext().getRepo;
    var repositories = getRepo();
    console.log(repositories);
    var choices = [];
    repositories.map(item => {
        let arr = item.Key.split('/');
        if(arr.length>0){
            if(choices.includes(arr[1])===false){
                choices.push(arr[1]);
            }
        }
    })

    
    return(
        <div>
            <h1>Choose Repository</h1>
            <br></br>
            <div className="login-settings-form-div">
            <form>
                <select>
                {choices.map(item => {
                return(
                    <option value={item}>{item}</option>
                )
            })}
                </select>
            </form>
            </div>
        </div>
    );
}