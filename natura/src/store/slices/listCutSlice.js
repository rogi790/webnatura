import { createSlice } from "@reduxjs/toolkit"

const initialListCut =
    []

export const listCutSlice = createSlice({
    name: 'listCut',
    initialState: initialListCut,
    reducers: {
        setListCut: (state, action) => {
            return action.payload


        }
    }
})


export const {
    setListCut
} = listCutSlice.actions

export default listCutSlice.reducer