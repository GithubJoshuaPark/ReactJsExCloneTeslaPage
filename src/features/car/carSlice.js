import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cars: ["Model S", "Model 3", "Model X", "Model Y", "Solar Roof", "Solar Panels"]
}

export const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

// selector Function which called with the store state
// functon's name prefix is 'select' + initialSate's Property name
export const selectCars = state => state.car.cars  

export default carSlice.reducer