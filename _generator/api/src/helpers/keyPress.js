const { GlobalKeyboardListener } = require('node-global-key-listener');

const v = new GlobalKeyboardListener();
let checkCtrl = false;
let checkAlt = false;

v.addListener(function (e, down) {
  let timeout;
  if (e.scanCode === 162 && down) {
    checkCtrl = true;
    timeout = setTimeout(() => {
      checkCtrl = false;
      clearTimeout(timeout);
    }, 400);
  }

});

v.addListener(function (e, down) {
  let timeout;
  if (e.scanCode === 164 && down) {
    checkAlt = true;
    timeout = setTimeout(() => {
      checkAlt = false;
      clearTimeout(timeout);
    }, 400);
  }

});

let noActive = true;

v.addListener(function (e, down) {

  let timeout;
  if(e.scanCode !== 162 && e.scanCode !== 164) 
  if (checkCtrl && checkAlt && noActive) {

    noActive = false;
    console.log(e.scanCode);
// Codigo acá
    timeout = setTimeout(() => {
      noActive = true;
      clearTimeout(timeout);
    }, 400);

  }
});

calledOnce = function (e) {
  v.removeListener(calledOnce);
};
v.addListener(calledOnce);