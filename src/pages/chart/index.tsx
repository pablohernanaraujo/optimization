import React, { FunctionComponent } from 'react';

import { ScreenWrapper } from '../../ui/screen-wrapper';
import { Group } from '../../ui/group';
import { Link, NavigationLink } from '../../ui/link';
import { Spacer } from '../../ui/spacer';
import { CodeBlock } from '../../ui/code-block';
import { H2, H3, H4, P, Span, LI } from '../../ui/typography';

export const Chart: FunctionComponent = () => (
  <ScreenWrapper>
    <Group type="header">
      <H2>React Native chart libraries</H2>
    </Group>
    <Group type="body">
      <P>
        Los charts y graphs son útiles cuando desea mostrar datos estadísticos
        recuperados de la base de datos de una manera significativa. Saber qué
        biblioteca de visualización de datos es óptima para la aplicación móvil
        en la que está trabajando es el primer paso de este proceso.
      </P>
      <ul>
        <LI>React native charts wrapper.</LI>
        <Spacer size="xs" />
        <LI>React native svg charts.</LI>
        <Spacer size="xs" />
        <LI>React native chart kit.</LI>
      </ul>
      <P>Estas son las más usadas calificadas por Github stars</P>
      <H3>
        <Link
          href="https://github.com/wuxudong/react-native-charts-wrapper"
          target="_blank"
        >
          React native charts wrapper
        </Link>
      </H3>
      <P>
        Esta biblioteca de código abierto es compatible con dispositivos iOS y
        Android. Se basa en bibliotecas de gráficos nativas como MPAndroidChart
        y gráficos de iOS y, en la plataforma Android, es compatible con la
        mayoría de las configuraciones disponibles en la biblioteca
        MPAndroidChart. También tiene una cantidad diferente de tipos de
        gráficos admitidos, que incluyen línea, dispersión, burbuja, circular,
        radar, barra, combinada y vela.
      </P>
      <H3>
        <Link
          href="https://github.com/JesperLekland/react-native-svg-charts"
          target="_blank"
        >
          React native svg charts
        </Link>
      </H3>
      <P>
        Esta librería proporciona compatibilidad con gráficos SVG para
        aplicaciones React Native en dispositivos iOS y Android y una capa de
        compatibilidad para la web. Utiliza el paquete react-native-svg como
        dependencia para representar gráficos y tablas. Utiliza la biblioteca{' '}
        <Link href="https://d3js.org/" target="_blank">
          D3
        </Link>{' '}
        para crear rutas SVG y calcular coordenadas.
      </P>
      <H3>
        <Link
          href="https://github.com/indiespirit/react-native-chart-kit"
          target="_blank"
        >
          React native chart kit
        </Link>
      </H3>
      <P>
        Una biblioteca de gráficos que admita tanto las aplicaciones de Expo
        como las aplicaciones de vainilla React Native, es algo que vale la pena
        considerar seriamente. Está construido sobre proyectos famosos de código
        abierto como react-native-svg, path-js y react-native-calendar-heatmap.
        Admite patrones como línea, línea Bézier, circular, anillo de progreso,
        barra apilada y gráfico de contribución (también conocido como mapa de
        calor). Algunos de los patrones que admite esta biblioteca son únicos en
        comparación con otras bibliotecas mencionadas en este artículo. Cada uno
        de los patrones tiene su propio conjunto de accesorios, lo que facilita
        la personalización de datos en la pantalla de una aplicación móvil.
      </P>
    </Group>
    <Group type="footer">
      <Spacer />
      <P color="white">Próximamente más librerias y ejemplo.</P>
    </Group>
  </ScreenWrapper>
);
