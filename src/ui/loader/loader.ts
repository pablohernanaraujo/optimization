import styled, { keyframes } from '../../theme/styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  border: 4px solid ${({ theme }) => theme.colors.white};
  border-top: 4px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 11px;
  height: 11px;
  animation: ${spin} 2s linear infinite;
`;

export const FullScreenLoaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBackground};
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
