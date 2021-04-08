import React, { FunctionComponent } from 'react';

import { ScreenWrapper } from '../../ui/screen-wrapper';
import { Group } from '../../ui/group';
import { NavigationLink } from '../../ui/link';
import { Spacer } from '../../ui/spacer';
import { H2, H3, H4, P, LI } from '../../ui/typography';

export const Principles: FunctionComponent = () => (
  <ScreenWrapper>
    <Group type="header">
      <H2>Principles</H2>
    </Group>
    <Group type="body">
      <P>
        Un tema muy importante cuando uno es autodidacta es sobre las bases;
        Cuales son estas bases de la programación? no solo es saber javascript
        que es el lenguaje que estamos usando, sino cómo podemos aplicarlo de la
        mejor manera.
      </P>
      <P>Para esto debemos aprender los principios.</P>
      <H3>SOLID</H3>
      <ul>
        <LI emphasis="medium">
          S: Single responsibility principle o Principio de responsabilidad
          única.
        </LI>
        <Spacer size="xs" />
        <LI emphasis="medium">
          O: Open/closed principle o Principio de abierto/cerrado.
        </LI>
        <Spacer size="xs" />
        <LI emphasis="medium">
          L: Liskov substitution principle o Principio de sustitución de Liskov.
        </LI>
        <Spacer size="xs" />
        <LI emphasis="medium">
          I: Interface segregation principle o Principio de segregación de la
          interfaz.
        </LI>
        <Spacer size="xs" />
        <LI emphasis="medium">
          D: Dependency inversion principle o Principio de inversión de
          dependencia.
        </LI>
      </ul>
      <H4>S - Principio de Responsabilidad Única</H4>
      <P>“A class should have one, and only one, reason to change”.</P>
      <P>
        La S del acrónimo del que hablamos hoy se refiere a Single
        Responsibility Principle (SRP). Según este principio “una clase debería
        tener una, y solo una, razón para cambiar”. Es esto, precisamente,
        “razón para cambiar”, lo que Robert C. Martin identifica como
        “responsabilidad”.
      </P>
      <P>
        El principio de Responsabilidad Única es el más importante y fundamental
        de SOLID, muy sencillo de explicar, pero el más difícil de seguir en la
        práctica.
      </P>
      <P>
        El propio Bob resume cómo hacerlo: “Gather together the things that
        change for the same reasons. Separate those things that change for
        different reasons”, es decir: “Reúne las cosas que cambian por las
        mismas razones. Separa aquellas que cambian por razones diferentes”.
      </P>
      <H4>O - Principio de Abierto/Cerrado</H4>
      <P>
        “You should be able to extend a classes behavior, without modifying it”.
      </P>
      <P>
        El segundo principio de SOLID lo formuló Bertrand Meyer en 1988 en su
        libro “Object Oriented Software Construction” y dice: “Deberías ser
        capaz de extender el comportamiento de una clase, sin modificarla”. En
        otras palabras: las clases que usas deberían estar abiertas para poder
        extenderse y cerradas para modificarse.
      </P>
      <P>
        En su blog Robert C. Martin defendió este principio que a priori puede
        parecer una paradoja. Es importante tener en cuenta el Open/Closed
        Principle (OCP) a la hora de desarrollar clases, librerías o frameworks.
      </P>
      <H4>L - Principio de Sustitución de Liskov</H4>
      <P>Principio de Sustitución de Liskov</P>
      <P>
        La L de SOLID alude al apellido de quien lo creó, Barbara Liskov, y dice
        que “las clases derivadas deben poder sustituirse por sus clases base”.
      </P>
      <P>
        Esto significa que los objetos deben poder ser reemplazados por
        instancias de sus subtipos sin alterar el correcto funcionamiento del
        sistema o lo que es lo mismo: si en un programa utilizamos cierta clase,
        deberíamos poder usar cualquiera de sus subclases sin interferir en la
        funcionalidad del programa.
      </P>
      <P>
        Según Robert C. Martin incumplir el Liskov Substitution Principle (LSP)
        implica violar también el principio de Abierto/Cerrado.
      </P>
      <H4>I - Principio de Segregación de la Interfaz</H4>
      <P>“Make fine grained interfaces that are client specific”.</P>
      <P>
        En el cuarto principio de SOLID, el tío Bob sugiere: “Haz interfaces que
        sean específicas para un tipo de cliente”, es decir, para una finalidad
        concreta.
      </P>
      <P>
        En este sentido, según el Interface Segregation Principle (ISP), es
        preferible contar con muchas interfaces que definan pocos métodos que
        tener una interface forzada a implementar muchos métodos a los que no
        dará uso.
      </P>
      <H4>D - Principio de Inversión de Dependencias</H4>
      <P>“Depend on abstractions, not on concretions”.</P>
      <P>
        Llegamos al último principio: “Depende de abstracciones, no de clases
        concretas”.
      </P>
      <P>Así, Robert C. Martin recomienda:</P>
      <P>
        Los módulos de alto nivel no deberían depender de módulos de bajo nivel.
        Ambos deberían depender de abstracciones. Las abstracciones no deberían
        depender de los detalles. Los detalles deberían depender de las
        abstracciones. El objetivo del Dependency Inversion Principle (DIP)
        consiste en reducir las dependencias entre los módulos del código, es
        decir, alcanzar un bajo acoplamiento de las clases.
      </P>
      <Spacer />
      <H3>KISS principle ( Keep It Simple, Stupid )</H3>
      <ul>
        <LI emphasis="medium">Mantener las clases pequeñas.</LI>
        <Spacer size="xs" />
        <LI emphasis="medium">No reutilizar variables.</LI>
        <Spacer size="xs" />
        <LI emphasis="medium">
          Dividir el problema en partes pequeñas, analizar antes de ponerse a
          programar.
        </LI>
        <Spacer size="xs" />
        <LI emphasis="medium">
          No abusar de los comentarios, si usas mucho es por que es muy
          complejo.
        </LI>
        <Spacer size="xs" />
        <LI emphasis="medium">Evitar código duplicado.</LI>
        <Spacer size="xs" />
        <LI emphasis="medium">Aplicar principio SOLID.</LI>
      </ul>
      <Spacer />
      <H3>YAGNI You Aren't Going to Need It ( No lo vas a necesitar )</H3>
      <ul>
        <LI emphasis="medium">
          No tratar de implementar cosas porque crees que vas a suceder o que la
          aplicación vaya a necesitar.
        </LI>
        <Spacer size="xs" />
        <LI emphasis="medium">
          El reto es identificar que cosas sí está bien anticiparse para a
          futuro sea menos costosa la implementación.
        </LI>
      </ul>
      <Spacer />
      <H3>Ley de Deméter o Principio de menor conocimiento</H3>
      <ul>
        <LI emphasis="medium">Nos ayuda a lograr bajo Acoplamiento</LI>
      </ul>
    </Group>
    <Group type="footer">
      <Spacer />
      <P color="white">
        Próximo paso a optimizar{' '}
        <NavigationLink to="/concepts">Concepts</NavigationLink>.
      </P>
    </Group>
  </ScreenWrapper>
);
