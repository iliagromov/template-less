import LazyLoad from "vanilla-lazyload";

let lazyLoadInstance;
let lazyLoadSelector;

const initLazyLoad = (selector = ".lazyload") => {
    lazyLoadSelector = selector;
    lazyLoadInstance = new LazyLoad({
        elements_selector: selector,
        callback_error: function(el) {
          el.parentElement.classList.add('lazyload-error')
        },
        callback_loaded: function(el) {
          el.parentElement.classList.add('lazyload-loaded')
        }
    });
};

const getLazyLoadInstance = () => {
  return lazyLoadInstance;
};

const getLazyLoadSelector = () => {
  return lazyLoadSelector;
};

export {
    getLazyLoadInstance,
    getLazyLoadSelector,
}

export default initLazyLoad;
