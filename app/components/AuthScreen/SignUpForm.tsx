import { push } from 'connected-react-router';
import { Field, FormikProps, withFormik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

import { signUpSchema } from '../../common/validators/user';
import { signupUser } from '../../redux/actions';
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

// Shape of form values
export interface FormValues {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

// Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
const InnerForm = (props: FormikProps<FormValues>) => {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    touched,
    errors,
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
          name="sign-up-form"
        >
          <Section
            style={{
              float: 'left',
              width: 'calc(50% - 10px)',
            }}
          >
            <Field
              component={TextField}
              data-testid="name-input"
              type="text"
              name="name"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              margin="normal"
              errortext={touched.name && errors.name ? errors.name : ''}
            />

            <Field
              component={TextField}
              data-testid="email-input"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              margin="normal"
              errortext={touched.email && errors.email ? errors.email : ''}
            />
          </Section>
          <Section
            style={{
              float: 'right',
              width: 'calc(50% - 10px)',
            }}
          >
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
              errortext={
                touched.password && errors.password ? errors.password : ''
              }
            />

            <Field
              component={TextField}
              data-testid="password-confirm-input"
              name="passwordConfirm"
              type="password"
              placeholder="Confirm Password"
              value={values.passwordConfirm}
              onChange={handleChange}
              onBlur={handleBlur}
              margin="normal"
              errortext={
                touched.passwordConfirm && errors.passwordConfirm
                  ? errors.passwordConfirm
                  : ''
              }
            />
          </Section>

          <SubmitButton
            title="sign-up-submit-button"
            data-testid="sign-up-button"
            type="submit"
            variant="contained"
            disabled={
              !values.name.length ||
              !values.email.length ||
              !values.password.length ||
              !values.passwordConfirm.length ||
              values.passwordConfirm.length !== values.password.length ||
              isSubmitting
            }
          >
            {isSubmitting ? <LoadingSpinner /> : 'Continue with email'}
          </SubmitButton>
        </form>
      </FormWrapper>
    </>
  );
};

// The type of props MyForm receives
export interface SignUpProps {
  signUp: (something: any) => any;
  dispatch: (dispatch: any) => Promise<{ payload: {}; type: string }>;
}

// Wrap our form with the withFormik HoC
const SignUpForm = withFormik<SignUpProps, FormValues>({
  validationSchema: signUpSchema,
  // Transform outer props into form values
  mapPropsToValues: () => {
    return {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    };
  },

  handleSubmit: async (
    values: {
      name: string;
      email: string;
      password: string;
      passwordConfirm: string;
    },
    { setSubmitting, setFieldError, props }
  ) => {
    setSubmitting(true);

    return props
      .dispatch(
        signupUser(props.signUp, {
          ...values,
          email: values.email.toLowerCase(),
        })
      )
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

export default SignUpForm;
