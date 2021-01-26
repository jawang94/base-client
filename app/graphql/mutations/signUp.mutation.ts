import gql from 'graphql-tag';
import * as fragments from '../fragments';

export default gql`
  mutation SignUp(
    $name: String!
    $email: String!
    $password: String!
    $passwordConfirm: String!
  ) {
    signUp(
      name: $name
      email: $email
      password: $password
      passwordConfirm: $passwordConfirm
    ) {
      ...User
    }
  }
  ${fragments.user}
`;
