import { Link } from 'react-router-dom';

import styled from '../../theme/styled-components';

export const NavigationLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 400;
`;
