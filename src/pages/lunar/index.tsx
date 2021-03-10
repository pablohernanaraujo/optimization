import React, { FunctionComponent } from 'react';

import { ScreenWrapper } from '../../ui/screen-wrapper';
import { Group } from '../../ui/group';
import { Link, NavigationLink } from '../../ui/link';
import { Spacer } from '../../ui/spacer';
import { CodeBlock } from '../../ui/code-block';
import { H2, H3, H4, P, LI, Span } from '../../ui/typography';
import { screen, app, splashManager, folders } from './codes';

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
        agregar algunas cosas básicas.
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
      <P>Estructura de carpetas</P>
      <CodeBlock code={folders} language="javascript" showLineNumbers={false} />
      <P>
        Este es un ejemplo de como se podría armar la estructura de carpetas,
        intentamos tener un orden el cual se pueda replicar en otros proyectos,
        para que cuando un desarrollador pase de un proyecto a otro pueda
        identificar fácilmente donde se encuentran los archivos.
      </P>
      <P>
        Los nombres pueden variar dependiendo que decidan los desarroladores.
      </P>
      <H4>PASO 2</H4>
      <P>En este paso vamos a avanzar con el DASH (Dashboard).</P>
      <P>
        Vamos a eliminar el menu hamburguesa y vamos a crear routeo de tabs.
      </P>
    </Group>
    <Group type="footer">
      <P color="white">
        Realizado desde 1 de marzo hasta el 15 de marzo del 2021.
      </P>
    </Group>
  </ScreenWrapper>
);
