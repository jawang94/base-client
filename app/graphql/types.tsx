/* eslint-disable */
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: any;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234. */
  PhoneNumber: any;
};







export type Query = {
  __typename?: 'Query';
  _dummy?: Maybe<Scalars['Boolean']>;
  me?: Maybe<User>;
  users: Array<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _dummy?: Maybe<Scalars['Boolean']>;
  signIn?: Maybe<User>;
  signUp?: Maybe<User>;
  appleSignIn?: Maybe<User>;
  appleSignUp?: Maybe<User>;
  googleSignIn?: Maybe<User>;
  googleSignUp?: Maybe<User>;
  resizeImage?: Maybe<ReturnObject>;
};


export type MutationSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignUpArgs = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  passwordConfirm: Scalars['String'];
};


export type MutationAppleSignInArgs = {
  token: Scalars['String'];
};


export type MutationAppleSignUpArgs = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  token: Scalars['String'];
};


export type MutationGoogleSignInArgs = {
  id: Scalars['String'];
  email: Scalars['String'];
  fullName: Scalars['String'];
  imageURL: Scalars['String'];
};


export type MutationGoogleSignUpArgs = {
  id: Scalars['String'];
  email: Scalars['String'];
  fullName: Scalars['String'];
  imageURL: Scalars['String'];
};


export type MutationResizeImageArgs = {
  url: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  width: Scalars['Int'];
  format?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  _dummy?: Maybe<Scalars['Boolean']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['EmailAddress'];
  picture: Scalars['URL'];
};

export type AppleUser = {
  __typename?: 'AppleUser';
  iss?: Maybe<Scalars['String']>;
  sub?: Maybe<Scalars['String']>;
  aud?: Maybe<Scalars['String']>;
  iat?: Maybe<Scalars['String']>;
  exp?: Maybe<Scalars['String']>;
  none?: Maybe<Scalars['String']>;
  nonce_supported?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['EmailAddress']>;
  email_verified?: Maybe<Scalars['String']>;
  is_private_email?: Maybe<Scalars['String']>;
  real_user_status?: Maybe<Scalars['Int']>;
};

export type ReturnObject = {
  __typename?: 'ReturnObject';
  image?: Maybe<Scalars['JSONObject']>;
};

export type AppleUserFragment = (
  { __typename?: 'AppleUser' }
  & Pick<AppleUser, 'iss' | 'sub' | 'aud' | 'iat' | 'exp' | 'none' | 'nonce_supported' | 'email' | 'email_verified' | 'is_private_email' | 'real_user_status'>
);

export type UserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'email' | 'picture'>
);

export type AppleSignInMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type AppleSignInMutation = (
  { __typename?: 'Mutation' }
  & { appleSignIn?: Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> }
);

export type AppleSignUpMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  token: Scalars['String'];
}>;


export type AppleSignUpMutation = (
  { __typename?: 'Mutation' }
  & { appleSignUp?: Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> }
);

export type GoogleSignInMutationVariables = Exact<{
  id: Scalars['String'];
  email: Scalars['String'];
  fullName: Scalars['String'];
  imageURL: Scalars['String'];
}>;


export type GoogleSignInMutation = (
  { __typename?: 'Mutation' }
  & { googleSignIn?: Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> }
);

export type GoogleSignUpMutationVariables = Exact<{
  id: Scalars['String'];
  email: Scalars['String'];
  fullName: Scalars['String'];
  imageURL: Scalars['String'];
}>;


export type GoogleSignUpMutation = (
  { __typename?: 'Mutation' }
  & { googleSignUp?: Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> }
);

export type ResizeImageMutationVariables = Exact<{
  url: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  width: Scalars['Int'];
  format?: Maybe<Scalars['String']>;
}>;


export type ResizeImageMutation = (
  { __typename?: 'Mutation' }
  & { resizeImage?: Maybe<(
    { __typename?: 'ReturnObject' }
    & Pick<ReturnObject, 'image'>
  )> }
);

export type SignInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignInMutation = (
  { __typename?: 'Mutation' }
  & { signIn?: Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> }
);

