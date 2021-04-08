import React, { FunctionComponent } from 'react';

import { ScreenWrapper } from '../../ui/screen-wrapper';
import { Group } from '../../ui/group';
import { NavigationLink } from '../../ui/link';
import { Spacer } from '../../ui/spacer';
import { H2, H3, H4, P } from '../../ui/typography';

export const Concepts: FunctionComponent = () => (
  <ScreenWrapper>
    <Group type="header">
      <H2>Concepts</H2>
    </Group>
    <Group type="body">
      <P>
        Sabemos que las aplicaciones pueden tener un buen o mal diseño, como
        podemos medir esto?
      </P>
      <H3>ACOPLAMIENTO / COHESION</H3>
      <P>
        Son dos conceptos muy relevantes a la hora de diseñar y desarrollar
        software. Veamos en qué consisten.
      </P>
      <H4>Acoplamiento</H4>
      <P>
        El acoplamiento es una medida inversamente proporsional al diseño, es
        decir, una aplicación que presente un alto acoplamiento tendra un mal
        diseño y una aplicación que presente un bajo acoplamiento tendra un buen
        diseño.
      </P>
      <P>
        El acoplamiento se refiere al grado de interdependencia que tienen dos
        unidades de software entre sí, entendiendo por unidades de software:
        clases, subtipos, métodos, módulos, funciones, bibliotecas, etc.
      </P>
      <P>
        Si dos unidades de software son completamente independientes la una de
        la otra, decimos que están desacopladas.
      </P>
      <H4>Cohesión</H4>
      <P>
        La cohesión de software es el grado en que elementos diferentes de un
        sistema permanecen unidos para alcanzar un mejor resultado que si
        trabajaran por separado. Se refiere a la forma en que podemos agrupar
        diversas unidades de software para crear una unidad mayor.
      </P>
    </Group>
    <Group type="footer">
      <Spacer />
      <P color="white">
        Próximo paso a optimizar{' '}
        <NavigationLink to="/philosophy">Philosophy</NavigationLink>.
      </P>
    </Group>
  </ScreenWrapper>
);
