import { createSlice } from "@reduxjs/toolkit"

const initialRandomObject = {


    codice: "",
    it: {
        nome: "",
        categoria: "",
        descrizione: ""
    },
    location: "",
    provincia: "",
    provvedimento: "",
    regione: "",
    superficieMare: "",
    tags: "",
    type: "",
    version: "",
    versionPreview: "",
    coverCmisId: "",
    enteGestore: ""

}

export const randomObjectSlice = createSlice({
    name: 'randomObject',
    initialState: initialRandomObject,
    reducers: {
        setOggettoCasuale: (state, action) => {
            return state = action.payload


        }
    }
})


export const {
    setOggettoCasuale
} = randomObjectSlice.actions

export default randomObjectSlice.reducer