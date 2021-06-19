import client from './client';
import ssr from './ssr';

export default function createComponent(Component, options = {}) {
  if (typeof Component === 'function') {
    return client(Component, options);
  } else {
    return ssr(Component, options);
  }
}
