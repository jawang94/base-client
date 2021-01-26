/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import * as React from 'react';
import scriptjs from 'scriptjs';
import styled from 'styled-components';

import appleLogoSmallBlack from '../../../assets/appleLogoSmallBlack.svg';

const StyledAppleButton = styled.div`
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
  color: rgb(55, 53, 47);
  font-size: 14px;
  line-height: 1;
  padding-left: 12px;
  padding-right: 12px;
  font-weight: 500;
  border: 1px solid rgb(55, 53, 47);
  width: 100%;

  &:hover {
    background-color: rgba(55, 53, 47, 0.08);
  }

  &:focus {
    outline: none;
  }
`;

const StyledAppleLogo = styled.img`
  display: block;
  fill: inherit;
  flex-shrink: 0;
  -webkit-backface-visibility: hidden;
  width: 16px;
  height: 16px;
  margin-right: 6px;
  margin-bottom: 2px;
`;

interface AppleLoginProps {
  clientId: string;
  redirectURI: string;
  scope?: string;
  state?: string;
  responseType?: string | 'code' | 'id_token';
  responseMode?: string | 'query' | 'fragment' | 'form_post';
  nonce?: string;
  usePopup?: boolean;
  onSuccess?: Function;
  onFailure?: Function;
  mode?: string;
  type?: string;
  render?: (props: { onClick: (event?: any) => void }) => JSX.Element;
}

declare let window: any;

const AppleLogin = (props: AppleLoginProps) => {
  scriptjs(
    'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js',
    () => {
      const { clientId, scope, redirectURI, state, nonce, usePopup } = props;

      window.AppleID.auth.init({
        clientId,
        scope,
        redirectURI,
        state,
        nonce,
        usePopup,
      });
    }
  );
  const { onSuccess, onFailure, render } = props;

  const handleSuccess = (authorization: any) => {
    if (typeof onSuccess === 'function') {
      onSuccess(authorization);
    }
  };

  const handleFailure = (error: any) => {
    if (typeof onFailure === 'function') {
      onFailure(error);
    }
  };

  const onClick = async () => {
    try {
      const data = await window.AppleID.auth.signIn();
      handleSuccess(data);
    } catch (error) {
      handleFailure(error);
    }
  };

  if (typeof render === 'function') {
    return render({ onClick });
  }

  return (
    <StyledAppleButton
      title="apple-auth-button"
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <StyledAppleLogo src={appleLogoSmallBlack} alt="Apple Logo" />
      Continue with Apple
    </StyledAppleButton>
  );
};

export default AppleLogin;
