import React, { FunctionComponent } from 'react';

import { ScreenWrapper } from '../../ui/screen-wrapper';
import { Group } from '../../ui/group';

export const Prettier: FunctionComponent = () => (
  <ScreenWrapper>
    <Group type="header">
      <h2>Prettier page</h2>
    </Group>
    <Group>
      <h2>Prettier page</h2>
    </Group>
    <Group type="footer">
      <h2>Prettier page</h2>
    </Group>
  </ScreenWrapper>
);
