import React, { FunctionComponent } from 'react';

import { ScreenWrapper } from '../../ui/screen-wrapper';
import { SubHeader } from '../../ui/sub-header';
import { Group } from '../../ui/group';
import { Link, NavigationLink } from '../../ui/link';
import { Spacer } from '../../ui/spacer';
import { CodeBlock } from '../../ui/code-block';
import { H2, H3, H4, P, LI, Span } from '../../ui/typography';
import {
  proptypesPluginInstall,
  proptypesPluginConfig,
  proptypesRecomended1,
  proptypesRecomended2,
} from './codes';

export const NivelTwo: FunctionComponent = () => (
  <ScreenWrapper>
    <SubHeader />
    <Group type="header">
      <H2>Lunar consultoría</H2>
    </Group>
    <Group type="body">
      <H3>B - Revisión de notificaciones</H3>
      <ol>
        <LI emphasis="medium">
          Notificaciones regulares "Contenido del día" - mostrar en un modal
          cuando se abre la app.
        </LI>
        <Spacer size="xs" />
        <LI emphasis="medium">Notificaciones push.</LI>
        <Spacer size="xs" />
      </ol>
      <P>
        Vamos a instalar y aprender a usar{' '}
        <NavigationLink to="/push-notifications">
          Push notifications
        </NavigationLink>
      </P>
      <H3>C - Revisión de procesos de comunicación de usuarios</H3>
      <ol>
        <LI emphasis="medium">Servicio de mailing.</LI>
        <Spacer size="xs" />
      </ol>
      <P>
        Con respecto a este tema la verdad es simple, podemos probar servicios
        locales como.
      </P>
      <ol>
        <LI emphasis="medium">
          <Link href="https://arrobamail.com/" target="_blank">
            Arrobamail.
          </Link>
        </LI>
        <Spacer size="xs" />
        <LI emphasis="medium">
          <Link
            href="https://argentinavirtual.ar/el-palomo-e-mail-marketing/"
            target="_blank"
          >
            Argentina virtual.
          </Link>
        </LI>
      </ol>
      <P>O podemos ir a los conocidos internacionales.</P>
      <ol>
        <LI emphasis="medium">
          <Link
            href="https://www.constantcontact.com/es/home-page"
            target="_blank"
          >
            Constant Contact.
          </Link>
        </LI>
        <Spacer size="xs" />
        <LI emphasis="medium">
          <Link
            href="https://www.sendinblue.com/email-marketing-software/"
            target="_blank"
          >
            Send in blue.
          </Link>
        </LI>
        <Spacer size="xs" />
        <LI emphasis="medium">
          <Link href="https://mailchimp.com/es/" target="_blank">
            Mailchimp.
          </Link>
        </LI>
        <Spacer size="xs" />
        <LI emphasis="medium">
          <Link href="https://aws.amazon.com/es/ses/" target="_blank">
            Amazon simple email service.
          </Link>
        </LI>
      </ol>
      <P>Todo depende de cuanto podamos invertir.</P>
      <H3>D - Anticipar las librerías para suscripciones</H3>
      <ol>
        <LI emphasis="medium">Ingresar y editar ciclos previos.</LI>
        <Spacer size="xs" />
        <LI emphasis="medium">
          Dashboard con visualización temporal de los encuestas, ánimos,
          síntomas.
        </LI>
        <Spacer size="xs" />
        <LI emphasis="medium">
          Integración de calendario lunar con calendario gregoriano menstrual.
        </LI>
        <Spacer size="xs" />
        <LI emphasis="medium">
          Definir los mejores modos de suscribir a las usuarias, cobrarles,
          personalizar el contenido.
        </LI>
        <Spacer size="xs" />
        <LI emphasis="medium">Suscripciones internas versus externas.</LI>
      </ol>
      <P>Vamos a ver que tenemos para cobrar suscripciones dentro de la App.</P>
      <ol>
        <LI emphasis="medium">
          <Link
            href="https://www.revenuecat.com/platform/react-native"
            target="_blank"
          >
            Revenue Cat.
          </Link>
        </LI>
        <Spacer size="xs" />
        <LI emphasis="medium">
          <Link
            href="https://qonversion.io/in-app-purchases-toolkit"
            target="_blank"
          >
            Qonversion.
          </Link>
        </LI>
      </ol>
      <P>
        Destaco estas dos SDK por que no cobran nada por mes si no superamos los
        10k (10.0000) dolares, podría ser una muy buena forma gratis de empezar
        a cobrar las suscripciones.
      </P>
      <P>Ahora vamos a ver las externas.</P>
      <ol>
        <LI emphasis="medium">
          <Link
            href="https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-api/introduction"
            target="_blank"
          >
            Mercado Pago.
          </Link>
        </LI>
        <Spacer size="xs" />
        <LI emphasis="medium">
          <Link
            href="https://stripe.com/docs/development/quickstart"
            target="_blank"
          >
            Stripe.
          </Link>
        </LI>
      </ol>
      <P>
        Las más usadas, obvio MP para Argentina y Stripe para el resto del
        mundo, ojo que estás tambien pueden ser internar, pero MP es muy difícil
        de integrar.
      </P>
      <P>
        Las dos formas son muy buenas posibilidades, pero cosas que hay que
        tener en cuenta, si vamos por las internar no solo son más dificiles de
        integrar sino que los store se llevan un feed de nuestras suscripciones.
      </P>
      <P>
        Por lo que vi en aplicaciones muy usadas como Linkedin, cuando te
        suscripbis te sacan de la app y no son los unicos, elegiria ir por las
        externar en la primera versión de las suscripciones.
      </P>
      <H3>
        E - Sugerencias para enriquecer los espacios de creación de contenido
      </H3>
      <ol>
        <LI emphasis="medium">Customizar actuales sliders de cada fase.</LI>
        <Spacer size="xs" />
        <LI emphasis="medium">Revisión de herramientas de backend.</LI>
        <Spacer size="xs" />
        <LI emphasis="medium">
          Reprodución de video hosteado em YT / vimeo / IGTV.
        </LI>
      </ol>
      <P>Contenido de E listado</P>
      <H3>F - Testeos</H3>
      <ol>
        <LI emphasis="medium">
          <Link href="https://github.com/facebook/prop-types" target="_blank">
            Prop types.
          </Link>
        </LI>
        <Spacer size="xs" />
        <LI emphasis="medium">
          <Link
            href="https://jestjs.io/docs/tutorial-react-native"
            target="_blank"
          >
            Jest.
          </Link>{' '}
          y{' '}
          <Link
            href="https://github.com/callstack/react-native-testing-library"
            target="_blank"
          >
            React native testing library.
          </Link>
          .
        </LI>
        <Spacer size="xs" />
        <LI emphasis="medium">
          <Link href="https://github.com/wix/Detox" target="_blank">
            Detox.
          </Link>
        </LI>
        <Spacer size="xs" />
        <LI emphasis="medium">Unit, integration y E2E test.</LI>
        <Spacer size="xs" />
        <LI emphasis="medium">Gestionar los reclamos técnicos.</LI>
      </ol>
      <H4>PASO 1</H4>
      <P>
        En este paso vamos a mejorar lo que ya tenemos, para esto necesitamos
        hacer dos cosas.
      </P>
      <P>
        Primero instalamos y configurar correctamente prop types para que nos
        avise cuando y donde necesitamos usarlo.
      </P>
      <CodeBlock
        code={proptypesPluginInstall}
        language="javascript"
        showLineNumbers={false}
      />
      <P>Configuramos en .eslintrc.</P>
      <CodeBlock
        code={proptypesPluginConfig}
        language="javascript"
        showLineNumbers={false}
      />
      <P>Ahora si podemos empezar a usarlo correctamente.</P>
      <CodeBlock
        code={proptypesRecomended1}
        language="javascript"
        showLineNumbers={false}
      />
      <P>
        Pero tenemos que ir más al detalle si queremos que nuestros types sean
        más seguros y confiables.
      </P>
      <CodeBlock
        code={proptypesRecomended2}
        language="javascript"
        showLineNumbers={false}
      />
      <P>
        Con esto podemos bajar un % de posibles bugs, lo cual hace que el código
        se más mantenible.
      </P>
    </Group>
    <Group type="footer">
      <Spacer />
      <P color="white">Comenzado desde 1 de marzo 2021.</P>
    </Group>
  </ScreenWrapper>
);
