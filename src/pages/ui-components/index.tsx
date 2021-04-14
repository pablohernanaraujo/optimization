import React, { FunctionComponent } from 'react';

import { ScreenWrapper } from '../../ui/screen-wrapper';
import { Group } from '../../ui/group';
import { NavigationLink } from '../../ui/link';
import { Spacer } from '../../ui/spacer';
import { H2, H3, H4, LI, P, Span } from '../../ui/typography';
import { CodeBlock } from '../../ui/code-block';
import { RegularImage } from '../../ui/images';
import {
  structureComponent,
  structureComponentComplex,
  index,
  indexComplex,
  container,
  containerUse,
  screenWrapper,
  screenWrapperUse,
  group,
  groupUse,
} from './codes';

export const UiComponents: FunctionComponent = () => (
  <ScreenWrapper>
    <Group type="header">
      <H2>UI Components</H2>
    </Group>
    <Group type="body">
      <H3>Listado de componentes</H3>
      <P>
        Este es el listado de los componentes necesarios para crear una
        aplicación.
      </P>
      <ul>
        <LI emphasis="medium">Container</LI>
        <Spacer size="xs" />
        <LI emphasis="medium">ScreenWrapper</LI>
        <Spacer size="xs" />
        <LI emphasis="medium">Group</LI>
        <Spacer size="xs" />
        <LI emphasis="medium">Spacer</LI>
        <Spacer size="xs" />
        <LI emphasis="medium">Icons</LI>
        <Spacer size="xs" />
        <LI emphasis="medium">Images</LI>
        <Spacer size="xs" />
        <LI emphasis="medium">Fields</LI>
        <Spacer size="xs" />
        <LI emphasis="medium">Buttons</LI>
        <Spacer size="xs" />
        <LI emphasis="medium">Typography</LI>
      </ul>
      <P>
        Con estos pocos componentes es posible armar casi todas las patallas de
        una aplicación
      </P>
      <H3>Estructura de archivos</H3>
      <P>Tipo de estructura de archivos básico</P>
      <CodeBlock
        code={structureComponent}
        language="javascript"
        showLineNumbers={false}
      />
      <H4>Index.ts</H4>
      <CodeBlock code={index} language="javascript" showLineNumbers={false} />
      <P>Tipo de estructura de archivos compleja</P>
      <CodeBlock
        code={structureComponentComplex}
        language="javascript"
        showLineNumbers={false}
      />
      <H4>Index.ts</H4>
      <CodeBlock
        code={indexComplex}
        language="javascript"
        showLineNumbers={false}
      />

      <H2>Container</H2>
      <P>
        Este componente es el contenedor de todas las pantallas que tengan
        scroll por eso usa <Span>ScrollView</Span>, y usa internanmente al
        componente <Span>ScreenWrapper</Span>.
      </P>
      <P>
        Dato especial sobre este componente es que al estender los estilos del
        ScreenWrapper, se tiene que usar <Span>flexGrow </Span> en vez de{' '}
        <Span>flex</Span> y crearlo con <Span>StyleSheet</Span> en vez de{' '}
        <Span>StyledComponents</Span>.
      </P>
      <H4>Componente</H4>
      <CodeBlock
        code={container}
        language="javascript"
        showLineNumbers={false}
      />
      <H4>Implementación</H4>
      <CodeBlock
        code={containerUse}
        language="javascript"
        showLineNumbers={false}
      />
      <H4>Visual</H4>
      <RegularImage
        src="./images/ui-components/container.jpg"
        alt="firebase console"
        android
      />

      <H2>ScreenWrapper</H2>
      <P>
        Este componente muestra una pantalla que no tiene <Span>scroll</Span> y
        se encarga de guardar el teclado si se sale del <Span>TextInput</Span>.
      </P>
      <H4>Componente</H4>
      <CodeBlock
        code={screenWrapper}
        language="javascript"
        showLineNumbers={false}
      />
      <H4>Implementación</H4>
      <CodeBlock
        code={screenWrapperUse}
        language="javascript"
        showLineNumbers={false}
      />
      <H4>Visual</H4>
      <RegularImage
        src="./images/ui-components/screen-wrapper.jpg"
        alt="firebase console"
        android
      />

      <H2>Group</H2>
      <P>
        Este componente divide el espacio en 3 partes importantes{' '}
        <Span>header, body y footer</Span> pero puede tener algunos{' '}
        <Span>type</Span> más, cómo por ejemplo <Span>headerModal</Span>.
      </P>
      <H4>Componente</H4>
      <CodeBlock code={group} language="javascript" showLineNumbers={false} />
      <H4>Implementación</H4>
      <CodeBlock
        code={groupUse}
        language="javascript"
        showLineNumbers={false}
      />
      <H4>Visual</H4>
      <RegularImage
        src="./images/ui-components/group.jpg"
        alt="firebase console"
        android
      />
    </Group>
    <Group type="footer">
      <Spacer />
      <P color="white">
        Próximo paso a optimizar{' '}
        <NavigationLink to="/architecture">Architecture</NavigationLink>.
      </P>
    </Group>
  </ScreenWrapper>
);
