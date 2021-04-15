import React, { FunctionComponent } from 'react';

import { ScreenWrapper } from '../../ui/screen-wrapper';
import { SubHeader } from '../../ui/sub-header';
import { Group } from '../../ui/group';
import { Link } from '../../ui/link';
import { Spacer } from '../../ui/spacer';
import { CodeBlock } from '../../ui/code-block';
import { NavigationLink } from '../../ui/link';
import { H2, H3, H4, P, LI, Span } from '../../ui/typography';
import { screen, app, splashManager, folders } from './codes';

export const NivelThree: FunctionComponent = () => (
  <ScreenWrapper>
    <SubHeader />
    <Group type="header">
      <H2>Lunar consultoría</H2>
    </Group>
    <Group type="body">
      <H3>
        En esta etapa vamos a ver que es necesario a la hora de escalar y tener
        equipos de trabajos.
      </H3>
      <H4>Design system</H4>
      <P>
        Lo primero para poder mejorar nuestra <Span>velocidad</Span> a la hora
        de sacar <Span>nuevos feature</Span> va a ser tener un{' '}
        <Span>design system</Span>, esto nos va a permitir varias cosas.
      </P>
      <ol>
        <LI emphasis="medium">Tener mejor organizados nuestros componentes.</LI>
        <Spacer size="xs" />
        <LI emphasis="medium">
          Poder saber que necesitamos desarrollar de cero.
        </LI>
        <Spacer size="xs" />
        <LI emphasis="medium">
          Poder estimar mejor el tiempo que nos va a tomar.
        </LI>
        <Spacer size="xs" />
        <LI emphasis="medium">
          Poder hacer ajustes globales sin mucho esfuerzo.
        </LI>
        <Spacer size="xs" />
        <LI emphasis="medium">
          Tener una documentación donde por ir a ver como son y como se usan
          cada componente.
        </LI>
      </ol>
      <P>
        Les dejo un este articulo{' '}
        <Link
          href="https://producthackers.com/es/articulos/design-system/"
          target="_blank"
        >
          Design system
        </Link>{' '}
        donde van a poder ller mucho más sobre este.
      </P>
      <P>Para esto vamos a necesitar varias herramientas</P>
      <H4>
        <Link href="https://styled-components.com/" target="_blank">
          Styled components
        </Link>
      </H4>
      <P>
        Esta libreria son va a ayudar a crear los componentes de una forma
        simple, escalable y lo suficientemente robusta a la hora de utilizarlos
      </P>
      <H4>
        <Link href="https://react-styleguidist.js.org/" target="_blank">
          Styleguidist
        </Link>
      </H4>
      <P>
        Esta libreria nos va a ayudar en por documentar nuestros componentes
        para que cuando alguien nuevo se sume al equipo, pueda tener un lugar
        donde ver todos los componentes que estn creados, ver casos de usos y
        muchas cosas más.
      </P>
      <H4>
        <NavigationLink to="/theme">Theme</NavigationLink>
      </H4>
      <P>
        Esto nos va a permitir mantener una consistencia global en nuestra
        aplicacción, pudiendo tener centralizado nuestros colores, font size,
        espaciados y poder agregarle cosas que sabemos que se van a utilizar en
        varios lugares.
      </P>
      <H4>Typescript</H4>
      <P>
        Lo segundo que vamos a tener en cuenta es usar varias librerias para
        mejorar nuestro código en todo el projecto, cuando una aplicación
        comienza a agrandarse y el equipo empieza a crecer es cuando vamos a
        empezar a tener algunos problemas.
      </P>
      <P>
        Si no atacamos estos problemas desde el comienzo, la aplicación se va a
        volver algo inmantenible a largo plazo, para eso podemos utilizar.
      </P>
      <ol>
        <LI emphasis="medium">
          <Link href="https://www.typescriptlang.org/" target="_blank">
            Typescript
          </Link>
        </LI>
        <Spacer size="xs" />
        <LI emphasis="medium">
          <Link href="https://eslint.org/" target="_blank">
            Eslint
          </Link>
        </LI>
        <Spacer size="xs" />
        <LI emphasis="medium">
          <Link href="https://prettier.io/" target="_blank">
            Prettier
          </Link>
        </LI>
      </ol>
      <P>
        En este caso tambien les dejo un articulo sobre{' '}
        <Link
          href="https://blog.bitsrc.io/5-strong-reasons-to-use-typescript-with-react-bc987da5d907"
          target="_blank"
        >
          5 razones para usar typescript con react
        </Link>{' '}
        esto nos da los pro y contras del uso de este lenguaje sobre javascript,
        el cual es muy interesante.
      </P>
    </Group>
    <Group type="footer">
      <Spacer />
      <P color="white">Comenzado desde 1 de marzo 2021.</P>
    </Group>
  </ScreenWrapper>
);
