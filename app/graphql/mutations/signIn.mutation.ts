import gql from 'graphql-tag';
import * as fragments from '../fragments';

export default gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      ...User
    }
  }
  ${fragments.user}
`;
