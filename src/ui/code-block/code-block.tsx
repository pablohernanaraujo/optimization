import React, { FunctionComponent } from 'react';
import { CodeBlock as BlockCode, dracula } from 'react-code-blocks';

import { SupportedLanguages } from './types';

interface CodeBlockProps {
  code: string;
  language: SupportedLanguages;
  showLineNumbers: boolean;
}

export const CodeBlock: FunctionComponent<CodeBlockProps> = ({
  code,
  language,
  showLineNumbers,
}) => (
  <BlockCode
    text={code}
    language={language}
    showLineNumbers={showLineNumbers}
    theme={dracula}
  />
);
