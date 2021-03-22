import React, { FunctionComponent } from 'react';
import { useRecoilState } from 'recoil';

import { lunarNivel } from '../../store';
import styled from '../../theme/styled-components';

const SubHeaderWrapper = styled.div`
  display: flex;
`;

const Button = styled.div<{ disabled: boolean }>`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.disabledBackground : theme.colors.primary};
  flex: 1;
  text-align: center;
  padding: ${({ theme }) => theme.spacers.s};
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.primary : theme.colors.white};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`;

const HorizontalSpacer = styled.div`
  width: 2px;
`;

export const SubHeader: FunctionComponent = () => {
  const [nivel, setNivel] = useRecoilState(lunarNivel);

  return (
    <SubHeaderWrapper>
      <Button disabled={nivel === 1} onClick={() => setNivel(1)}>
        NIVEL 1
      </Button>
      <HorizontalSpacer />
      <Button disabled={nivel === 2} onClick={() => setNivel(2)}>
        NIVEL 2
      </Button>
      <HorizontalSpacer />
      <Button disabled={nivel === 3} onClick={() => setNivel(3)}>
        NIVEL 3
      </Button>
    </SubHeaderWrapper>
  );
};
