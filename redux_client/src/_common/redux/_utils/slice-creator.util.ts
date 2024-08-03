import { createSlice } from "@reduxjs/toolkit"

const sliceCreator = (name: string, initialState: object, actionsList: object[]) => {
    return createSlice({
        name,
        initialState,
        reducers: { ...actionsList.reduce((acc, actions) => ({ ...acc, ...actions }), {}) },
    })
}

export default sliceCreator;