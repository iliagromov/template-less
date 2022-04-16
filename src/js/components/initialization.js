import svg4everybody from 'svg4everybody';

import { initPolyfills } from '../utils';
import initLazyLoad from './lazyload';
import initAccordion from './accordion';
import initGallery from './gallery/';
import initSmoothScroll from './smooth-scroll';
import initAOS from './aos';

const initialization = () => {
  initPolyfills();
  svg4everybody();

  document.addEventListener('DOMContentLoaded', () => {
    initLazyLoad();
    initAOS();
    initAccordion();
    initGallery();
    initSmoothScroll();
  });
};

export default initialization;
