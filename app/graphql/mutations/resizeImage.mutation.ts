import gql from 'graphql-tag';

export default gql`
  mutation ResizeImage(
    $url: String!
    $height: Int
    $width: Int!
    $format: String
  ) {
    resizeImage(url: $url, height: $height, width: $width, format: $format) {
      image
    }
  }
`;
