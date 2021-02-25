import React, { FunctionComponent } from 'react';

import { ScreenWrapper } from '../../ui/screen-wrapper';
import { Group } from '../../ui/group';
import { Link, NavigationLink } from '../../ui/link';
import { Spacer } from '../../ui/spacer';
import { CodeBlock } from '../../ui/code-block';
import { H2, H3, H4, P, Span, LI } from '../../ui/typography';
import { locationFiles, component } from './codes';

export const Architecture: FunctionComponent = () => (
  <ScreenWrapper>
    <Group type="header">
      <H2>Architecture</H2>
    </Group>
    <Group type="body">
      <H3>1 - Visual code</H3>
      <P>
        Para poder comenzar con el pie derecho deberiamos tener en cuenta dos
        cosas muy importantes.
      </P>
      <ul>
        <LI>Brand recognition.</LI>
        <LI>The same UI/UX.</LI>
      </ul>
      <P>
        Para poder lograr esto necesitamos tener un{' '}
        <NavigationLink to="/design-system">Design system</NavigationLink>. Esto
        debería ser proporcionado por el equipo de diseño siguiendo los design
        guidelines. Sin duda esto es tarea compleja y necesitmos muchas
        discuciones y aliniamientos entre el equipo de diseño, programadores y
        producto.
      </P>
      <P>Esto lo podemos separar en tres partes:</P>
      <H4>Design system</H4>
      <P>
        Es una herramienta colaborativa, creada por componentes re utilizables y
        guiada por estándares. Estos sistemas nos permiten poder administrar de
        la mejor manera, pudiendo lograr un producto mas eficiente.
      </P>
      <H4>Documentation</H4>
      <P>
        Esto nos permite poder tener un lugar donde ver todos los componentes
        creados. Podemos elegir entre varias herramientas como{' '}
        <Link href="https://storybook.js.org/" target="_blank">
          Storybook
        </Link>{' '}
        o{' '}
        <Link href="https://react-styleguidist.js.org/" target="_blank">
          Styleguidist
        </Link>{' '}
        .
      </P>
      <H4>UI library</H4>
      <P>
        Para poder re usar los component en distintas plataformas vamos a
        necesitar publicarlas, las dos mejores son{' '}
        <Link href="https://bit.dev/" target="_blank">
          Bit
        </Link>{' '}
        nos da muchísima flexibilidad y velocidad a la hora de crearla y
        utilizarla{' '}
        <Link href="https://www.npmjs.com/" target="_blank">
          npm
        </Link>{' '}
        obviamente es una opción, pero hoy no da tanta flexibilidad ni velocidad
        como Bit.
      </P>
      <Spacer size="xs" />
      <H3>2 - Code structure</H3>
      <P>
        En el día a día, se implementan features, se arreglan bugs y se hacen
        refactor de código si es necesario. Tenemos que mantener el código
        tratando de que sea fácil de entender. Pero que pas cuando comenzamos a
        tener 1, 2 o muchos chicos y grandes proyectos.
      </P>
      <P>
        Cómo podemos manejar la consistencia del código y la pautas de
        estructura para todos los proyectos.
      </P>
      <ul>
        <LI>La estructura de carpetas en el proyecto.</LI>
        <P>
          Cuando los programadores entran a un proyecto por primera vez, si
          todos los proyectos tienen el mismo encarpetado va a ser mucho mas
          fácil de navegar y buscar.
        </P>
        <LI>Archivos de configuración o de archivos secundarios.</LI>
        <P>
          Archivos como <Span>package.json</Span>, <Span>.gitignore</Span>,{' '}
          <Span>.editorconfig</Span>,<Span>tsconfig.json</Span>,{' '}
          <Span>.eslintrc</Span>, <Span>.prettierrc</Span>.
        </P>
        <LI>Ubicación fija de los tipos de archivos.</LI>
        <P>
          Debemos intentar seguir la misma ubicación siempre que sea la misma
          estructura. Cómo por ejemplo la posible estructura de un componente.
        </P>
        <CodeBlock
          code={locationFiles}
          language="javascript"
          showLineNumbers={false}
        />
        <P>
          Es un ejemplo de posibles archivos que tengan un componente, lo voy a
          profundizar más adelante.
        </P>
        <LI>Estructura interna de los componentes</LI>
        <P>
          Del mismo modo la estructura dentro de un archivo debería ser la
          misma, orden de imports, exports, funcional component hooks render,
          types etc.
        </P>
        <CodeBlock
          code={component}
          language="javascript"
          showLineNumbers={false}
        />
        <P>
          Este es un tópico complejo que también profundizaremos mas adelante.
        </P>
        <LI>Convenciones de nombres</LI>
        <P>
          Esto incluye nombres de carpetas, archivos, variables, funciones,
          clases, tipos, etc.
        </P>
        <P>
          Sin duda se puede discutir horas este tema lo normal es tomar
          estandares o elegir lo que al equipo le guste más usar.
        </P>
        <LI>Convenciones de codificación</LI>
        <P>
          En general, diría que las convenciones de codificación es una sección
          muy amplia, pero aquí solo quiero incluir cosas que no encajan en el
          resto de las secciones, como ; o no ; y similares.
        </P>
      </ul>
      <Spacer size="xs" />
      <H3>3 - Tech Stack</H3>
      <P>
        Cómo en la sección anterior, queremos tener una unificación del stack
        cross proyectosde la organización. La razon es muy similar a la anterior
        cuando un programador entra nuevo o pasa de un proyecto a otro se tiene
        que ver familiarizado con las tecnologías.
      </P>
      <P>
        En los proyectos de Frontend, podemos ver varios tipos de stacks, todos
        liderados por el lenguaje seleccionado por lo general javascript como en
        este caso, pero pueden ser otros.
      </P>
      <P>
        Mensiono acá un stack genérico que puede llegar a adaptarse a la mayoría
        de los proyectos, podría llegar a ser un buen punto de partida.
      </P>
      <ul>
        <LI>
          <Link href="https://reactnative.dev/" target="_blank">
            React native
          </Link>
        </LI>
        <Spacer size="xs" />
        <LI>
          <Link href="https://www.typescriptlang.org/" target="_blank">
            Typescript
          </Link>
        </LI>
        <Spacer size="xs" />
        <LI>
          <Link href="https://reactnavigation.org/" target="_blank">
            React navigation
          </Link>
        </LI>
        <Spacer size="xs" />
        <LI>
          <Link href="https://recoiljs.org/" target="_blank">
            Recoil
          </Link>
        </LI>
        <Spacer size="xs" />
        <LI>
          <Link href="https://styled-components.com/" target="_blank">
            Styled components
          </Link>
        </LI>
        <Spacer size="xs" />
        <LI>
          <Link href="https://jestjs.io/" target="_blank">
            Jest
          </Link>
        </LI>
        <Spacer size="xs" />
        <LI>
          <Link href="https://github.com/wix/Detox" target="_blank">
            Detox
          </Link>
        </LI>
      </ul>
      <Spacer size="xs" />
      <H3>4 - Tooling</H3>
      <P>
        Este tema es muy importante. Usamos algunas herramientas adicionales
        ahora en casi todas partes: para crear aplicaciones, CI, generadores de
        componentes y mucho más. Por eso veo si podemos elegir las herramientas
        correctas para nuestros proyectos; es crucial. Buenas herramientas vs
        malas herramientas (o ninguna herramienta), es lo mismo que una
        comparación entre la automatización y las pruebas manuales.
      </P>
      <P>
        Por ejemplo, si tiene un estilo de coding style, puede darles a las
        personas el conjunto de herramientas de linting, que de manera
        predeterminada sigan esas reglas.
      </P>
      <ul>
        <LI>Code style and structure.</LI>
        <P>
          Como comentamos antes, esto se puede automatizar fácilmente con
          herramientas.
        </P>
        <LI>Project bootstrapping.</LI>
        <P>
          No es necesario crear una nueva estructura de proyecto, instalar
          manualmente todos los paquetes que se necesitan, etc.
        </P>
        <LI>Components generation.</LI>
        <P>
          La mayoría de las veces, algún componente de su aplicación no contiene
          un solo archivo, por lo que la creación de archivos, vincularlos /
          importarlos puede llevar tiempo, por lo que esto se puede automatizar.
        </P>
        <LI>Start and Build.</LI>
        <P>
          Por supuesto, lo más obvio para automatizar: cómo construye o inicia
          su aplicación.
        </P>
        <LI>Test.</LI>
        <P>
          El proceso de crear su aplicación para pruebas y ejecutar todo tipo de
          pruebas: unit, integration, ent to end.
        </P>
        <LI>Dependencies management.</LI>
        <P>
          Como sabemos, alrededor del 80% de nuestro código ahora son
          dependencias. Por lo tanto, debemos mantenerlos actualizados y
          administrar eso en una gran empresa no es algo fácil de hacer.
        </P>
        <LI>Cross-projects dependencies.</LI>
        <P>
          Lo más probable es que nuestros proyectos no funcionen de forma
          aislada y puedan depender de otros proyectos o ser una dependencia de
          algún otro proyecto, por lo que es posible que necesitemos algunas
          herramientas para facilitar el proceso de vincularlos, desarrollando
          en una combinación de múltiples proyectos (como Bit , por ejemplo).
        </P>
        <LI>CI.</LI>
        <P>
          La CI es una parte esencial de nuestro conjunto de herramientas
          diarias y la automatización y unificación de la misma puede ser un
          trabajo muy beneficioso para su organización.
        </P>
      </ul>
      <P>
        Todos los proyectos son iguales y se mantienen y administran mediante el
        conjunto de herramientas unificado. Cada proyecto puede comenzar y
        construir de la misma manera. Los nuevos componentes se generan en el
        mismo lugar y con las mismas pautas de nomenclatura.
      </P>
      <P>
        Pero es así de "dulce" o tiene inconvenientes? Como ocurre con cualquier
        solución, tiene desventajas. Uno de ellos: se necesita algo de tiempo
        para incorporar nuevos programadores a su empresa. Pero si todo se hace
        de una manera muy natural (como la gente ya se acostumbró en otras
        herramientas existentes) y se documenta, entonces esto no se convierte
        en un gran problema cuando se compara con los beneficios de la velocidad
        de desarrollo, una oportunidad para que los programadores trabajen con
        cualquier base de código fácilmente.
      </P>
      <Spacer size="xs" />
      <H3>5 - Production</H3>
      <P>
        En esta parte de frontend architecture, los programadores son los que
        menos se preocupan. Tal vez porque no está conectado con el código en sí
        la mayor parte del tiempo y probablemente no sea tan emocionante, pero
        no menos importante.
      </P>
    </Group>
    <Group type="footer">
      <Spacer />
      <P color="white">
        Próximo paso a optimizar{' '}
        <NavigationLink to="/folder">Folder</NavigationLink>.
      </P>
    </Group>
  </ScreenWrapper>
);
