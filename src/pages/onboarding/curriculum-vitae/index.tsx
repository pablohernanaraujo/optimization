import React, { FunctionComponent } from 'react';

import { ScreenWrapper } from '../../../ui/screen-wrapper';
import { Group } from '../../../ui/group';
import { ButtonRegular } from '../../../ui/buttons';
import { Spacer } from '../../../ui/spacer';
import { P } from '../../../ui/typography';
import styled from '../../../theme/styled-components';

const ButtonWrapper = styled.div`
  padding: 16px;
  display: flex;
  justify-content: flex-end;
`;

const Wrapper = styled.div`
  padding: 0px 32px;
`;

const Title = styled.div`
  font-size: 100px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  line-height: 95px;
`;

const Data = styled.div`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.text};
  opacity: ${({ theme }) => theme.emphasis.high};
  font-weight: 300;
`;

const Subtitle = styled.div`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  line-height: 50px;
`;

const HeadLine = styled.div`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.text};
  opacity: ${({ theme }) => theme.emphasis.high};
  font-weight: 300;
  line-height: 40px;
`;

const DateText = styled.div`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.text};
  opacity: ${({ theme }) => theme.emphasis.medium};
  font-weight: 300;
  line-height: 34px;
`;

const InlineTextWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Bar = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 36px;
`;

const BarTitle = styled.div`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
`;

const BarText = styled.div`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.white};
  opacity: ${({ theme }) => theme.emphasis.high};
  font-weight: 300;
`;

const BarTextDescription = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 300;
  opacity: ${({ theme }) => theme.emphasis.medium};
  line-height: 26px;
`;

const SpacerHorizontal = styled.div`
  width: 16px;
`;

const workPlaces = [
  {
    id: '14',
    place: 'Lunar',
    position: 'Consulting',
    from: 'desde 2021-03-01',
    to: 'hasta 2021-05-12',
    description:
      'LUNAR ama tu ritmo te acerca a una relación más profunda y armoniosa con el ciclo femenino.',
    title: 'Tecnologías utilizadas:',
    technologies:
      'Analizar app ios, android para atacar punto a ajustar y mejorar, analisis previo de los próximos features y roadmap',
  },
  {
    id: '13',
    place: 'Palta',
    position: 'Freelance',
    from: 'desde 2020-12-02',
    to: 'hasta la actualidad',
    description: 'Billetera virtual, dinero real.',
    title: 'Tecnologías utilizadas:',
    technologies:
      'React, React Native, React Navigation, Recoil, Typescript, Styled Components, ESLint, Prettier, Jest y Github',
  },
  {
    id: '12',
    place: 'Humber',
    position: 'Senior Software Engieneering',
    from: 'desde 2020-09-20',
    to: 'hasta la actualidad',
    description: 'Simplifica la logística, conectando personas.',
    title: 'Tecnologías utilizadas:',
    technologies:
      'React Native, React Navigation, Recoil, Typescript, Styled Components, ESLint, Prettier, Jest y Github',
  },
  {
    id: '11',
    place: 'Ank',
    position: 'Senior Software Engieneering',
    from: 'desde 2019-06-02',
    to: 'hasta 2020-09-19',
    description:
      'Building better way to manage your finances ( an Itaú Unibanco Company ).',
    title: 'Tecnologías utilizadas:',
    technologies:
      'React Native, React Navigation, Typescript, Node, GraphQL, Styled Components, ESLint, Prettier, Jest , Detox, AWS Cognito y Github',
  },
  {
    id: '10',
    place: 'Wenance',
    position: 'Frontend Lead',
    from: 'desde 2018-5-2',
    to: 'hasta 2019-06-01',
    description: 'Fintech líder en créditos en Argentina.',
    title: 'Tecnologías utilizadas:',
    technologies:
      'React, React Router, Redux, Redux Form, Material Ui, Styled Components, Webpack, Bit y Github',
  },
  {
    id: '9',
    place: 'Ballon Group',
    position: 'Freelance',
    from: 'desde 2017-07-05',
    to: 'hasta 2017-10-01',
    description:
      'Web development, ecommerce, Software development & Digital marqueting focused in performance and custom development.',
    title: 'Tecnologías utilizadas:',
    technologies:
      'React Native, React Navigation, Redux, Styled Components, Webpack y Github',
  },
  {
    id: '8',
    place: 'Fravega',
    position: 'Frontend SR',
    from: 'desde 2017-04-02',
    to: 'hasta 2018-05-01',
    description: 'Ecommerce miltirubro con 147 locales en todo el paías.',
    title: 'Tecnologías utilizadas:',
    technologies:
      'React, React Router, Redux, Styled Components, Webpack y Github',
  },
  {
    id: '7',
    place: 'Tasty House',
    position: 'Freelance',
    from: 'desde 2017-01-20',
    to: 'hasta 2017-04-01',
    description:
      'Startup de recetas de cocina casera, estilo pinterest agil y dinamica.',
    title: 'Tecnologías utilizadas:',
    technologies:
      'Grunt, Bower, Angular JS, Jquery, Materialize, React Native, Redux, Firebase y Github',
  },
  {
    id: '6',
    place: 'Banighton',
    position: 'Freelance',
    from: 'desde 2015-07-05',
    to: 'hasta 2016-12-10',
    description:
      'Startup dedicada a la noche porteña con geolocalización de boliches y bares.',
    title: 'Tecnologías utilizadas:',
    technologies:
      'Grunt, Bower, Angular JS, Jquery, Materialize, React, Webpack, React Native, Firebase y Github',
  },
  {
    id: '5',
    place: 'Eras',
    position: 'Freelance',
    from: 'desde 2015-01-06',
    to: 'hasta 2015-05-11',
    description:
      'Ente reguladora de agua y saneamiento, organismo autárquico e interjuridiccional, con capacidad de derecho público y privado.',
    title: 'Tecnologías utilizadas:',
    technologies: 'Html 5, Css 3, Javascript y Wordpress',
  },
  {
    id: '4',
    place: 'Tecnosys',
    position: 'Freelance',
    from: 'desde 2014-02-12',
    to: 'hasta 2012-12-02',
    description: 'Empresa proveedora de servicios de Hosting y Housing.',
    title: 'Tecnologías utilizadas:',
    technologies: 'Html 5, Css 3, Javascript y Jquery',
  },
  {
    id: '3',
    place: 'Iterario',
    position: 'Freelance',
    from: 'desde 2011-08-02',
    to: 'hasta 2012-12-06',
    description: 'Instituto de informática, idiomas y música.',
    title: 'Tecnologías utilizadas:',
    technologies: 'Html 5, Css 3, Javascript, Jquery y SEO',
  },
  {
    id: '2',
    place: 'Perfugroup',
    position: 'Development',
    from: 'desde 2009-06-10',
    to: 'hasta 2011-05-15',
    description: 'Cadena de perfumerías Pigmento',
    title: 'Tecnologías utilizadas:',
    technologies: 'Html, Css, Javascript',
  },
  {
    id: '1',
    place: 'Serenity SA',
    position: 'Development',
    from: 'desde 2007-03-08',
    to: 'hasta 2009-02-01',
    description: 'Pañalera que formaba parte de empresa brasilera Hypermarcas',
    title: 'Tecnologías utilizadas:',
    technologies: 'Macromedia Flash, Actionscript 2, Php y MySql',
  },
];

