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
      <H2>New features</H2>
      <H3>Subscriptions</H3>
      <P>
        El tema con las subscripciones es un tema sensible por que tiene varios
        factores a tener muy en cuenta, vamos a crearlo de una forma simple para
        poder escalarlo sin problemas.
      </P>
      <ol>
        <LI>Seleccion de subscripción.</LI>
        <Spacer size="xs" />
        <LI>Pasarela de pago.</LI>
        <Spacer size="xs" />
        <LI>Implementación en la app.</LI>
        <Spacer size="xs" />
        <LI>Acceso a contenido de cada plan.</LI>
        <Spacer size="xs" />
        <LI>Marketing.</LI>
      </ol>
      <H4>1 Seleccion de subscripción</H4>
      <P>
        Para que el usuario vea los tipos de planes que tenemos debemos crear un
        screen, mostrando a que tiene acceso el usuario dependiendo el plan.
      </P>
      <P>
        Vamos a poder crear nuestro primer formato visual muy rápido en la web,
        y analizar que impacto tiene en la gente.
      </P>
      <P>
        Lugos vamos a replicarlo en la app, pero en este caso lo vamos a tener
        en 2 lugares de acceso.
      </P>
      <P>1 para los usuarios nuevos en el onboarding.</P>
      <P>
        2 en profile para que el usuario pueda ir en cualquier momento o con
        incentivos llevarlos a acá.
      </P>
      <H4>2 Pasarela de pago</H4>
      <P>
        En este paso vamos a tener que tener es un lugar donde la gente pueda
        efectuar el pago de la subscripcioón seleccionada.
      </P>
      <P>
        En este caso va a ser{' '}
        <Link
          href="https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-api/introduction"
          target="_blank"
        >
          Mercado Pago
        </Link>{' '}
        , vamos a crear en{' '}
        <Link href="http://lunarcomunidad.com/" target="_blank">
          Lunar comunidad
        </Link>{' '}
        , una página extra que va a ser nuestra plataforma de pago la cual se va
        a poder acceder desde 2 lugar, 1 desde la web y el 2 desde la app.
      </P>
      <P>
        Hay que tener en cuenta que para esto tenemos que hacer que la web pase
        de http a https.
      </P>
      <H4>3 Implementación en la app</H4>
      <P>
        Para este paso tenemos que tener realizados, todos los pasos del NIVEL
        1.
      </P>
      <P>
        Para que la app se entere automaticamente de que el usuario cambio de
        plan, tenemos varias formas.
      </P>
      <ul>
        <LI>Push notifications.</LI>
        <Spacer size="xs" />
        <LI>Socket.io.</LI>
        <Spacer size="xs" />
        <LI>GraphQL.</LI>
        <Spacer size="xs" />
        <LI>Firebase.</LI>
        <Spacer size="xs" />
        <LI>
          O algún otro tipo de conección en tiempo real desde cualquier lenguaje
          de backend.
        </LI>
      </ul>
      <H4>Push notifications</H4>
      <P>
        Mediante push notifications podemos avisarle a la app que el usuario
        cambio el estado de su plan, de esta forma crear un disparador para que
        actualice los datos y automaticamente tenga acceso a su plan.
      </P>
      <H4>Socket.io</H4>
      <P>
        Si utilizamos socket.io vamos a tener que crear una API extra o crear un
        BFF para poder manejar todos los datos que requieran actualizaciones
        constantes.
      </P>
      <H4>GraphQL</H4>
      <P>
        Ir por este camino es bastante similar a ir por socket.io pero vamos a
        tener que por el lado de las APIs que soporten GraphQL, pero sin duda es
        el camino que mejor va a performar en el tiempo, por que con GraphQL
        podemos pedir lo que necesitemos y no que vengan datos innecesarios.
      </P>
      <H4>Firebase</H4>
      <P>
        Sin duda el camino más fácil de todos, es crear un Realtime Database o
        un Firestore, asociarlo con su usuario y manejar los planes y accesos.
        Firebase tiene su propia configuracion y su implementación especifica
        para manejar cambios en tiempo real.
      </P>
      <H4>
        O algún otro tipo de conección en tiempo real desde cualquier lenguaje
        de backend.
      </H4>
      <P>Cualquiera de estos caminos va a ser muy similares a Socket.io.</P>
      <H4>4 Acceso a contenido de cada plan</H4>
      <P>
        Los datos del usuario van a venir con un campo especificando el tipo de
        plan o subscription, este identificador va a tener que estar no solo
        asociado al contenido de cada plan sino a mostrar un modal, prompt o
        alert comunicandole al usuario que no puede acceder y dandole la opción
        de cambiar de plan.
      </P>
      <H4>5 Marketing</H4>
      <P>
        En este paso vamos a incentivar a los usuarios a cambiar de plan,
        mostrandoles las diferencias. Esto lo podemos hacer de varias formas.
      </P>
      <ul>
        <LI>En el onboarding.</LI>
        <Spacer size="xs" />
        <LI>Cuando quiera realizar una acción que necesite subscripción.</LI>
        <Spacer size="xs" />
        <LI>Por push notification.</LI>
        <Spacer size="xs" />
        <LI>Por email.</LI>
      </ul>
      <H4>En el onboarding</H4>
      <P>
        Como primer aprouch vamos a crear un nuevo paso al onboarding, dando al
        usuario la posibilidad de elegir un plan, de este modo le mostramos al
        usuario los diferentes planes y los beneficios de cada uno.
      </P>
      <H4>Cuando quiera realizar una acción que necesite subscripción</H4>
      <P>
        Cuando el usuario quiera acceder a un contenido de plan superior, darle
        feedback al usuario de que no puede por que no puede y como cambiar su
        plan para poder acceder.
      </P>
      <H4>Por push notification</H4>
      <P>
        Con push notification podemos darle un poco de incentivo al usuario de
        que vea los planes, más que nada cuando se agregue algo a algun plan o
        un nuevo plan.
      </P>
      <H4>Por email</H4>
      <P>
        Al igual que en push notification pero dandole mucho más contexto y
        información de todo lo nuevo.
      </P>
    </Group>
    <Group type="footer">
      <Spacer />
      <P color="white">Comenzado desde 1 de marzo 2021.</P>
    </Group>
  </ScreenWrapper>
);
