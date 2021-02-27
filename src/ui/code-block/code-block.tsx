import React, { FunctionComponent } from 'react';
import { CodeBlock as BlockCode, dracula } from 'react-code-blocks';

import styled from '../../theme/styled-components';
import { SupportedLanguages } from './types';

interface CodeBlockProps {
  code: string;
  language: SupportedLanguages;
  showLineNumbers: boolean;
}

const BlockCodeWrapper = styled.div`
  font-family: 'Poppins', sans-serif;
`;

export const CodeBlock: FunctionComponent<CodeBlockProps> = ({
  code,
  language,
  showLineNumbers,
}) => (
  <BlockCodeWrapper>
    <BlockCode
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={dracula}
    />
  </BlockCodeWrapper>
);
