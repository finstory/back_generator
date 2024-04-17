const { GlobalKeyboardListener } = require('node-global-key-listener');
const { addEndpointComments, removeEndpointComments } = require('../services/controller/controller.services');
const { getAllRoutes } = require('../services/route/route.services');

const v = new GlobalKeyboardListener();
let checkCtrl = false;
let checkAlt = false;
let checkEndpointsComments = false;
let noActive = true;

v.addListener(function (e, down) {
  listenerCtrl(e, down);
  listenerAlt(e, down);
  listenerW(e, down);
  listenerE(e, down);
});


const listenerCtrl = function (e, down) {
  let timeout;
  if (e.scanCode === 162 && down) {
    checkCtrl = true;
    timeout = setTimeout(() => {
      checkCtrl = false;
      clearTimeout(timeout);
    }, 400);
  }
};

const listenerAlt = function (e, down) {
  let timeout;
  if (e.scanCode === 164 && down) {
    checkAlt = true;
    timeout = setTimeout(() => {
      checkAlt = false;
      clearTimeout(timeout);
    }, 400);
  }
};

const listenerW = function (e, down) {
  let timeout;
  if (e.scanCode !== 162 && e.scanCode !== 164)
    if (e.scanCode === 69 && !checkEndpointsComments)
      if (checkCtrl && checkAlt && noActive) {

        noActive = false;
        console.log(e.scanCode);
        // Codigo acá
        activeCommentsAboutEndpoints();
        checkEndpointsComments = true;
        timeout = setTimeout(() => {
          noActive = true;
          clearTimeout(timeout);
        }, 400);

      }
};

const listenerE = function (e, down) {
  let timeout;
  if (e.scanCode !== 162 && e.scanCode !== 164)
    if (e.scanCode === 87)
      if (checkCtrl && checkAlt && noActive) {

        noActive = false;
        console.log(e.scanCode);
        // Codigo acá
        removeCommentsAboutEndpoints();
        checkEndpointsComments = false;
        timeout = setTimeout(() => {
          noActive = true;
          clearTimeout(timeout);
        }, 400);

      }
};

calledOnce = function (e) {
  v.removeListener(calledOnce);
};
v.addListener(calledOnce);


const activeCommentsAboutEndpoints = async () => {
  try {
    const routesList = await getAllRoutes();
    await addEndpointComments(routesList);
  }
  catch (error) {
    console.log(error);
  }
}


const removeCommentsAboutEndpoints = async () => {
  try {
    const routesList = await getAllRoutes();
    await removeEndpointComments(routesList);
  }
  catch (error) {
    console.log(error);
  }
}