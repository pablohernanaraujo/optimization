import React, { FunctionComponent, InputHTMLAttributes } from 'react';

import styled from '../../theme/styled-components';

const TextFieldWrapper = styled.div`
  width: 40%;
  margin-bottom: ${({ theme }) => theme.spacers.s};
`;

const Label = styled.div`
  font-size: 12px;
  font-weight: 300;
  margin: 6px 0px;
  color: ${({ theme }) => theme.colors.text};
  opacity: ${({ theme }) => theme.emphasis.medium};
`;

const TextInput = styled.input<{ error?: string }>`
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  border: 1px ${({ theme }) => theme.colors.highlight} solid;
  padding: 6px;
  ${({ theme, error }) =>
    error &&
    `
    border: 1px ${theme.colors.danger} solid;
  `};
  ::placeholder {
    opacity: 0.5;
    font-weight: 300;
  }
  :focus {
    outline: none !important;
    border: 1px ${({ theme }) => theme.colors.darkBackground} solid;
  }
`;

const ErrorWrapper = styled.div`
  height: 12px;
  margin: 6px 0px;
`;

const TextError = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.danger};
  margin-left: 6px;
`;

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  validation: any;
  autocomplete?: boolean;
  error?: string;
}

export const TextField: FunctionComponent<TextFieldProps> = ({
  /** Text show lable text field */
  label,
  /** Text show placeholder text field */
  placeholder,
  /** Text name for text field */
  name,
  type,
  /** Ref validation for text field */
  validation,
  /** Text field autocomplete */
  autocomplete,
  /** Text field error text */
  error,
}) => (
  <TextFieldWrapper>
    <Label>{label}</Label>
    <TextInput
      placeholder={placeholder}
      name={name}
      type={type}
      ref={validation}
      autoComplete={autocomplete ? 'on' : 'off'}
      error={error}
    />
    <ErrorWrapper>{error && <TextError>{error}</TextError>}</ErrorWrapper>
  </TextFieldWrapper>
);
