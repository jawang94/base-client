import { AnimatedSwitch, spring } from 'react-router-transition';
import styled from 'styled-components';

// A workaround to make test pass

const bounce = (val: number) =>
  spring(val, {
    stiffness: 330,
    damping: 22,
  });

function mapStyles(styles: any) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

const MyAnimatedSwitch = styled(AnimatedSwitch).attrs(() => ({
  atEnter: bounceTransition.atEnter,
  atLeave: bounceTransition.atLeave,
  atActive: bounceTransition.atActive,
  mapStyles,
}))`
  overflow: hidden;
  margin: 0 auto;
`;

export default MyAnimatedSwitch;
