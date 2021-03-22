import React, { FunctionComponent } from 'react';

import { ScreenWrapper } from '../../ui/screen-wrapper';
import { SubHeader } from '../../ui/sub-header';
import { Group } from '../../ui/group';
import { Link } from '../../ui/link';
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
      <P>Contenido de B listado</P>
      <H3>C - Revisión de procesos de comunicación de usuarios</H3>
      <ol>
        <LI emphasis="medium">Servicio de mailing.</LI>
        <Spacer size="xs" />
      </ol>
      <P>Contenido de C listado</P>
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
      <P>Contenido de D listado</P>
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
