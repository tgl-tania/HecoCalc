import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'eu-west-2_D4H1dwVyg',
    ClientId: '3ggh8416n0aqt4o415qgm40376'
};

export default new CognitoUserPool(poolData);
