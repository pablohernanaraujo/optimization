import React, { FunctionComponent } from 'react';

import { ScreenWrapper } from '../../ui/screen-wrapper';
import { Group } from '../../ui/group';
import { Link, NavigationLink } from '../../ui/link';
import { Spacer } from '../../ui/spacer';
import { CodeBlock } from '../../ui/code-block';
import { H2, H3, P, LI } from '../../ui/typography';
import { install, eslintrc, settings, formats } from './codes';

export const Prettier: FunctionComponent = () => (
  <ScreenWrapper>
    <Group type="header">
      <H2>Prettier</H2>
    </Group>
    <Group type="body">
      <P>Es una herramienta que te ayuda a formatear el código.</P>
      <P>
        Cuando se trabaja en equipo es muy difícil mantener la consistencia del
        código de la aplicación, para eso se usa una herramienta como{' '}
        <Link href="https://prettier.io/" target="_blank">
          Prettier
        </Link>{' '}
        para poder resolver este problema.
      </P>
      <H3>Por qué necesitamos una herramienta para formateo del código?</H3>
      <ol>
        <LI emphasis="medium">Código más fácil de entender.</LI>
        <LI emphasis="medium">
          Mantiene un estilo consistente del código en todo el equipo.
        </LI>
        <LI emphasis="medium">Mantiene buenas prácticas.</LI>
        <LI emphasis="medium">
          Salva tiempo al momento de acomodar el código.
        </LI>
      </ol>
      <H3>1 - Instalación</H3>
      <P>Comenzamos instalando la librería.</P>
      <CodeBlock code={install} language="javascript" showLineNumbers={false} />
      <P>
        Y en la raíz del proyecto creamos un archivos llamado{' '}
        <strong>.eslintrc</strong> donde agregamos el siguiente contenido.
      </P>
      <CodeBlock
        code={eslintrc}
        language="javascript"
        showLineNumbers={false}
      />
      <P>
        Este archivos va a ser usado mucho más en detalle en{' '}
        <strong>Eslint</strong>.
      </P>
      <H3>2 - Configurar VSCode con Prettier</H3>
      <P>
        Buscamos en extensiones del VSCode Prettier y lo instalamos, esto va a
        hacer que cuando salvemos nuestro archivos se formatee.
      </P>
      <P>ACA VA LA IMAGEN</P>
      <P>Solo nos falta ir a preference/settings.</P>
      <CodeBlock
        code={settings}
        language="javascript"
        showLineNumbers={false}
      />
      <P>Formatos posibles.</P>
      <CodeBlock code={formats} language="javascript" showLineNumbers={false} />
      <P>Ya estamos listo para usar Prettier en el proyecto.</P>
    </Group>
    <Group type="footer">
      <Spacer />
      <P color="white">
        Próximo paso a optimizar{' '}
        <NavigationLink to="/eslint">Eslint</NavigationLink>.
      </P>
    </Group>
  </ScreenWrapper>
);
