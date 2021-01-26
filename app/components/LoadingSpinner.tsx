import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingSpinner = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress size="21px" thickness={6} color="inherit" />
    </div>
  );
};

export default LoadingSpinner;