export type SignUpMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  passwordConfirm: Scalars['String'];
}>;


export type SignUpMutation = (
  { __typename?: 'Mutation' }
  & { signUp?: Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> }
);

export const AppleUserFragmentDoc = gql`
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
export const UserFragmentDoc = gql`
    fragment User on User {
  id
  name
  email
  picture
}
    `;
export const AppleSignInDocument = gql`
    mutation AppleSignIn($token: String!) {
  appleSignIn(token: $token) {
    ...User
  }
}
    ${UserFragmentDoc}`;
export type AppleSignInMutationFn = ApolloReactCommon.MutationFunction<AppleSignInMutation, AppleSignInMutationVariables>;

/**
 * __useAppleSignInMutation__
 *
 * To run a mutation, you first call `useAppleSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAppleSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [appleSignInMutation, { data, loading, error }] = useAppleSignInMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useAppleSignInMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AppleSignInMutation, AppleSignInMutationVariables>) {
        return ApolloReactHooks.useMutation<AppleSignInMutation, AppleSignInMutationVariables>(AppleSignInDocument, baseOptions);
      }
export type AppleSignInMutationHookResult = ReturnType<typeof useAppleSignInMutation>;
export type AppleSignInMutationResult = ApolloReactCommon.MutationResult<AppleSignInMutation>;
export type AppleSignInMutationOptions = ApolloReactCommon.BaseMutationOptions<AppleSignInMutation, AppleSignInMutationVariables>;
export const AppleSignUpDocument = gql`
    mutation AppleSignUp($firstName: String!, $lastName: String!, $email: String!, $token: String!) {
  appleSignUp(
    firstName: $firstName
    lastName: $lastName
    email: $email
    token: $token
  ) {
    ...User
  }
}
    ${UserFragmentDoc}`;
export type AppleSignUpMutationFn = ApolloReactCommon.MutationFunction<AppleSignUpMutation, AppleSignUpMutationVariables>;

/**
 * __useAppleSignUpMutation__
 *
 * To run a mutation, you first call `useAppleSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAppleSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [appleSignUpMutation, { data, loading, error }] = useAppleSignUpMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useAppleSignUpMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AppleSignUpMutation, AppleSignUpMutationVariables>) {
        return ApolloReactHooks.useMutation<AppleSignUpMutation, AppleSignUpMutationVariables>(AppleSignUpDocument, baseOptions);
      }
export type AppleSignUpMutationHookResult = ReturnType<typeof useAppleSignUpMutation>;
export type AppleSignUpMutationResult = ApolloReactCommon.MutationResult<AppleSignUpMutation>;
export type AppleSignUpMutationOptions = ApolloReactCommon.BaseMutationOptions<AppleSignUpMutation, AppleSignUpMutationVariables>;
export const GoogleSignInDocument = gql`
    mutation GoogleSignIn($id: String!, $email: String!, $fullName: String!, $imageURL: String!) {
  googleSignIn(id: $id, email: $email, fullName: $fullName, imageURL: $imageURL) {
    ...User
  }
}
    ${UserFragmentDoc}`;
export type GoogleSignInMutationFn = ApolloReactCommon.MutationFunction<GoogleSignInMutation, GoogleSignInMutationVariables>;

/**
 * __useGoogleSignInMutation__
 *
 * To run a mutation, you first call `useGoogleSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGoogleSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [googleSignInMutation, { data, loading, error }] = useGoogleSignInMutation({
 *   variables: {
 *      id: // value for 'id'
 *      email: // value for 'email'
 *      fullName: // value for 'fullName'
 *      imageURL: // value for 'imageURL'
 *   },
 * });
 */
export function useGoogleSignInMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<GoogleSignInMutation, GoogleSignInMutationVariables>) {
        return ApolloReactHooks.useMutation<GoogleSignInMutation, GoogleSignInMutationVariables>(GoogleSignInDocument, baseOptions);
      }
