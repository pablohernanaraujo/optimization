import React, { FunctionComponent } from 'react';

import { ScreenWrapper } from '../../ui/screen-wrapper';
import { Group } from '../../ui/group';
import { Link, NavigationLink } from '../../ui/link';
import { Spacer } from '../../ui/spacer';
import { CodeBlock } from '../../ui/code-block';
import { H2, H3, P, LI } from '../../ui/typography';
import { RegularImage } from '../../ui/images';
import { installFirebaseApp, podInstall, runAndroid } from './codes';

export const PushNotifications: FunctionComponent = () => (
  <ScreenWrapper>
    <Group type="header">
      <H2>Push notifications</H2>
    </Group>
    <Group type="body">
      <P>
        Uno de los puntos más importantes a la hora de comunicarnos con nuestros
        usuarios cómo empresa son las Push notifications, aca les dejo una{' '}
        <Link
          href="https://yalantis.com/blog/types-of-push-notifications/"
          target="_blank"
        >
          nota
        </Link>{' '}
        muy buena sobre el uso de las Push notifications.
      </P>
      <H3>Setup push notifications with Firebase</H3>
      <P>
        Lo primero que debemos hacer es instalar las dependencias necesarias.
      </P>
      <CodeBlock
        code={installFirebaseApp}
        language="javascript"
        showLineNumbers={false}
      />
      <P>Aceguremonos de instalar los pods.</P>
      <CodeBlock
        code={podInstall}
        language="javascript"
        showLineNumbers={false}
      />
      <P>Ahora lo que tenemos que ir a Firebase console.</P>
      <RegularImage
        src="./images/push-notifications/01 - firebase console.png"
        alt="firebase console"
      />
      <P>Creamos un proyecto nuevo.</P>
      <RegularImage
        src="./images/push-notifications/02 - create project.png"
        alt="create project"
      />
      <P>Nos aceguramos de tener Google Analitycs en modo on.</P>
      <RegularImage
        src="./images/push-notifications/03 - analitycs on.png"
        alt="analitycs on"
      />
      <P>Asociamos una cuenta de Google Analitycs al proyecto.</P>
      <RegularImage
        src="./images/push-notifications/04 - analitycs account.png"
        alt="analitycs account"
      />
      <P>Y finalizamos.</P>
      <RegularImage
        src="./images/push-notifications/05 - create project finish.png"
        alt="create project finish"
      />
      <P>
        Ya tenemos nuestro porjecto creado, vamos a comenzar a configurar
        nuestra Android app.
      </P>
      <H3>Android configuration</H3>
      <P>En nuestro main project, seleccionamos Android.</P>
      <RegularImage
        src="./images/push-notifications/06 - create android app.png"
        alt="create android app"
      />
      <P>
        Lo primero que vamos a necesitar es el package name de nuestro proyecto
        de react native.
      </P>
      <RegularImage
        src="./images/push-notifications/07 - android package.png"
        alt="android package"
      />
      <P>
        El cual está en android/app/src/main/AndroidManifest.xml, el sobre
        nombre le ponemos lo que queramos.
      </P>
      <RegularImage
        src="./images/push-notifications/08 - android manifest.png"
        alt="android manifest"
      />
      <P>
        Lo siguiente que tenemos que hacer es bajar el archivo
        google-services.json.
      </P>
      <RegularImage
        src="./images/push-notifications/09 - google services.png"
        alt="google services"
      />
      <P>Este archivo lo ponemos en el android/app.</P>
      <RegularImage
        src="./images/push-notifications/10 - android app.png"
        alt="android app"
      />
      <P>
        Copiamos classpath 'com.google.gms:google-services:4.3.5' y lo ponemes
        en el archivo android/build.gradle.
      </P>
      <RegularImage
        src="./images/push-notifications/11 - config build gradle.png"
        alt="config build gradle"
      />
      <RegularImage
        src="./images/push-notifications/12 - build gradle.png"
        alt="build gradle"
      />
      <P>
        Ahora necesitamos agregar 3 lineas al archivo android/app/build.gradle.
      </P>
      <RegularImage
        src="./images/push-notifications/13 - config app build gradle.png"
        alt="config app build gradle"
      />
      <RegularImage
        src="./images/push-notifications/14 - app build gradle.png"
        alt="app build gradle"
      />
      <RegularImage
        src="./images/push-notifications/15 - app build gradle.png"
        alt="app build gradle"
      />
      <P>Terminamos de crear la applicación para Android.</P>
      <RegularImage
        src="./images/push-notifications/16 - create android app finish.png"
        alt="create android app finish"
      />
      <P>
        Bueno ahora podemos correr nuestro proyecto en mi caso lo estoy
        corriendo en un dispositivo físico{' '}
        <Link
          href="https://www.samsung.com/ar/smartphones/galaxy-a/galaxy-a01-a015-sm-a015mzbbaro/"
          target="_blank"
        >
          Galaxy A01
        </Link>{' '}
        y uso{' '}
        <Link href="https://www.vysor.io/" target="_blank">
          Vysor
        </Link>{' '}
        para verlo en mi desktop.
      </P>
      <CodeBlock
        code={runAndroid}
        language="javascript"
        showLineNumbers={false}
      />
      <RegularImage
        src="./images/push-notifications/17 - running android on device.png"
        alt="create android app finish"
        device
      />
    </Group>
    <Group type="footer">
      <Spacer />
      <P color="white">
        Próximo paso a optimizar{' '}
        <NavigationLink to="/deep-link">Deep link</NavigationLink>.
      </P>
    </Group>
  </ScreenWrapper>
);
