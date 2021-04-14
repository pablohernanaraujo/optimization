import React, { FunctionComponent } from 'react';

import styled from '../../theme/styled-components';

const ImageWrapper = styled.div<{ device?: boolean; android?: boolean }>`
  padding: 24px 8%;
  ${({ device }) =>
    device &&
    `
  padding: 24px 30%;
  `};
  ${({ android }) =>
    android &&
    `
  padding: 24px 35%;
  `};
`;

const Image = styled.img`
  width: 100%;
`;

interface RegularImageProps {
  src: string;
  alt: string;
  device?: boolean;
  android?: boolean;
}

export const RegularImage: FunctionComponent<RegularImageProps> = ({
  src,
  alt,
  device,
  android,
}) => (
  <ImageWrapper device={device} android={android}>
    <Image src={src} alt={alt} />
  </ImageWrapper>
);
