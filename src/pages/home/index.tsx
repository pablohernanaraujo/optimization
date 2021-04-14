import React, { FunctionComponent } from 'react';

import { ScreenWrapper } from '../../ui/screen-wrapper';
import { Group } from '../../ui/group';
import { NavigationLink } from '../../ui/link';
import { Spacer } from '../../ui/spacer';
import { H2, P } from '../../ui/typography';

export const Home: FunctionComponent = () => (
  <ScreenWrapper>
    <Group type="header">
      <H2>Optimization</H2>
    </Group>
    <Group type="body">
      <P>
        Muchas veces cuando empezamos un proyecto nos ponemos a pensar en todo
        lo que tenemos que hacer, cómo y cúando.
      </P>
      <P>
        La idea de escribir esta guía es más que nada una ayuda memoría, y ver
        los distintos caminos que se pueden elegir a la hora de optimizar un
        proyecto ya creado o comenzar con uno.
      </P>
      <P>
        Los pasos no son estrictos, uno puede elegir por donde ir avanzando por
        necesidad o prioridades, voy a intentar profundizar en cada una de las
        optimizaciones sin ser tan aburrido.
      </P>
    </Group>
    <Group type="footer">
      <Spacer />
      <P color="white">
        Próximo paso a optimizar{' '}
        <NavigationLink to="/architecture">Architecture</NavigationLink>.
      </P>
    </Group>
  </ScreenWrapper>
);
