import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'eu-west-2_dGzk6PESE',
    ClientId: '4cp4uuo3dtp2l2me4oj3abvbpt'
};

export default new CognitoUserPool(poolData);
