import React, { FunctionComponent } from 'react';

import { ScreenWrapper } from '../../ui/screen-wrapper';
import { Group } from '../../ui/group';
import { NavigationLink } from '../../ui/link';
import { Spacer } from '../../ui/spacer';
import { H2, H3, H4, LI, P, Span } from '../../ui/typography';
import { CodeBlock } from '../../ui/code-block';
import { RegularImage } from '../../ui/images';
import { Link } from '../../ui/link';
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
  spacer,
  spacerUse,
  icon,
  iconUse,
  iconSvg,
  iconSvgTypes,
  buttonBase,
  buttonRegular,
  buttonLink,
  buttonUse,
  typographyBase,
  typographyUse,
  h1,
  h2,
  h3,
  h4,
  h5,
  body1,
  body2,
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

      <H2>Spacer</H2>
      <P>
        Este componente divide un componente de otro por medio del size variando
        su height, las posibilidades son <Span>xs, s, m, l</Span> y{' '}
        <Span>xl</Span>.
      </P>
      <H4>Componente</H4>
      <CodeBlock code={spacer} language="javascript" showLineNumbers={false} />
      <H4>Implementación</H4>
      <CodeBlock
        code={spacerUse}
        language="javascript"
        showLineNumbers={false}
      />
      <H4>Visual</H4>
      <RegularImage
        src="./images/ui-components/spacer.jpg"
        alt="firebase console"
        android
      />

      <H2>Icons</H2>
      <P>
        Este componente es un poco más complejo, por que no solo vamos a crear
        un componente de iconos sino que vamos a pasar un <Span>svg</Span> a{' '}
        <Span>tsx</Span> para poder customizarlo.
      </P>
      <P>
        Para poder pasar de svg a tsx vamos a usar{' '}
        <Link
          href="https://github.com/react-native-svg/react-native-svg"
          target="_blank"
        >
          react-native-svg
        </Link>
        .
      </P>
      <H4>Componentes</H4>
      <P>
        En una carpeta extra dentro del componente vamos a crear{' '}
        <Span>icons-svg</Span>.
      </P>
      <CodeBlock code={iconSvg} language="javascript" showLineNumbers={false} />
      <H4>Icon</H4>
      <CodeBlock code={icon} language="javascript" showLineNumbers={false} />
      <H4>Types</H4>
      <CodeBlock
        code={iconSvgTypes}
        language="javascript"
        showLineNumbers={false}
      />
      <H4>Implementación</H4>
      <CodeBlock code={iconUse} language="javascript" showLineNumbers={false} />
      <H4>Visual</H4>
      <RegularImage
        src="./images/ui-components/icon.jpg"
        alt="firebase console"
        android
      />

      <H2>Buttons</H2>
      <P>
        Este componente es uno de los más usados, por ese motivo vamos a usar
        una base compartida para crear varios tipos de botones.
      </P>
      <H4>Componentes</H4>
      <H3>base</H3>
      <CodeBlock
        code={buttonBase}
        language="javascript"
        showLineNumbers={false}
      />
      <H3>button-regular</H3>
      <CodeBlock
        code={buttonRegular}
        language="javascript"
        showLineNumbers={false}
      />
      <H3>button-link</H3>
      <CodeBlock
        code={buttonLink}
        language="javascript"
        showLineNumbers={false}
      />
      <H4>Implementación</H4>
      <CodeBlock
        code={buttonUse}
        language="javascript"
        showLineNumbers={false}
      />
      <H4>Visual</H4>
      <RegularImage
        src="./images/ui-components/buttons.jpg"
        alt="firebase console"
        android
      />

      <H2>Typography</H2>
      <P>Estos componentes van a usarse en los textos de toda la aplicación.</P>
      <H4>Componentes</H4>
      <H3>base</H3>
      <CodeBlock
        code={typographyBase}
        language="javascript"
        showLineNumbers={false}
      />
      <H3>H1</H3>
      <CodeBlock code={h1} language="javascript" showLineNumbers={false} />
      <H3>H2</H3>
      <CodeBlock code={h2} language="javascript" showLineNumbers={false} />
      <H3>H3</H3>
      <CodeBlock code={h3} language="javascript" showLineNumbers={false} />
      <H3>H4</H3>
      <CodeBlock code={h4} language="javascript" showLineNumbers={false} />
      <H3>H5</H3>
      <CodeBlock code={h5} language="javascript" showLineNumbers={false} />
      <H3>Body1</H3>
      <CodeBlock code={body1} language="javascript" showLineNumbers={false} />
      <H3>Body2</H3>
      <CodeBlock code={body2} language="javascript" showLineNumbers={false} />
      <H4>Implementación</H4>
      <CodeBlock
        code={typographyUse}
        language="javascript"
        showLineNumbers={false}
      />
      <H4>Visual</H4>
      <RegularImage
        src="./images/ui-components/typography.jpg"
        alt="firebase console"
        android
      />
    </Group>
    <Group type="footer">
      <Spacer />
      <P color="white">
        Próximo paso a optimizar{' '}
        <NavigationLink to="/styled-components">
          Styled components
        </NavigationLink>
        .
      </P>
    </Group>
  </ScreenWrapper>
);
