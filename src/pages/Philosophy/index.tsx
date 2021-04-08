import React, { FunctionComponent } from 'react';

import { ScreenWrapper } from '../../ui/screen-wrapper';
import { Group } from '../../ui/group';
import { NavigationLink } from '../../ui/link';
import { Spacer } from '../../ui/spacer';
import { H2, H3, H4, P, LI } from '../../ui/typography';

export const Philosophy: FunctionComponent = () => (
  <ScreenWrapper>
    <Group type="header">
      <H2>Philosophy</H2>
    </Group>
    <Group type="body">
      <P>
        Los aspectos productivos de las fábricas de automóviles japonesas fueron
        una gran inspiración para Scrum.
      </P>
      <P>
        Pero incluso en la industria automovilística, gran parte del trabajo no
        radica en la fabricación sino en el mantenimiento, o más bien en cómo
        evitarlo. En el software, el 80 por 100 o más de lo que hacemos se
        denomina cuantitativamente mantenimiento, el acto de reparar. En lugar
        de optar por la típica costumbre occidental de crear software de
        calidad, debemos pensar como reparadores o mecánicos. Qué piensan los
        directores japoneses de todo esto?
      </P>
      <P>
        En 1951, un enfoque de calidad denominado TPM ( Total Productive
        Maintenance o Mantenimiento productivo total ) aparecío en escena. Se
        centraba en el mantenimiento y no en la producción. Uno de los pilares
        de TPM es el conjunto de principios denominados 5S, una serie de
        disciplinas. Estos principios 5S son en realidad la base de Lean, otro
        conocido término en la escena occidental, y cada vez más presente en el
        mundo del software. Estos principios no son opcionales. Como indica Bob,
        la práctica del software correcto require disciplina. No siempre se
        trata de hacer, producir a la velocidad óptima.
      </P>
      <H3> La filosofía 5S incluye estos conceptos</H3>
      <H4>SEIRI u organización</H4>
      <P>
        Es fundamental saber dónde están las cosas, mediante enfoques como el
        uso de nombres correctos. Cree que los nombres de los identificadores no
        son relevantes?.
      </P>
      <H4>SEITON o sistematización</H4>
      <P>
        Existe un antiguo dicho norteamericano: un sitio para cada cosa y cada
        cosa en su sitio. Un fragmento de código debe estar donde esperamos
        encontrarlo; en caso contrario, refactorice hasta conseguirlo.
      </P>
      <H4>SEISO o limpieza</H4>
      <P>
        Mantenga limpio el lugar de trabajo. Qué dicen los autores sobre inundar
        el código de comentarios y líneas que capturan historias o deseos
        futuros? Elimínelos.
      </P>
      <H4>SEIKETSU o estandarización</H4>
      <P>
        El grupo decide cómo mantener limpio el lugar de trabajo. Cree que este
        libro habla sobre tener un estilo de código coherente y una serie de
        prácticas dentro del grupo? De dónde provienen esos estándares?.
      </P>
      <H4>SHUTSUKE o disciplina</H4>
      <P>
        Significa ser disciplinado en la aplicación de las prácticas y
        reflejarlas en el trabajo y aceptar los cambios.
      </P>
    </Group>
    <Group type="footer">
      <Spacer />
      <P color="white">
        Próximo paso a optimizar{' '}
        <NavigationLink to="/principles">Principles</NavigationLink>.
      </P>
    </Group>
  </ScreenWrapper>
);
