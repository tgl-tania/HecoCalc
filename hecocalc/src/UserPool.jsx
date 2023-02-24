import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'eu-west-2_FfGgfMElM',
    ClientId: '4547bl433dh8s672s1i9p7ir66'
};

export default new CognitoUserPool(poolData);
