import MagicGrid from 'magic-grid';

const initGalleryGrid = (selector) => {
  const magicGrid = new MagicGrid({
    container: selector,
    static: true,
    gutter: 0,
    animate: false,
  });

  magicGrid.listen();
};

export default initGalleryGrid;
