import React, { FunctionComponent } from 'react';

import { ScreenWrapper } from '../../ui/screen-wrapper';
import { Group } from '../../ui/group';
import { Link, NavigationLink } from '../../ui/link';
import { Spacer } from '../../ui/spacer';
import { CodeBlock } from '../../ui/code-block';
import { H2, H3, H4, P, Span, LI } from '../../ui/typography';
import { locationFiles, component, environments } from './codes';

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
      <P>
        En producción, generalmente debemos ocuparnos de las siguientes cosas:
      </P>
      <ul>
        <LI>Analytics.</LI>
        <P>
          Hay varias formas de trackear eventos, como{' '}
          <Link href="https://analytics.google.com/" target="_blank">
            Google analitycs
          </Link>
          ,{' '}
          <Link href="https://firebase.google.com/" target="_blank">
            Firebase analitycs
          </Link>
          ,{' '}
          <Link href="https://segment.com/" target="_blank">
            Segment
          </Link>{' '}
          o{' '}
          <Link href="https://www.hotjar.com/" target="_blank">
            Hotjar
          </Link>
          .
        </P>
        <LI>Status monitoring.</LI>
        <P>
          Tambien necesitamos manejar y monitorear los errores de las
          aplicaciones, para eso podemos usar herramientas como{' '}
          <Link href="https://sentry.io/welcome/" target="_blank">
            Sentry
          </Link>{' '}
          o{' '}
          <Link href="https://www.bugsnag.com/" target="_blank">
            Bugsnag
          </Link>
          .
        </P>
        <LI>Performance.</LI>
        <P>
          Un tema sensible es el rendimiento, esto incluye tiempoes de
          respuestas y render, para web tenemos esta herramienta de google{' '}
          <Link
            href="https://developers.google.com/web/tools/lighthouse/"
            target="_blank"
          >
            Lighthouse
          </Link>{' '}
          y para native{' '}
          <Link href="https://firebase.google.com/?hl=es" target="_blank">
            Firebase performance
          </Link>{' '}
          pero es un tema mas complejo Launch time, Memory leakage, Large app
          size son cosas que tenemos que tener cuidado a la hora de querer que
          nuestras app mejore su rendimiento, vamos a verlo en profundidad mas
          adelante.
        </P>
        <LI>A/B testing.</LI>
        <P>
          Todo tipo de soluciones de pruebas A / B o feature flags.{' '}
          <Link href="https://leananalytics.io/" target="_blank">
            Leananalytics
          </Link>{' '}
          es una excelente herramienta, en algunos casos hay que agregarle cosas
          para poder medir casos más complejos.{' '}
          <Link
            href="https://www.split.io/blog/controlled-rollout-react-native/"
            target="_blank"
          >
            Split
          </Link>{' '}
          es otra muy buena herramienta, más completa pero paga.{' '}
          <Link href="https://firebase.google.com/?hl=es" target="_blank">
            Firebase A/B testing
          </Link>{' '}
          y obvio Firebase tambien tiene.
        </P>
        <LI>Caching.</LI>
        <P>
          Herramientas cómo{' '}
          <Link href="https://varnish-cache.org/" target="_blank">
            Varnish
          </Link>
          ,{' '}
          <Link href="https://www.cloudflare.com/es-es/" target="_blank">
            Cloudflare
          </Link>{' '}
          o desarrollo de Api gateway podría ser una muy buena solución.
        </P>
      </ul>
      <Spacer size="xs" />
      <H3>6 - Development</H3>
      <H4>API</H4>
      <P>
        Una API cómoda para trabajar localmente es la segunda cosa asombrosa que
        podemos hacer para mejorar la experiencia del desarrollador y la
        velocidad de desarrollo. Por lo general, proporcionar API localmente
        para los ingenieros de front-end no es un proceso trivial: esto podría
        incluir la instalación de tools o frameworks con los que no están
        familiarizados. Incluso si la configuración está acoplada, esto puede
        requerir una gran cantidad de recursos informáticos de las máquinas del
        desarrollador (si no es así, esto se puede considerar como una
        configuración). ¿Cuál puede ser una solución en este caso? API servida
        externamente. Este puede ser un solo servidor para todos los
        programadores o algún mecanismo para iniciar fácilmente su propio
        servidor dedicado para el desarrollo.
      </P>
      <H4>CI</H4>
      <P>
        Continuous integration es una parte muy importante. Hay muchas tools
        para poder ahcer esto como por ejemplo{' '}
        <Link href="https://circleci.com/" target="_blank">
          Circle ci
        </Link>{' '}
        ,{' '}
        <Link href="https://www.travis-ci.com/" target="_blank">
          Travis ci
        </Link>{' '}
        y algunas ya vienen integradas con por ejemplo en{' '}
        <Link href="https://github.com/" target="_blank">
          Github actions
        </Link>{' '}
        o{' '}
        <Link href="https://www.heroku.com/" target="_blank">
          Heroku ci
        </Link>
        .
      </P>
      <P>
        La configuración de CI del proyecto en particular, en mi opinión,
        debería ser parte del trabajo del equipo, que está trabajando en el
        proyecto. Esto le da la oportunidad al CI de ser estable porque hay
        personas que están interesadas en el, lo use todos los días y tenga el
        poder y las habilidades para arreglarlo, configurarlo y mejorarlo.
      </P>
      <H4>Environments</H4>
      <P>
        El poder manejar ambientes para las diferentes etapas del desarrollo es
        fundamental en todo proyecto.
      </P>
      <CodeBlock
        code={environments}
        language="javascript"
        showLineNumbers={false}
      />
      <P>
        Son los más comunes pero podrían llamarse algunos de diferente formas
        como <Span>test</Span>, podría no usar alguno como <Span>stage</Span>{' '}
        depende del proyecto y el equipo.
      </P>
      <Spacer size="xs" />
      <H3>7 - Modularity</H3>
      <P>
        Cuanto mas grande sea donde trabajemos, el código podría crecer muy
        rápido y exponecialmente no es algo raro. De ahí surgen problemas CI
        lentos, problemas de trabajo colaborativo, test lentos, etc. Entoces una
        gran parte de la arquitectura es decidir que tan granular queremos
        nuestras aplicaciones o módulos independientes.
      </P>
      <P>Hay 4 modelos básicos</P>
      <ul>
        <LI>Monolith.</LI>
        <P>
          Un gran repositorio con un solo proyecto y todo el código allí, todos
          los equipos están trabajando juntos en este repositorio al mismo
          tiempo.
        </P>
        <LI>Monorepo.</LI>
        <P>
          Muchos proyectos, pero todavía un gran repositorio. Todos los equipos
          siguen trabajando en el mismo repositorio, pero con diferentes
          proyectos. Ya existen oportunidades para solucionar algunos problemas,
          que tenemos con un enfoque monolítico, ejecutando pipelines solo para
          proyectos específicos, los proyectos tienen conjuntos de pruebas más
          pequeños, etc. Herramientas como Lerna pueden hacer su vida mucho más
          fácil en caso de que elija este enfoque.
        </P>
        <LI>Repo per project.</LI>
        <P>
          Cada proyecto tiene su propio repositorio y todas las cosas de apoyo,
          como canalizaciones de CI, implementaciones, etc.
        </P>
        <LI>Micro frontend.</LI>
        <P>
          La idea detrás de Micro Frontends es pensar en un sitio web o
          aplicación web como una composición de características que son
          propiedad de equipos independientes. Cada equipo tiene un área de
          negocio definida o misión de la que se preocupa y se especializa. Un
          equipo es cross functional y desarrolla sus características
          end-to-end, desde la base de datos hasta la interfaz de usuario.
        </P>
      </ul>
      <P>
        En todos esos modelos, el proyecto puede significar una aplicación de
        frontend independiente, una página, un módulo de frontend independiente,
        etc. Esto depende de cuán granular desee decidir dividir sus
        aplicaciones de front-end. En la mayoría de los casos, esta división
        debe estar sincronizada con la estructura organizativa deseada y la
        gestión de personas.
      </P>
      <P>
        El segundo gran tema después de decidir cómo dividir su aplicación será
        cómo conectar esas piezas (si decide dividir su aplicación).
      </P>
      <ul>
        <LI>Build-time composition.</LI>
        <P>
          Sus proyectos pueden ser solo paquetes npm, instalados y compuestos
          durante el tiempo de compilación.
        </P>
        <LI>Server-side composition.</LI>
        <P>
          Este enfoque generalmente incluye la representación del lado del
          servidor y la composición que se realiza en un servidor.
        </P>
        <LI>Client-side composition.</LI>
        <P>
          Composición de los proyectos dentro del navegador. Además, es muy
          importante mencionar la{' '}
          <Link
            href="https://webpack.js.org/blog/2020-10-10-webpack-5-release/#module-federation"
            target="_blank"
          >
            Federación de módulos
          </Link>
          , un nuevo enfoque introducido en{' '}
          <Link
            href="https://webpack.js.org/blog/2020-10-10-webpack-5-release/#module-federation"
            target="_blank"
          >
            Webpack 5
          </Link>
          .
        </P>
        <LI>Route composition.</LI>
        <P>Súper simple: solo cada proyecto tiene su propia URL.</P>
      </ul>
      <H3>8 - Testing</H3>
      <P>
        Hay tantos recursos disponibles sobre pruebas para aplicaciones de
        front-end, por lo que trataría de no entrar en detalles, que puede
        encontrar fácilmente, pero centrarme más en los problemas de las grandes
        organizaciones y en cómo podemos resolverlos.
      </P>
      <P>
        Posibles niveles de prueba que desea tener en tu estrategia de prueba:
      </P>
      <ul>
        <LI>Unit testing</LI>
        <LI>Integration testing</LI>
        <LI>E2E testing</LI>
      </ul>
      <P>
        Además, como segundo paso, debemos unificarlos en diferentes
        aplicaciones frontend de la empresa, para que la gente no tenga
        preguntas sobre cómo y qué probar cuando se cambia a un proyecto
        diferente.
      </P>
      <P>
        Y el último, pruebas de producción sobre los flujos comerciales más
        importantes. Lo más probable es que funcionen mejor si los ejecuta
        directamente en el entorno de producción, pero también puede ser posible
        una modificación cuando podemos ejecutar tales pruebas en un entorno de
        staging/test, que está muy cerca del de producción o incluso lo refleja.
        Hay un artículo muy bueno sobre este tema,{' '}
        <Link
          href="https://copyconstruct.medium.com/testing-in-production-the-safe-way-18ca102d0ef1"
          target="_blank"
        >
          aquí
        </Link>
        .
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
