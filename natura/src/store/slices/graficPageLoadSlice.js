import { createSlice } from "@reduxjs/toolkit"

const initialGraficPageLoad = {

    colorNavBar: ".bg-primary",
    title: "VISITA ESPLORA CONOSCI",
    description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ultricies Mi Eget Mauris Pharetra"

}

export const graficPageLoadSlice = createSlice({
    name: 'graficPageLoad',
    initialState: initialGraficPageLoad,
    reducers: {
        setColorNavBar: (state, action) => {
            state.colorNavBar = action.payload
        },
        setTitle: (state, action) => {
            state.title = action.payload
        },
        setDescription: (state, action) => {
            state.description = action.payload
        },
        setGraficPageLoad: (state, action) => {
            return state = action.payload


        }
    }
})


export const {
    setColorNavBar,
    setTitle,
    setDescription,
    setGraficPageLoad
} = graficPageLoadSlice.actions

export default graficPageLoadSlice.reducer