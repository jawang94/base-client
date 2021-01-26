const keys: any = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e: any) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e: {
  keyCode?: any;
  preventDefault?: () => void;
}) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
  return true;
}

// modern Chrome requires { passive: false } when adding event
const supportsPassive = true;

const wheelOpt: any = supportsPassive ? { passive: false } : false;
const wheelEvent =
  'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
export function disableScrollExceptKeydowns() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  // window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
export function enableScrollExceptKeydowns() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  // window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Disable
export function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
export function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
