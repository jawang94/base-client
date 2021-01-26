import gql from 'graphql-tag';
import * as fragments from '../fragments';

export default gql`
  mutation AppleSignIn($token: String!) {
    appleSignIn(token: $token) {
      ...User
    }
  }
  ${fragments.user}
`;
