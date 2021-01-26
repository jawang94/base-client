import * as yup from 'yup';

const invalidEmail = 'Please enter a valid email.';

const passwordNotLongEnough = 'Must be at least 8 characters.';

const passwordTooLong = 'Must be less than 255 characters.';

const registerNameValidation = yup
  .string()
  .min(3, 'Must be at least 3 characters.')
  .max(255)
  .required('Please enter a name.');

const registerPasswordValidation = yup
  .string()
  .min(8, passwordNotLongEnough)
  .max(255, passwordTooLong)
  .matches(/[^\da-zA-Z]+/, 'Must contain a special character.')
  .matches(/[a-zA-Z]+/, 'Must contain english letters.')
  .matches(/\d+/, 'Must contain a number')
  .required('');

const registerPasswordConfirmValidation = yup
  .string()
  .required('')
  .oneOf([yup.ref('password'), ''], 'Passwords do not match.');
// Use .oneOf() to check equality. Pass a ref to the field you want to compare with.

const registerEmailValidation = yup
  .string()
  .max(255)
  .email(invalidEmail)
  .required('');

const signInEmailValidation = yup
  .string()
  .max(255)
  .email(invalidEmail)
  .required('');

const signInPasswordValidation = yup
  .string()
  .min(8, passwordNotLongEnough)
  .max(255, passwordTooLong)
  .required('');

export const signInSchema = yup.object().shape({
  email: signInEmailValidation,
  password: signInPasswordValidation,
});

export const signUpSchema = yup.object().shape({
  name: registerNameValidation,
  email: registerEmailValidation,
  password: registerPasswordValidation,
  passwordConfirm: registerPasswordConfirmValidation,
});
