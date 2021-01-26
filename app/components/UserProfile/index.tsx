import React, { FC } from 'react';
import styled from 'styled-components';

import { Grid, NoOverflowCol, Row } from '../GridComponents';
import UserAvatar from './UserAvatar';
import UserMenu from './UserMenu';

const CenterAlignedRow = styled(Row)`
  align-items: center;
  margin-left: 20px;
`;

type Props = { user: any };

const UserProfile: FC<Props> = ({ user }) => {
  return (
    <Grid>
      <CenterAlignedRow>
        <NoOverflowCol size={6}>
          <UserAvatar user={user} />
        </NoOverflowCol>
        <NoOverflowCol size={6}>
          <UserMenu />
        </NoOverflowCol>
      </CenterAlignedRow>
    </Grid>
  );
};

export default UserProfile;
