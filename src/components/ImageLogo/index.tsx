import React from 'react';
import styled from 'styled-components/native';

import Logo from '../../assets/logo.jpg';

export const LogoInitial = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 15px;
  margin-bottom: 10px;
`;

export const ImageLogo = () => {
  return <LogoInitial source={Logo} />;
};
