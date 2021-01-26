import { push } from 'connected-react-router';
import { Field, FormikProps, withFormik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

import { signInSchema } from '../../common/validators/user';
import { loginUser } from '../../redux/actions';
import {
  FormWrapper,
  Section,
  SocialLoginContainer,
  SubmitButton,
  TextField,
} from '../FormComponents';
import LoadingSpinner from '../LoadingSpinner';
import LoginWithApple from './LoginWithApple';
import LoginWithGoogle from './LoginWithGoogle';

export interface FormValues {
  email: string;
  password: string;
}

const InnerForm = (props: FormikProps<FormValues>) => {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    touched,
    errors,
    isValid,
  } = props;
  const store = useStore();
  const storeState = store.getState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (storeState.user.isAuthenticated === true && isSubmitting === false) {
      dispatch(push('/dashboard'));
    }
  }, [dispatch, storeState, isSubmitting]);

  return (
    <>
      <FormWrapper>
        <SocialLoginContainer>
          <LoginWithApple />
        </SocialLoginContainer>
        <SocialLoginContainer>
          <LoginWithGoogle />
        </SocialLoginContainer>

        {/* <FormSpacer>
        <SpacerLine />
      </FormSpacer> */}

        <form
          style={{ display: 'none' }}
          onSubmit={handleSubmit}
          name="log-in-form"
        >
          <Section>
            <Field
              component={TextField}
              data-testid="email-input"
              type="text"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              margin="normal"
              helperText={touched.email && errors.email ? errors.email : ''}
            />
            <Field
              component={TextField}
              data-testid="password-input"
              name="password"
              type="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              margin="normal"
              helperText={
                touched.password && errors.password ? errors.password : ''
              }
            />
          </Section>

          <SubmitButton
            title="log-in-submit-button"
            data-testid="sign-in-button"
            type="submit"
            variant="contained"
            disabled={
              !values.email.length ||
              !values.password.length ||
              !isValid ||
              isSubmitting
            }
          >
            {isSubmitting ? <LoadingSpinner /> : 'Continue with email'}
          </SubmitButton>
        </form>

        {/* <ForgotPassword>Forgot password?</ForgotPassword> */}
      </FormWrapper>
    </>
  );
};

export interface SignInProps {
  signIn: (something: any) => any;
  dispatch: (dispatch: any) => Promise<{ payload: {}; type: string }>;
}

const SignInForm = withFormik<SignInProps, FormValues>({
  validationSchema: signInSchema,
  // Transform outer props into form values
  mapPropsToValues: () => {
    return {
      email: '',
      password: '',
    };
  },

  handleSubmit: async (values, { setSubmitting, setFieldError, props }) => {
    setSubmitting(true);

    return props
      .dispatch(loginUser(props.signIn, values))
      .then(
        (response: {
          payload: { errorField?: string; errorMessage?: string };
          type: string;
        }) => {
          if (
            response.type === 'LOGIN_USER_FAILURE' &&
            response.payload.errorField &&
            response.payload.errorMessage
          ) {
            setFieldError(
              response.payload.errorField,
              response.payload.errorMessage
            );
          } else if (response.type === 'LOGIN_USER_SUCCESS') {
            // props.setLoggedIn(true);
          }

          return response;
        }
      );
  },
})(InnerForm);

export default SignInForm;
