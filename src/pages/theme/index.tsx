import React, { FunctionComponent } from 'react';

import { ScreenWrapper } from '../../ui/screen-wrapper';
import { Group } from '../../ui/group';
import { NavigationLink } from '../../ui/link';
import { Spacer } from '../../ui/spacer';
import { Link } from '../../ui/link';
import { CodeBlock } from '../../ui/code-block';
import { H2, H3, H4, Span, P } from '../../ui/typography';
import { palette, colors, emphasis, spacers, text } from './codes';

export const Theme: FunctionComponent = () => (
  <ScreenWrapper>
    <Group type="header">
      <H2>Theme</H2>
    </Group>
    <Group type="body">
      <P>Vamos a ver que con poco podemos hacer mucho.</P>
      <P>
        En lo primero que nos vamos a enfocar es en la paleta de colores y vamos
        a usar{' '}
        <Link href="https://colornamer.netlify.app/" target="_blank">
          colornamer
        </Link>{' '}
        de <Span>netlify</Span> para nombrar los colores de nuestra palette.
      </P>
      <H3>Palette</H3>
      <CodeBlock code={palette} language="javascript" showLineNumbers={false} />
      <H3>Colors</H3>
      <CodeBlock code={colors} language="javascript" showLineNumbers={false} />
      <H3>Emphasis</H3>
      <CodeBlock
        code={emphasis}
        language="javascript"
        showLineNumbers={false}
      />
      <H3>Spacers</H3>
      <CodeBlock code={spacers} language="javascript" showLineNumbers={false} />
      <H3>Text</H3>
      <CodeBlock code={text} language="javascript" showLineNumbers={false} />
      <P>
        Con estos pocos datos vamos a poder tener centralizado cosas globales
        como el tamaño de los <Span>font sizes</Span> el <Span>espaceado</Span>{' '}
        los <Span>colores</Span> y muchas más cosas si queremos.
      </P>
    </Group>
    <Group type="footer">
      <Spacer />
      <P color="white">
        Próximo paso a optimizar{' '}
        <NavigationLink to="/ui-components">Ui components</NavigationLink>.
      </P>
    </Group>
  </ScreenWrapper>
);
