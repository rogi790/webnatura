import { createSlice } from "@reduxjs/toolkit"

const initialObjectDescription =
    [{
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
    ]

export const objectDescriptionSlice = createSlice({
    name: 'objectDescription',
    initialState: initialObjectDescription,
    reducers: {
        setObjectDescription: (state, action) => {
            return action.payload


        }
    }
})


export const {
    setObjectDescription
} = objectDescriptionSlice.actions

export default objectDescriptionSlice.reducer