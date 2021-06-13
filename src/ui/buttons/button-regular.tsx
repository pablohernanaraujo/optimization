import React, { FunctionComponent } from 'react';

import styled from '../../theme/styled-components';
import { Loader } from '../loader';

const ButtonWrapper = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.text.fontSize.m};
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacers.s} ${({ theme }) => theme.spacers.l};
  text-transform: uppercase;
  text-align: center;
  :focus {
    outline: none !important;
    opacity: ${({ theme }) => theme.emphasis.low};
  }
`;

const DisabledButton = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.text.fontSize.m};
  border: none;
  background-color: ${({ theme }) => theme.colors.disabledBackground};
  padding: ${({ theme }) => theme.spacers.s} ${({ theme }) => theme.spacers.l};
  display: inline-block;
  text-transform: uppercase;
`;

const LoadingButton = styled.div`
  color: ${({ theme }) => theme.colors.white};
  border: none;
  background-color: ${({ theme }) => theme.colors.disabledBackground};
  padding: ${({ theme }) => theme.spacers.s} ${({ theme }) => theme.spacers.l};
  display: inline-block;
`;

interface SubmitProps {
  /** Text show on input submit button */
  text: string;
  /** Disabled input submit button */
  disabled?: boolean;
  /** Loading input submit button */
  loading?: boolean;
  href: string;
}

export const ButtonRegular: FunctionComponent<SubmitProps> = ({
  text,
  disabled,
  loading,
  href,
}) => {
  if (disabled) {
    return <DisabledButton>{text}</DisabledButton>;
  }

  if (loading) {
    return (
      <LoadingButton>
        <Loader />
      </LoadingButton>
    );
  }

  return (
    <ButtonWrapper href={href} target="_blank">
      {text}
    </ButtonWrapper>
  );
};
