import { TextField as FormikMaterialTextField } from 'formik-material-ui';
import styled from 'styled-components';

import MaterialButton from '@material-ui/core/Button';

export const SocialLoginContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 320px;
  margin-bottom: 1vh;
`;

export const FormSpacer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  width: 100%;
  height: 42px;
  flex: 0 0 auto;
`;

export const SpacerLine = styled.div`
  width: 100%;
  height: 1px;
  visibility: visible;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgba(55, 53, 47, 0.09);
`;

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 450px;
  margin-bottom: 4vh;
  margin-top: 4vh;
`;

export const NewsletterFormWrapper = styled.div`
  margin-bottom: 4vh;
`;

export const Section = styled.div`
  width: 100%;
  padding-bottom: 2vh;
`;

export const Legend = styled.legend`
  font-weight: bold;
  color: var(--color-black-08) !important;
`;

export const Label = styled.label`
  color: var(--color-black-08) !important;
`;

export const Input = styled.input`
  color: var(--color-black-08) !important;

  &::placeholder {
    color: var(--tertiary-text);
  }
`;

export const TextField = styled(FormikMaterialTextField)`
  width: 100%;

  > div::before {
    border-color: black !important;
  }

  input {
    color: var(--color-black-08) !important;

    &::placeholder {
      color: var(--color-black-08) !important;
    }
  }

  label {
    color: var(--color-black-08) !important;
  }

  .MuiFormHelperText-root {
    position: absolute;
    bottom: -1.5em;
  }
`;

export const NewsletterFormInput = styled.div`
  width: 100%;
  max-width: 360px;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: block !important;
  }
`;

export const NewsletterFormInputV2 = styled.div`
  width: 100%;
  align-items: center;
`;

export const NewsletterTextField = styled(TextField)`
  display: flex;
  flex: 1 1 0%;
  width: 20vw;
  margin-right: var(--space-16) !important;
  margin-bottom: var(--space-16) !important;

  @media only screen and (max-width: 768px) {
    .MuiInputBase-input {
      width: 200px;
      text-align: center;
    }
    display: block !important;
  }
`;

export const NewsletterTextFieldV2 = styled(TextField)`
  && {
    display: block;
    width: 100%;
    margin-right: var(--space-16) !important;
    margin-bottom: var(--space-16) !important;
  }

  @media only screen and (max-width: 768px) {
    .MuiInputBase-input {
      width: 100%;
      text-align: center;
    }
    .MuiInput-root {
      width: 100%;
    }
    display: block !important;
  }
`;

export const SubmitButton = styled(MaterialButton)`
  &.MuiButton-contained {
    -webkit-user-select: none;
    transition: background 20ms ease-in;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    height: 36px;
    color: var(--guidelyte-green);
    font-size: 14px;
    line-height: 1;
    padding-left: 12px;
    padding-right: 12px;
    font-weight: 500;
    background: #f7f9f9;
    border: 1px solid rgba(108, 165, 155, 0.5);
    box-sizing: border-box;
    border-radius: 6px;
    margin-top: 6px;
    margin-bottom: 12px;
    width: 250px;
    display: block !important;
    margin: 0 auto !important;
  }

  &.MuiButton-contained.Mui-disabled {
    background: #f7f9f9;
    border: 1px solid rgba(108, 165, 155, 0.5);
    color: rgba(108, 165, 155, 0.5);
  }
`;

export const NewsletterSubmitButton = styled(MaterialButton)`
  -webkit-user-select: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  height: 36px;
  font-size: var(--body-sm-font-size);
  line-height: 1;
  padding-left: 12px;
  padding-right: 12px;
  font-weight: 500 !important;
  text-align: center;
  width: 90px;
  color: var(--guidelyte-green) !important;

  && {
    border: 1px solid rgba(108, 165, 155, 0.5);
    background: #f7f9f9;
    box-shadow: none;

    &:hover {
      background-color: rgba(55, 53, 47, 0.08);
      box-shadow: none;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    display: block !important;
  }
`;

export const NewsletterSubmitButtonV2 = styled(MaterialButton)`
  -webkit-user-select: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  height: 36px;
  font-size: var(--body-sm-font-size);
  line-height: 1;
  padding-left: 12px;
  padding-right: 12px;
  font-weight: 500 !important;
  text-align: center;
  width: 50%;
  box-sizing: border-box;
  border-radius: 6px;
  color: var(--guidelyte-green) !important;

  && {
    border: 1px solid rgba(108, 165, 155, 0.5);
    background: #f7f9f9;
    box-shadow: none;
    margin: 0 auto;

    &:hover {
      background-color: rgba(55, 53, 47, 0.08);
      box-shadow: none;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    display: block !important;
  }
`;

export const ForgotPassword = styled.div`
  color: rgba(55, 53, 47, 0.6);
  font-size: 14px;
  line-height: 1.6;
  margin-top: 8px;
  text-align: center;
`;

export const ErrorMessage = styled.div`
  position: fixed;
  color: red;
  font-size: 15px;
  margin-top: 20px;
`;

export const StyledEmailButton = styled.button`
  cursor: pointer;
  -webkit-user-select: none;
  transition: background 20ms ease-in;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  height: 36px;
  border-radius: 3px;
  color: #ffffff;
  fill: rgb(55, 53, 47);
  font-size: 14px;
  line-height: 1;
  padding-left: 12px;
  padding-right: 12px;
  font-weight: 500;
  border: 1px solid rgb(55, 53, 47);
  width: 100%;
`;

export const TooltipSpan = styled.span`
  display: flex;
`;
