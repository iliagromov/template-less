import SmoothScroll from 'smooth-scroll/dist/smooth-scroll.polyfills.js';

const initSmoothScroll = () => {
  var scroll = new SmoothScroll('[data-scroll]', {
    speed: 300,
    easing: 'easeInOutQuad',
  });
};

export default initSmoothScroll;
