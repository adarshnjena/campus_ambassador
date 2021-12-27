export const pageAnimation = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
            duration: 0.5,
            when: 'beforeChildren',
        },
    },
    exit: {
        opacity: 0,
        transition: { ease: 'easeOut', duration: 0.5 },
    },
};

export const titleAnim = {
    hidden: { x: '-100%', skew: '45deg' },
    show: {
        x: '0',
        skew: '0deg',
        transition: { type: 'tween', ease: 'easeOut', duration: 0.5 },
    },
};

export const slider = {
    hidden: { x: '-200%', skew: '45deg' },
    show: {
        x: '100%',
        skew: '0deg',
        transition: { type: 'tween', ease: 'easeOut', duration: 1 },
    },
};
export const sliderContainer = {
    hidden: {
      opacity: 1,
    },
    show: {
      opacity: 1,
  
      transition: {
        staggerChildren: 0.15,
        ease: 'easeOut',
        duration: 1,
      },
    },
  };