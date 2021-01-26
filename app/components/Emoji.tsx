import React from 'react';

const Emoji = ({ label, symbol }: any) => (
  <span
    className="emoji"
    role="img"
    aria-label={label || ''}
    aria-hidden={label ? 'false' : 'true'}
    style={{ marginRight: '.5rem' }}
  >
    {symbol}
  </span>
);

export default Emoji;
