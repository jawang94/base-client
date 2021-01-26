import gql from 'graphql-tag';

export default gql`
  fragment AppleUser on AppleUser {
    iss
    sub
    aud
    iat
    exp
    none
    nonce_supported
    email
    email_verified
    is_private_email
    real_user_status
  }
`;
