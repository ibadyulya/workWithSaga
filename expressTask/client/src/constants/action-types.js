import keyMirror from 'keymirror';

const ACTION_TYPES = keyMirror({

    PRODUCT_CREATE_REQUEST: null,
    PRODUCT_CREATE_SUCCESS: null,
    PRODUCT_CREATE_FAILURE: null,

    PRODUCT_DISPLAY_REQUEST: null,
    PRODUCT_DISPLAY_SUCCESS: null,
    PRODUCT_DISPLAY_FAILURE: null,

    PRODUCT_DISPLAY_LIST_REQUEST: null,
    PRODUCT_DISPLAY_LIST_SUCCESS: null,
    PRODUCT_DISPLAY_LIST_FAILURE: null,

    PRODUCT_SEARCH_REQUEST: null,
    PRODUCT_SEARCH_SUCCESS: null,
    PRODUCT_SEARCH_FAILURE: null,

    PRODUCT_UPDATE_REQUEST: null,
    PRODUCT_UPDATE_SUCCESS: null,
    PRODUCT_UPDATE_FAILURE: null,

    PRODUCT_DELETE_REQUEST: null,
    PRODUCT_DELETE_SUCCESS: null,
    PRODUCT_DELETE_FAILURE: null,

    PRODUCT_FILTER_REQUEST: null,
    PRODUCT_FILTER_SUCCESS: null,
    PRODUCT_FILTER_FAILURE: null,

    FOUND_FLAG_RESET: null,
    CREATED_FLAG_RESET: null,
    UPDATED_FLAG_RESET: null,
    DELETED_FLAG_RESET: null,

    ALERT_SUCCESS: null,
    ALERT_ERROR: null,
    ALERT_CLEAR: null,
});

export default ACTION_TYPES;
