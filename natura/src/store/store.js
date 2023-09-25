
import { configureStore } from "@reduxjs/toolkit";
import randomObjectReducer from "./slices/randomObjectSlice";
import graficPageLoadReducer from "./slices/graficPageLoadSlice";
import listObjectReducer from "./slices/listObjectSlice";
import objectDescriptionReducer from "./slices/objectDescriptionSlice"
import listCutReducer from "./slices/listCutSlice"



export const store = configureStore({
    reducer: {

        randomObject: randomObjectReducer,
        graficPageLoad: graficPageLoadReducer,
        listObject: listObjectReducer,
        objectDescription: objectDescriptionReducer,
        listCut: listCutReducer

    }
})