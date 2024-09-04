Términos Comunes para Acciones de Redux


FETCH: Usado para indicar la solicitud o la recuperación de datos.
Ejemplo: FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE.

SET: Usado cuando se asigna o establece un valor tal como se recibe, sin modificaciones.
Ejemplo: SET_USER_DETAILS, SET_USERS_LIST.

UPDATE: Usado cuando se modifica parcialmente un recurso existente.
Ejemplo: UPDATE_USER_DETAILS, UPDATE_USER_IN_LIST.

CREATE: Usado para la creación de un nuevo recurso.
Ejemplo: CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_FAILURE.

ADD: Similar a CREATE, pero se utiliza específicamente cuando se añade algo a una colección o lista.
Ejemplo: ADD_USER_TO_LIST, ADD_ITEM_TO_CART.

DELETE: Usado para eliminar un recurso existente.
Ejemplo: DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAILURE.

REMOVE: Similar a DELETE, pero se usa comúnmente cuando se elimina un elemento de una lista o colección sin necesariamente eliminar el recurso subyacente.
Ejemplo: REMOVE_USER_FROM_LIST, REMOVE_ITEM_FROM_CART.

CLEAR: Usado para limpiar o resetear un valor o conjunto de valores en el estado.
Ejemplo: CLEAR_USER_DETAILS, CLEAR_USERS_LIST.

LOAD: Usado cuando se carga un recurso o conjunto de recursos en el estado.
Ejemplo: LOAD_INITIAL_DATA, LOAD_USER_PROFILE.

SAVE: Usado para guardar datos en algún lugar, puede ser en el estado o enviarlos a un backend.
Ejemplo: SAVE_USER_DETAILS, SAVE_SETTINGS.

SELECT: Usado cuando se selecciona algo en el estado.
Ejemplo: SELECT_USER, SELECT_ITEM.

TOGGLE: Usado para alternar entre dos estados (por ejemplo, encendido/apagado).
Ejemplo: TOGGLE_USER_ACTIVE_STATUS, TOGGLE_MENU.

SUBMIT: Usado cuando se envían datos para ser procesados.
Ejemplo: SUBMIT_FORM_REQUEST, SUBMIT_ORDER.

INIT: Usado para inicializar algo, como un recurso o un proceso.
Ejemplo: INIT_USER_SESSION, INIT_APPLICATION.

RESET: Usado para resetear el estado de algo a su valor inicial.
Ejemplo: RESET_PASSWORD, RESET_FORM.

FAIL: Usado cuando una operación falla.
Ejemplo: FETCH_USER_FAIL, CREATE_ORDER_FAIL.

RECEIVE: Usado cuando se reciben datos después de una operación, similar a FETCH.
Ejemplo: RECEIVE_USER_DATA, RECEIVE_NOTIFICATIONS.

VALIDATE: Usado cuando se valida algún dato o formulario.
Ejemplo: VALIDATE_FORM_FIELDS, VALIDATE_USER_INPUT.

APPEND: Usado cuando se agrega algo al final de una lista o colección.
Ejemplo: APPEND_TO_CHAT, APPEND_TO_LOG.

REPLACE: Usado cuando se reemplaza un recurso o parte de un recurso con otro.
Ejemplo: REPLACE_USER_AVATAR, REPLACE_ITEM_IN_LIST.

MERGE: Usado cuando se combinan dos o más conjuntos de datos.
Ejemplo: MERGE_SETTINGS, MERGE_USER_PROFILES.

DUPLICATE: Usado cuando se crea una copia de un recurso existente.
Ejemplo: DUPLICATE_USER_PROFILE, DUPLICATE_DOCUMENT.

SYNC: Usado cuando se sincronizan datos entre diferentes partes del estado o con un backend.
Ejemplo: SYNC_USER_DATA, SYNC_CART.
