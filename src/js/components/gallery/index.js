import initGalleryGrid from './grid';
import initPhotoSwipeFromDOM from './photoswipe';

const initGallery = () => {
  initGalleryGrid('.js-gallery-list');
  initPhotoSwipeFromDOM('.js-gallery-list');
};

export default initGallery;
