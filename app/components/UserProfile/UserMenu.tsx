import { push } from 'connected-react-router';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import routes from '../../common/constants/routes.json';
import { useSignOut } from '../../services/auth.service';
import CustomTooltip from '../CustomTooltip';

const CustomButton = withStyles({
  root: {
    padding: 0,
    minWidth: '32px',
    '&:hover': {
      backgroundColor: 'var(--color-black-02)',
    },
  },
})(Button);

const TooltipSpan = styled.span`
  display: flex;
`;

const StyledMenuItem = styled(MenuItem)`
  && {
    font-size: var(--heading-sm-font-size);
  }
`;

export default function UserMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const dispatch = useDispatch();
  const signOut = useSignOut();
  const filePickerRef: any = useRef(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogOut = async () => {
    const userSignOutResponse = await signOut();
    console.log(userSignOutResponse);

    setAnchorEl(null);
    dispatch(push(routes.LOGIN));
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <CustomButton
        title="user-menu-button"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <ExpandMoreIcon style={{ height: 20, width: 20 }} />
      </CustomButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <input
          type="file"
          ref={filePickerRef}
          // onChange={onChangeHandler}
          style={{ display: 'none' }}
        />
        <CustomTooltip title="Coming soon!" placement="left">
          <TooltipSpan>
            <StyledMenuItem disabled>Change profile picture</StyledMenuItem>
          </TooltipSpan>
        </CustomTooltip>
        <CustomTooltip title="Coming soon!" placement="left">
          <TooltipSpan>
            <StyledMenuItem disabled>My account</StyledMenuItem>
          </TooltipSpan>
        </CustomTooltip>
        <StyledMenuItem title="user-menu-logout-button" onClick={handleLogOut}>
          Logout
        </StyledMenuItem>
      </Menu>
    </div>
  );
}
