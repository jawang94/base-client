import { push } from 'connected-react-router';
import React, { FC } from 'react';
import { connect, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { Button, Toolbar } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import makersplaceLogo from '../../assets/makersplaceLogo.png';
import routes from '../../common/constants/routes.json';
import {
  userIsAuthenticated,
  userIsNotAuthenticated,
} from '../../redux/utils/index';
import { preLoadSignInForm, preLoadSignUpForm } from '../AuthScreen/index';
import CustomTooltip from '../CustomTooltip';
import Emoji from '../Emoji';
import UserProfile from '../UserProfile';

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 40px;
  height: auto;
  display: inline-block;
`;

const StyledHeader = styled.div`
  position: fixed;
  z-index: 99;
  width: 100%;
`;

const StyledToolBar = styled(Toolbar)`
  font-size: 15px;
  white-space: nowrap;
  top: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  && {
    background: #ffffff;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  transition: height 250ms;
  height: 80px;
  position: relative;
  overflow: hidden;
  box-shadow: none;
`;

const StyledListItem = styled.li`
  height: 100%;
  display: flex;
  cursor: pointer;
  padding-left: 20px;
`;

const ActionButton = styled(Button)`
  position: relative;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0 1rem;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  transition: all var(--easing-smooth) var(--duration-fast);

  &.MuiButton-root {
    color: #444444;
    text-transform: none;
    font-size: var(--heading-sm-font-size);
    font-weight: var(--heading-sm-font-weight);
    line-height: var(--heading-sm-line-height);
    letter-spacing: var(--heading-sm-letter-spacing);
  }
`;

const MarginlessBox = styled(Box)`
  && {
    margin: 0;
  }
`;

const LogoButtonWeb = styled(ActionButton)`
  &.MuiButton-root:hover {
    background-color: transparent;
  }

  &.MuiButton-root {
    font-size: var(--heading-lg-font-size);
  }
`;

const LogoButtonMobile = styled(ActionButton)`
  &.MuiButton-root:hover {
    background-color: transparent;
  }
`;

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  height: 3.6rem;
  justify-content: flex-end;
`;

const StyledListLeft = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  transition: transform 200ms;
  padding-inline-start: 0;
`;

const StyledListRight = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  transition: transform 200ms;
  padding-inline-start: 0;
`;

const TooltipSpan = styled.span`
  display: flex;
`;

const StyledMenuItem = styled(MenuItem)`
  && {
    font-size: var(--heading-sm-font-size);
  }
`;

const LeftHeaderList = ({ user }: any) => {
  const dispatch = useDispatch();

  const gotoDrops = () => {
    dispatch(push(routes.HOME));
  };

  // const gotoCompanies = () => {
  //   dispatch(push(routes.COMPANIES));
  // };

  const DropsButton: any = userIsAuthenticated(() => (
    <StyledListItem>
      <ActionButton
        title="opportunities-nav-button"
        data-testid="opportunities-button"
        onClick={gotoDrops}
      >
        <Emoji symbol="🔥" label="fire" />
        DROPS
      </ActionButton>
    </StyledListItem>
  ));

  const DropsLoggedOutButton: any = userIsNotAuthenticated(() => (
    <StyledListItem>
      <CustomTooltip title="Please sign in">
        <TooltipSpan>
          <ActionButton data-testid="opportunities-loggedout-button" disabled>
            DROPS
          </ActionButton>
        </TooltipSpan>
      </CustomTooltip>
    </StyledListItem>
  ));

  const ResourcesButton: any = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const button1Clicked = () => {
      const url = 'https://www.jason.wang.io';
      window.open(url, '_blank');
    };

    const button2Clicked = () => {
      const url = 'https://www.jason.wang.io';
      window.open(url, '_blank');
    };

    const button3Clicked = () => {
      const url = 'https://www.jason.wang.io';
      window.open(url, '_blank');
    };

    return (
      <>
        <StyledListItem>
          <ActionButton
            title="resources-drop-down-button"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Menu
          </ActionButton>
        </StyledListItem>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <StyledMenuItem title="resources-prep-item" onClick={button1Clicked}>
            <Emoji symbol="🗣" label="pm-interview-prep-emoji" /> Button 1
          </StyledMenuItem>
          <StyledMenuItem
            title="resources-pm-interview-questions-item"
            onClick={button2Clicked}
          >
            <Emoji symbol="❓" label="pm-interview-questions-emoji" /> Button 2
          </StyledMenuItem>
          <StyledMenuItem
            title="resources-summary-item"
            onClick={button3Clicked}
          >
            <Emoji symbol="🗃" label="summary-emoji" /> Button 3
          </StyledMenuItem>
        </Menu>
      </>
    );
  };

  return (
    <StyledListLeft>
      {!user?.isAuthenticated ? <DropsLoggedOutButton /> : <DropsButton />}
      <ResourcesButton />
    </StyledListLeft>
  );
};

const RightHeaderList = ({ user }: any) => {
  const dispatch = useDispatch();

  const goToLogIn = () => {
    dispatch(push(routes.LOGIN));
  };

  const goToSignUp = () => {
    dispatch(push(routes.SIGNUP));
  };

  const goToDashboard = () => {
    dispatch(push(routes.DASHBOARD));
  };

  const LoginButton: any = userIsNotAuthenticated(() => (
    <StyledListItem>
      <ActionButton
        title="log-in-nav-button"
        data-testid="log-in-button"
        onClick={goToLogIn}
        onMouseOver={() => preLoadSignInForm()}
      >
        Log In
      </ActionButton>
    </StyledListItem>
  ));

  const SignupButton: any = userIsNotAuthenticated(() => (
    <StyledListItem>
      <ActionButton
        title="sign-up-nav-button"
        data-testid="sign-up-button"
        onClick={goToSignUp}
        onMouseOver={() => preLoadSignUpForm()}
      >
        Sign up
      </ActionButton>
    </StyledListItem>
  ));

  const MyDashboardButton: any = userIsAuthenticated(() => (
    <StyledListItem>
      <ActionButton
        title="my-dashboard-nav-button"
        data-testid="dashboard-button"
        onClick={goToDashboard}
      >
        My Dashboard
      </ActionButton>
    </StyledListItem>
  ));

  const GatedUserProfile: any = userIsAuthenticated(() => (
    <UserProfile user={user} />
  ));

  return (
    <StyledListRight>
      {!user.isAuthenticated ? (
        <>
          <LoginButton />
          <SignupButton />
        </>
      ) : null}
      <MarginlessBox display={{ xs: 'none', sm: 'block' }} m={1}>
        <MyDashboardButton />
      </MarginlessBox>
      <GatedUserProfile />
    </StyledListRight>
  );
};

type HeaderProps = {
  user: any;
};

const AppHeader: FC<HeaderProps> = ({ user }): JSX.Element => {
  const dispatch = useDispatch();

  const goToHome = () => {
    dispatch(push(routes.HOME));
  };

  return (
    <StyledHeader>
      <StyledToolBar>
        <StyledNav>
          <LogoContainer>
            <Icon src={makersplaceLogo} className="AuthScreen-icon" />
            <MarginlessBox display={{ xs: 'block', sm: 'none' }} m={1}>
              <LogoButtonMobile
                title="makersplace-logo-button"
                onClick={goToHome}
              >
                <span style={{ fontWeight: 'bold' }}>makers</span>
                <span style={{ fontWeight: 'normal' }}>place</span>
              </LogoButtonMobile>
            </MarginlessBox>

            <MarginlessBox display={{ xs: 'none', sm: 'block' }} m={1}>
              <LogoButtonWeb title="makersplace-logo-button" onClick={goToHome}>
                <span style={{ fontWeight: 'bold' }}>makers</span>
                <span style={{ fontWeight: 'normal' }}>place</span>
              </LogoButtonWeb>
            </MarginlessBox>
          </LogoContainer>

          <NavContainer>
            <MarginlessBox display={{ xs: 'none', sm: 'block' }} m={1}>
              <LeftHeaderList user={user} />
            </MarginlessBox>
            <RightHeaderList user={user} />
          </NavContainer>
        </StyledNav>
      </StyledToolBar>
    </StyledHeader>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user,
});

export default connect(mapStateToProps)(AppHeader);
