import React, { FunctionComponent } from 'react';

import { ScreenWrapper } from '../../ui/screen-wrapper';
import { Group } from '../../ui/group';
import { NavigationLink } from '../../ui/link';
import { Spacer } from '../../ui/spacer';
import { Link } from '../../ui/link';
import { CodeBlock } from '../../ui/code-block';
import { H2, H3, H4, Span, P } from '../../ui/typography';
import { app, context, styledComponents, styledComponentsUse } from './codes';

export const StyledComponents: FunctionComponent = () => (
  <ScreenWrapper>
    <Group type="header">
      <H2>Styled components</H2>
    </Group>
    <Group type="body">
      <P>
        En este modulo vamos a configurar{' '}
        <Link href="https://styled-components.com/" target="_blank">
          styled components
        </Link>{' '}
        que va a ser nuestra tool para trabajar los estilos de nuestra
        aplicación.
      </P>
      <P>
        Esta configuración es para poder usar el{' '}
        <Span>typado ( typescript )</Span> de la forma más simple, intentando no
        importar en cada component de ui el type <Span>theme</Span>.
      </P>
      <H3>Styled components</H3>
      <P>
        Primero vamos a crear un archivo en la carpeta <Span>theme</Span>{' '}
        llamado <Span>styled-components</Span> donde vamos a configurar styled
        component para usarlo por este medio y no directamente de la libreria.
      </P>
      <CodeBlock
        code={styledComponents}
        language="javascript"
        showLineNumbers={false}
      />
      <P>Veamos un ejemplo de como vamos a usar styled comonents.</P>
      <CodeBlock
        code={styledComponentsUse}
        language="javascript"
        showLineNumbers={false}
      />
      <P>Por que esta mal usarlo directamente de la librería?</P>
      <P>
        En verdad no esta mal, pero no vamos a tener typado de nuestros
        componentes con las siguientes configuraciones, por este motivo
        necesitamos usarlo de este modo.
      </P>
      <H3>Context</H3>
      <CodeBlock code={context} language="javascript" showLineNumbers={false} />
      <H3>App</H3>
      <CodeBlock code={app} language="javascript" showLineNumbers={false} />
      <P>
        Este es un ejemplo de configuración, para poder usar de la forma más
        eficiente y simple styled components con typescript.
      </P>
    </Group>
    <Group type="footer">
      <Spacer />
      <P color="white">
        Próximo paso a optimizar{' '}
        <NavigationLink to="/theme">Theme</NavigationLink>.
      </P>
    </Group>
  </ScreenWrapper>
);
