import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiEndPoints from '../Services/ApiEndPoints/ApiEndPoints';

const initialState = {
personDetails: [],
  loading: false,
  error: null,
  clear:false,
  searchButton:true,
};

export const getDetails=createAsyncThunk("getDeatails",async()=>{

    const response=await fetch(`${apiEndPoints.dicomApi}`)
    .then((data)=>data.json())
    .then((results)=>results)
    .catch((error)=>{return error})
    console.log(response)
    return response;
})

const apiData=createSlice({

    name:"dicom",
    initialState,
    reducers:{
        sortingAscending:(state,action)=>{
            state.personDetails=state.personDetails.sort((a, b) => a[action.payload].localeCompare(b[action.payload]))
        },
        sortingDescending:(state,action)=>{        
            state.personDetails=state.personDetails.sort((a, b) => b[action.payload].localeCompare(a[action.payload]))
        },
        clearfilter:(state)=>{
            state.clear=true
        },
        searchBar:(state)=>{
            state.searchButton=!state.searchButton
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(getDetails.pending,(state)=>{
            state.loading=true;
        });
        builder.addCase(getDetails.fulfilled,(state,action)=>{
            state.personDetails=action.payload.slice(0, 5);
            state.loading=false;
        });
        builder.addCase(getDetails.rejected,(state,action)=>{
            state.error=action.payload
        });
    }
})

export const {sortingAscending,sortingDescending,clearfilter,searchBar} =apiData.actions;
export default apiData.reducer;