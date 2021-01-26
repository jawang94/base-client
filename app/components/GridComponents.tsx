import styled from 'styled-components';

export const Grid = styled.div``;

export const Row = styled.div`
  display: flex;
`;

export const OverflowCol = styled.div<any>`
  flex: ${(props) => props.size};
  -webkit-transform: translate3d(0, 0, 0);
  overflow: auto;
`;

export const NoOverflowCol = styled.div<any>`
  flex: ${(props) => props.size};
`;
