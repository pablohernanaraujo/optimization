import React, { FunctionComponent } from 'react';

import { ScreenWrapper } from '../../ui/screen-wrapper';
import { Group } from '../../ui/group';
import { Link, NavigationLink } from '../../ui/link';
import { Spacer } from '../../ui/spacer';
import { CodeBlock } from '../../ui/code-block';
import { H2, H3, H4, P, LI, Span } from '../../ui/typography';
import { screen, app, splashManager } from './codes';

export const Lunar: FunctionComponent = () => (
  <ScreenWrapper>
    <Group type="header">
      <H2>Lunar consultoría</H2>
    </Group>
    <Group type="body">
      <H3>A - Revisión del login</H3>
      <ol>
        <LI emphasis="medium">Mejorando el onboarding.</LI>
        <LI emphasis="medium">Mensajes de error.</LI>
        <LI emphasis="medium">Niveles de usuarixs en el backend.</LI>
        <LI emphasis="medium">Integración de distintos backups.</LI>
        <LI emphasis="medium">
          ¿sostenemos el mecanismo de encriptación con código de recuperación
          autogenerado (alfanumérica)?
        </LI>
        <LI emphasis="medium">
          ¿Cómo lograr que todas las usuarias estén actualizadas?
        </LI>
      </ol>
      <H3>1 - Mejorando el onboarding.</H3>
      <P>Estructura de screens para la mejor distribución.</P>
      <CodeBlock code={screen} language="javascript" showLineNumbers={false} />
      <P>Esta re estructuración se debería efectuar en varios pasos.</P>
      <H4>PASO 1</H4>
      <P>
        En este paso solo nos vamos a enfocar en el ONB (Onboarding) y vamos a
        agregar algunas básicas.
      </P>
      <P>
        <Link
          href="https://github.com/crazycodeboy/react-native-splash-screen"
          target="_blank"
        >
          React native splash screen
        </Link>{' '}
        con esta libreria vamos a poder magejar la primer carga de la
        aplicación, esta es una parte muy importante por que es en la que vamos
        a ver si hay un usuario logiado y vamos a actualizar sus datos. Podemos
        seguir esta{' '}
        <Link
          href="https://medium.com/@appstud/add-a-splash-screen-to-a-react-native-app-810492e773f9"
          target="_blank"
        >
          guía
        </Link>{' '}
        para su instalación.
      </P>
      <P>
        Para manejar esto podemos crear un custom hook y lo usamos en{' '}
        <Span>app.tsx</Span>.
      </P>
      <CodeBlock code={app} language="javascript" showLineNumbers={false} />
      <P>
        Y luego creamos <Span>splash-manager/index.tsx</Span>.
      </P>
      <CodeBlock
        code={splashManager}
        language="javascript"
        showLineNumbers={false}
      />
      <P>
        En este simple ejemplo mostrmos como sí existe la session ocultamos el
        splash. Pero esto se puede complegizar muy facíl, acá podemos hacer un
        fetch y actualizar los datos del usuario, verificar si hay alguna
        actualización y forzar update etc.
      </P>
    </Group>
    <Group type="footer">
      <Spacer />
      <P color="white">
        Realizado desde 1 de marzo del 2021 hasta el 15 de marzo de 2021.
      </P>
    </Group>
  </ScreenWrapper>
);
