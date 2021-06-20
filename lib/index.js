import dom from './dom';
import ssr from './ssr';

export default function createComponent(Component, options = {}) {
  if (typeof Component === 'function') {
    return dom(Component, options);
  } else {
    return ssr(Component, options);
  }
}
