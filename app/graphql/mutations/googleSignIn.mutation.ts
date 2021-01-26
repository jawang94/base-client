import gql from 'graphql-tag';
import * as fragments from '../fragments';

export default gql`
  mutation GoogleSignIn(
    $id: String!
    $email: String!
    $fullName: String!
    $imageURL: String!
  ) {
    googleSignIn(
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
