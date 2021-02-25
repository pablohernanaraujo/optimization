export const locationFiles = `/component
--/__test__
----/component.test.tsx
--/base.tsx|ts
--/component.tsx
--/style.css
--/component.md
--/index.ts
`;

export const component = `import React, { FunctionComponent, ReactElement } from 'react';
import { Modal } from 'react-native';

import styled from '@core/theme/styled-components';
import { Overlay, WrapperModal } from './base';

const Wrapper = styled(WrapperModal)\`
  justify-content: flex-end;
\`;

const Panel = styled.View\`
  background-color: white;
  padding: 30px 16px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
\`;

const SafeAreaView = styled.SafeAreaView\`
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
\`;

interface ModalBottomProps {
  /** Show modal */
  visible: boolean;
  /** Text to be displayed inside modal. */
  header?: ReactElement;
  /** Modal content */
  content: ReactElement;
}

export const ModalBottom: FunctionComponent<ModalBottomProps> = ({
  visible,
  header,
  content,
}) => (
  <Modal visible={visible} animationType="slide" transparent>
    <Overlay />
    <Wrapper>
      <SafeAreaView>
        <Panel>
          {header}
          {content}
        </Panel>
      </SafeAreaView>
    </Wrapper>
  </Modal>
);
`;
