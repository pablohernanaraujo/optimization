import React, { FunctionComponent } from 'react';

import { ScreenWrapper } from '../../ui/screen-wrapper';
import { Group } from '../../ui/group';
import { Link } from '../../ui/link';
import { Spacer } from '../../ui/spacer';
import { CodeBlock } from '../../ui/code-block';
import { install, eslintrc } from './codes';

export const Prettier: FunctionComponent = () => (
  <ScreenWrapper>
    <Group type="header">
      <h2>Prettier</h2>
    </Group>
    <Group type="body">
      <p>Es una herramienta que te ayuda a formatear el código.</p>
      <p>
        Cuando se trabaja en equipo es muy difícil mantener la consistencia del
        código de la aplicación, para eso se usa una herramienta como{' '}
        <Link href="https://prettier.io/" target="_blank">
          Prettier
        </Link>{' '}
        para poder resolver este problema.
      </p>
      <h3>Por qué necesitamos una herramienta para formateo del código?</h3>
      <ol>
        <li>Código más fácil de entender.</li>
        <li>Mantiene un estilo consistente del código en todo el equipo.</li>
        <li>Mantiene buenas prácticas.</li>
        <li>Salva tiempo al momento de acomodar el código.</li>
      </ol>
      <h3>1 - Instalación</h3>
      <p>Comenzamos instalando la librería.</p>
      <CodeBlock code={install} language="javascript" showLineNumbers={false} />
      <p>
        Y en la raíz del proyecto creamos un archivos llamado{' '}
        <strong>.eslintrc</strong> donde agregamos el siguiente contenido.
      </p>
      <CodeBlock
        code={eslintrc}
        language="javascript"
        showLineNumbers={false}
      />
    </Group>
    <Group type="footer">
      <Spacer />
      <h2>FOOTER</h2>
    </Group>
  </ScreenWrapper>
);
