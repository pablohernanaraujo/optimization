import React, { FunctionComponent } from 'react';

import { ScreenWrapper } from '../../ui/screen-wrapper';
import { SubHeader } from '../../ui/sub-header';
import { Group } from '../../ui/group';
import { Link } from '../../ui/link';
import { Spacer } from '../../ui/spacer';
import { CodeBlock } from '../../ui/code-block';
import { H2, H3, H4, P, LI, Span } from '../../ui/typography';
import { screen, app, splashManager, folders } from './codes';

export const NivelThree: FunctionComponent = () => (
  <ScreenWrapper>
    <SubHeader />
    <Group type="header">
      <H2>Lunar consultoría</H2>
    </Group>
    <Group type="body">
      <H3>Nivel 3</H3>
    </Group>
    <Group type="footer">
      <Spacer />
      <P color="white">Comenzado desde 1 de marzo 2021.</P>
    </Group>
  </ScreenWrapper>
);
