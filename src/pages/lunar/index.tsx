import React, { FunctionComponent } from 'react';
import { useRecoilValue } from 'recoil';

import { lunarNivel } from '../../store';
import { NivelOne } from './nivel-one';
import { NivelTwo } from './nivel-two';
import { NivelThree } from './nivel-three';

export const Lunar: FunctionComponent = () => {
  const nivel = useRecoilValue(lunarNivel);

  if (nivel === 1) {
    return <NivelOne />;
  }

  if (nivel === 2) {
    return <NivelTwo />;
  }

  return <NivelThree />;
};
