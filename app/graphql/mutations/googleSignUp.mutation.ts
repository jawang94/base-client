import gql from 'graphql-tag';
import * as fragments from '../fragments';

export default gql`
  mutation GoogleSignUp(
    $id: String!
    $email: String!
    $fullName: String!
    $imageURL: String!
  ) {
    googleSignUp(
      id: $id
      email: $email
      fullName: $fullName
      imageURL: $imageURL
    ) {
      ...User
    }
  }
  ${fragments.user}
`;
