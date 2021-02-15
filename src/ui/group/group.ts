import styled from '../../theme/styled-components';

type KeyGroup = 'header' | 'body' | 'footer';
type KeyContent = 'left' | 'center' | 'right';

interface GroupProps {
  type?: KeyGroup;
  content?: KeyContent;
}

export const Group = styled.div<GroupProps>`
  padding: 0 ${({ theme }) => theme.spacers.m};
  ${({ theme, type }) =>
    type === 'header' &&
    `
    padding-top: ${theme.spacers.l};
  `};
  ${({ type }) =>
    type === 'body' &&
    `
    flex: 1;
  `};
  ${({ theme, type }) =>
    type === 'footer' &&
    `
    padding-bottom: ${theme.spacers.l};
  `};
  ${({ content }) =>
    content === 'left' &&
    `
    align-items: flex-start;
  `}
  ${({ content }) =>
    content === 'center' &&
    `
    justify-content: center;
    align-items: center;
  `}
  ${({ content }) =>
    content === 'right' &&
    `
    align-items: flex-end;
  `}
`;
