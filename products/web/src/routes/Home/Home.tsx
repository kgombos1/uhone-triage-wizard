import React from 'react';
import { styled, keyframes } from '@abyss/web/tools/styled';
import { Heading } from '@abyss/web/ui/Heading';
import { Button } from '@abyss/web/ui/Button';
import { ReactLogo } from '@ext/common/ReactLogo';

const HomeContainer = styled('div', {
  textAlign: 'center',
});

const HomeHeader = styled('div', {
  backgroundColor: '$primary1',
  padding: 20,
  marginBottom: 20,
});

const animateSpin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const LogoAnimation = styled('div', {
  animation: `${animateSpin} infinite 20s linear`,
  margin: '0 auto 20px',
  height: 80,
  width: 80,
});

export const Home = () => {
  return (
    <HomeContainer>
      <HomeHeader>
        <LogoAnimation>
          <ReactLogo />
        </LogoAnimation>
        <Heading color="white">Welcome to Abyss</Heading>
      </HomeHeader>
      <Button href="https://abyss.uhc.com">View Abyss Docs</Button>
    </HomeContainer>
  );
};