export const CurriculumVitae: FunctionComponent = () => {
  return (
    <ScreenWrapper>
      <ButtonWrapper>
        <ButtonRegular
          text="Download PDF"
          href="https://firebasestorage.googleapis.com/v0/b/rdo-develop.appspot.com/o/pabloaraujo-cv.pdf?alt=media&token=c1cdd38c-4f72-4eed-8492-529f99f59f84"
        />
      </ButtonWrapper>
      <Group type="header">
        <Wrapper>
          <Title>PABLO</Title>
          <Title>HERNÁN</Title>
          <Title>ARAUJO</Title>
          <Spacer />
          <Data>5 de julio de 1978</Data>
          <Spacer size="xs" />
          <Data>Buenos Aires, Ciudadela, Sta. Juana de Arco 3831</Data>
          <Spacer size="xs" />
          <Data>pablohernanaraujo@gmail.com</Data>
          <Spacer size="xs" />
          <Data>11 6260 2332</Data>
        </Wrapper>

        <Spacer />
        <Bar>
          <BarTitle>Senior Software Engineer</BarTitle>
        </Bar>
        <Spacer />
      </Group>
      <Group type="body">
        {workPlaces.map((work) => (
          <Wrapper key={work.id}>
            <InlineTextWrapper>
              <Subtitle>{work.place}</Subtitle>
              <SpacerHorizontal />
              <HeadLine>{work.position}</HeadLine>
              <SpacerHorizontal />
              <DateText>{work.from}</DateText>
              <SpacerHorizontal />
              <DateText>{work.to}</DateText>
            </InlineTextWrapper>
            <Wrapper>
              <Spacer size="xs" />
              <HeadLine>{work.description}</HeadLine>
              <Spacer size="xs" />
              <HeadLine>{work.title}</HeadLine>
              <Spacer size="xs" />
              <Wrapper>
                <DateText>{work.technologies}</DateText>
              </Wrapper>
            </Wrapper>
            <Spacer />
          </Wrapper>
        ))}
        <Bar>
          <BarTitle>Secundario</BarTitle>
          <Wrapper>
            <BarText>ENET Nª1 Otto Krause</BarText>
          </Wrapper>
          <Spacer />
          <BarTitle>Autodidacta</BarTitle>
          <Wrapper>
            <BarText>Tecnologías aprendidas</BarText>
            <BarTextDescription>
              Flash, Actionscript 2, PHP, MySql, Html 5, Css3, Javascript,
              Typescript, Jquery, Grunt, Gulp, Angular JS, React, React Native,
              Webpack, Stylus, Less, Styled Components, GraphQL, Node, Redux,
              Recoil y Firebase
            </BarTextDescription>
          </Wrapper>
          <Spacer />
          <BarTitle>Ingles</BarTitle>
          <Wrapper>
            <BarText>Intermedio lectura y escritura</BarText>
          </Wrapper>
        </Bar>
        <Spacer size="l" />
      </Group>
      <Group type="footer">
        <Spacer />
        <P color="white">React development optimization 2021</P>
      </Group>
    </ScreenWrapper>
  );
};
