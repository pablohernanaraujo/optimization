import React, { FunctionComponent } from 'react';

import { ScreenWrapper } from '../../ui/screen-wrapper';
import { SubHeader } from '../../ui/sub-header';
import { Group } from '../../ui/group';
import { Link } from '../../ui/link';
import { Spacer } from '../../ui/spacer';
import { CodeBlock } from '../../ui/code-block';
import { H2, H3, H4, P, LI, Span } from '../../ui/typography';
import { screen, app, splashManager, folders } from './codes';

export const NivelOne: FunctionComponent = () => (
  <ScreenWrapper>
    <SubHeader />
    <Group type="header">
      <H2>Lunar consultoría</H2>
    </Group>
    <Group type="body">
      <H3>A - Revisión del login</H3>
      <ol>
        <LI emphasis="medium">Mejorando el onboarding.</LI>
        <Spacer size="xs" />
        <LI emphasis="medium">Mensajes de error.</LI>
        <Spacer size="xs" />
        <LI emphasis="medium">Niveles de usuarixs en el backend.</LI>
        <Spacer size="xs" />
        <LI emphasis="medium">Integración de distintos backups.</LI>
        <Spacer size="xs" />
        <LI emphasis="medium">
          ¿sostenemos el mecanismo de encriptación con código de recuperación
          autogenerado (alfanumérica)?
        </LI>
        <Spacer size="xs" />
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
        Vamos a eliminar el menu hamburguesa y vamos a crear routeo de tabs
        utilizando la estructura de screens definida más arriba. Lo creamos con
        la libreria que se está usando que es{' '}
        <Link
          href="https://github.com/aksonov/react-native-router-flux"
          target="_blank"
        >
          react navigation flux
        </Link>{' '}
        y acá hay un{' '}
        <Link
          href="https://sportnak.medium.com/adding-custom-tabbed-navigation-in-react-native-router-flux-e08429c22cce"
          target="_blank"
        >
          ejemplo
        </Link>{' '}
        de como implementarlo.
      </P>
      <H4>PASO 3</H4>
      <P>
        En este paso tenemos que analizar como vamos a mantener los datos en la
        aplicación, para eso tenemos dos niveles.
      </P>
      <P>
        Nivel 1 es guardar los datos en la memoria de la app, para eso
        utilizamos async storage este es un ejemplo de su{' '}
        <Link
          href="https://medium.com/dataseries/react-native-async-storage-6ac72795aa83"
          target="_blank"
        >
          uso
        </Link>
        .
      </P>
      <P>
        NIVEL 2 es manejar los datos globales dentro de la aplicación, para esto
        hay varias librerias cómo:
      </P>
      <ol>
        <LI>
          <Link
            href="https://recoiljs.org/docs/introduction/getting-started"
            target="_blank"
          >
            Recoil
          </Link>
        </LI>
        <Spacer size="xs" />
        <LI>
          <Link href="https://es.redux.js.org/" target="_blank">
            Redux
          </Link>
        </LI>
        <Spacer size="xs" />
        <LI>
          <Link href="https://es.reactjs.org/docs/context.html" target="_blank">
            Context
          </Link>
        </LI>
      </ol>
      <P>
        Hay muchas librerias más, estás son las que la comunidad usa más,
        cualquiera es una muy buena opción personalmente recomiendo{' '}
        <Link
          href="https://recoiljs.org/docs/introduction/getting-started"
          target="_blank"
        >
          Recoil
        </Link>{' '}
        por que es la más simple de usar y es la que menos boilerplate genera.
      </P>
      <H4>PASO 4</H4>
      <P>
        Vamos a agregar y preparar la aplicación para soportar
        roles/subscriptions. Si bien tenemos varios caminos para hacer esto
        como:
      </P>
      <ol>
        <LI>
          <Link
            href="https://firebase.google.com/docs/database?hl=es"
            target="_blank"
          >
            Firebase realtime database
          </Link>
        </LI>
        <Spacer size="xs" />
        <LI>
          <Link
            href="https://firebase.google.com/docs/firestore?hl=ess"
            target="_blank"
          >
            Firebase firestore
          </Link>
        </LI>
        <Spacer size="xs" />
        <LI>
          <Link href="https://socket.io/" target="_blank">
            Socket io
          </Link>
        </LI>
        <Spacer size="xs" />
        <LI>
          <Link href="https://rnfirebase.io/messaging/usage" target="_blank">
            Firebase messaging ( Push notifications )
          </Link>
        </LI>
      </ol>
      <P>
        Cualquiera de los caminos es para que este cambio afecte al usuario en
        tiempo real o lo más rápido posible, sin tener que esperar que valla a
        background o vuelva a abrir la app.
      </P>
      <P>
        Las 2 primeras opciones son las más rápidas de implementar por que la
        app ya tiene firebase instalado.
      </P>
      <P>
        La 3 opción hay que crear una API para que efectue esto y se configure
        en la app.
      </P>
      <P>
        La 4 opción va a necesitar un trabajo más complejo desde configuración,
        se tiene que crear una API o endpoint extra para esta funcionalidad y
        por último ponerse a programar esta funcionalidad especificamente en la
        app.
      </P>
      <P>Por todo esto recomiendo la 1 y 2 opción.</P>
      <H4>PASO 5</H4>
      <P>
        Login sociales va a ser un tema a ver sí en iOS dicen que hay que
        agregarlo podemos usar{' '}
        <Link
          href="https://firebase.google.com/docs/auth/ios/apple"
          target="_blank"
        >
          firebase login with apple
        </Link>{' '}
        manteniendo la WebView, algo que va a tener que migrar en un futuro.
      </P>
      <H4>PASO 6</H4>
      <P>
        Para esto vamos a necesitar una API que nos devuelva la última versión
        de la app. Esto nos va a enviar a un screen que le diga al usuario que
        necesita hacer úpdate para tener la ultima versión y lo va a llevar a
        googple play o app store respectivamente.
      </P>
      <P>
        Vamos a verificar solo{' '}
        <Link
          href="https://docs.npmjs.com/cli/v7/commands/npm-version"
          target="_blank"
        >
          mayor y minor, patch
        </Link>{' '}
        lo vamos a actualizar mediante{' '}
        <Link
          href="https://docs.microsoft.com/en-us/appcenter/distribution/codepush/"
          target="_blank"
        >
          code push
        </Link>{' '}
        y lo vamos a subir a los stores para que si alguien baja la app tenga la
        última versión.
      </P>
      <P>Esta validación va a ser efectuada en el splash.</P>
    </Group>
    <Group type="footer">
      <Spacer />
      <P color="white">Comenzado desde 1 de marzo 2021.</P>
    </Group>
  </ScreenWrapper>
);