export type GoogleSignInMutationHookResult = ReturnType<typeof useGoogleSignInMutation>;
export type GoogleSignInMutationResult = ApolloReactCommon.MutationResult<GoogleSignInMutation>;
export type GoogleSignInMutationOptions = ApolloReactCommon.BaseMutationOptions<GoogleSignInMutation, GoogleSignInMutationVariables>;
export const GoogleSignUpDocument = gql`
    mutation GoogleSignUp($id: String!, $email: String!, $fullName: String!, $imageURL: String!) {
  googleSignUp(id: $id, email: $email, fullName: $fullName, imageURL: $imageURL) {
    ...User
  }
}
    ${UserFragmentDoc}`;
export type GoogleSignUpMutationFn = ApolloReactCommon.MutationFunction<GoogleSignUpMutation, GoogleSignUpMutationVariables>;

/**
 * __useGoogleSignUpMutation__
 *
 * To run a mutation, you first call `useGoogleSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGoogleSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [googleSignUpMutation, { data, loading, error }] = useGoogleSignUpMutation({
 *   variables: {
 *      id: // value for 'id'
 *      email: // value for 'email'
 *      fullName: // value for 'fullName'
 *      imageURL: // value for 'imageURL'
 *   },
 * });
 */
export function useGoogleSignUpMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<GoogleSignUpMutation, GoogleSignUpMutationVariables>) {
        return ApolloReactHooks.useMutation<GoogleSignUpMutation, GoogleSignUpMutationVariables>(GoogleSignUpDocument, baseOptions);
      }
export type GoogleSignUpMutationHookResult = ReturnType<typeof useGoogleSignUpMutation>;
export type GoogleSignUpMutationResult = ApolloReactCommon.MutationResult<GoogleSignUpMutation>;
export type GoogleSignUpMutationOptions = ApolloReactCommon.BaseMutationOptions<GoogleSignUpMutation, GoogleSignUpMutationVariables>;
export const ResizeImageDocument = gql`
    mutation ResizeImage($url: String!, $height: Int, $width: Int!, $format: String) {
  resizeImage(url: $url, height: $height, width: $width, format: $format) {
    image
  }
}
    `;
export type ResizeImageMutationFn = ApolloReactCommon.MutationFunction<ResizeImageMutation, ResizeImageMutationVariables>;

/**
 * __useResizeImageMutation__
 *
 * To run a mutation, you first call `useResizeImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResizeImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resizeImageMutation, { data, loading, error }] = useResizeImageMutation({
 *   variables: {
 *      url: // value for 'url'
 *      height: // value for 'height'
 *      width: // value for 'width'
 *      format: // value for 'format'
 *   },
 * });
 */
export function useResizeImageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResizeImageMutation, ResizeImageMutationVariables>) {
        return ApolloReactHooks.useMutation<ResizeImageMutation, ResizeImageMutationVariables>(ResizeImageDocument, baseOptions);
      }
export type ResizeImageMutationHookResult = ReturnType<typeof useResizeImageMutation>;
export type ResizeImageMutationResult = ApolloReactCommon.MutationResult<ResizeImageMutation>;
export type ResizeImageMutationOptions = ApolloReactCommon.BaseMutationOptions<ResizeImageMutation, ResizeImageMutationVariables>;
export const SignInDocument = gql`
    mutation SignIn($email: String!, $password: String!) {
  signIn(email: $email, password: $password) {
    ...User
  }
}
    ${UserFragmentDoc}`;
export type SignInMutationFn = ApolloReactCommon.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        return ApolloReactHooks.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, baseOptions);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = ApolloReactCommon.MutationResult<SignInMutation>;
export type SignInMutationOptions = ApolloReactCommon.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($name: String!, $email: String!, $password: String!, $passwordConfirm: String!) {
  signUp(
    name: $name
    email: $email
    password: $password
    passwordConfirm: $passwordConfirm
  ) {
    ...User
  }
}
    ${UserFragmentDoc}`;
export type SignUpMutationFn = ApolloReactCommon.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      passwordConfirm: // value for 'passwordConfirm'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        return ApolloReactHooks.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, baseOptions);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = ApolloReactCommon.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = ApolloReactCommon.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;