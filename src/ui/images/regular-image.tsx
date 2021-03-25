import React, { FunctionComponent } from 'react';

import styled from '../../theme/styled-components';

const ImageWrapper = styled.div<{ device?: boolean }>`
  padding: ${({ device }) => (device ? '24px 30%' : '24px 8%')};
`;

const Image = styled.img`
  width: 100%;
`;

interface RegularImageProps {
  src: string;
  alt: string;
  device?: boolean;
}

export const RegularImage: FunctionComponent<RegularImageProps> = ({
  src,
  alt,
  device,
}) => (
  <ImageWrapper device={device}>
    <Image src={src} alt={alt} />
  </ImageWrapper>
);
