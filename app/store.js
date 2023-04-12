const configureStore = require('@reduxjs/toolkit').configureStore;
const cakeReducer = require('../featues/cake/cakeSlice');


const store = configureStore({
    reducer: {
        cake: cakeReducer,
    }
})

module.exports = store;