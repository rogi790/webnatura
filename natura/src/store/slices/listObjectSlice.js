import { createSlice } from "@reduxjs/toolkit"

const initialListObject =
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

export const listObjectSlice = createSlice({
    name: 'listObject',
    initialState: initialListObject,
    reducers: {
        setListaOggetti: (state, action) => {
            return action.payload


        }
    }
})


export const {
    setListaOggetti
} = listObjectSlice.actions

export default listObjectSlice.reducer