import React, { FunctionComponent } from 'react';

import { ScreenWrapper } from '../../ui/screen-wrapper';
import { Group } from '../../ui/group';
import { Link } from '../../ui/link';
import { Spacer } from '../../ui/spacer';
import { CodeBlock } from '../../ui/code-block';
import { H2, H3, P, LI } from '../../ui/typography';
import { install, eslintrc } from './codes';

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
    </Group>
    <Group type="footer">
      <Spacer />
      <H2>FOOTER</H2>
    </Group>
  </ScreenWrapper>
);
