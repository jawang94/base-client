import gql from 'graphql-tag';
import * as fragments from '../fragments';

export default gql`
  mutation AppleSignUp(
    $firstName: String!
    $lastName: String!
    $email: String!
    $token: String!
  ) {
    appleSignUp(
      firstName: $firstName
      lastName: $lastName
      email: $email
      token: $token
    ) {
      ...User
    }
  }
  ${fragments.user}
`;
