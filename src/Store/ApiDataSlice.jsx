import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiEndPoints from "../Services/ApiEndPoints/ApiEndPoints";
import axios from "axios";

const initialState = {
  personDetails: [],
  modalityData: [],
  savedQuarys: [],
  loading: false,
  error: null,
};




export const getDetails = createAsyncThunk("getDeatails", async (value) => {
  const response = await fetch(`${apiEndPoints.dicomApi}?skip=${value.skip}&limit=${value.limit}`)
    .then((data) => data.json())
    .then((results) => results)
    .catch((error) => {
      return error;
    });
  return response;
});
export const getModality = createAsyncThunk("getModality", async () => {
  const response = await fetch("http://10.30.2.208:8080/api/getAllModalities")
    .then((data) => data.json())
    .then((results) => results[0].value)
    .catch((error) => {
      return error;
    });
  return response;
});
export const searchData = createAsyncThunk("searchData", async (value) => {
  let searchQuery = "";
  if (value.patientName !== "") {
    searchQuery += `patientName=${value.patientName}&`;
  }
  if (value.patientMrn !== "") {
    searchQuery += `patientMrn=${value.patientMrn}&`;
  }
  if (value.studyDate !== "") {
    searchQuery += `studyDate=${value.studyDate}&`;
  }
  if (value.description !== "") {
    searchQuery += `description=${value.description}&`;
  }
  if (value.modality !== "") {
    searchQuery += `modality=${value.modality}&`;
  }
  if (value.instance !== "") {
    searchQuery += `instance=${value.instance}&`;
  }

  const response = await fetch(
    `http://10.30.2.208:8193/GET/qido/studies?${searchQuery}`
  )
    .then((data) => data.json())
    .then((results) => results)
    .catch((error) => {
      return error;
    });
  return response;
});
export const savedQueryDatas = createAsyncThunk("savedQueryDatas", async () => {
  const response = await fetch("http://10.30.2.208:8193/api/query/getAll")
    .then((data) => data.json())
    .then((results) => results)
    .catch((error) => {
      return error;
    });
  return response;
});
export const saveQueryData = createAsyncThunk(
  "saveQueryData",
  async (queryData) => {
    console.log(queryData);
    const response = await axios
      .post("http://10.30.2.208:8193/api/query/save", queryData)
      .then((results) => results.data)
      .catch((error) => {
        return error;
      });
    console.log(response);
    return response;
  }
);
export const deleteQuery = createAsyncThunk("deleteQuery", async (value) => {
  console.log(value);
  const response = await axios
    .delete(`http://10.30.2.208:8193/api/query/delete/${value}`)
    .then((results) => results.data)
    .catch((error) => {
      return error;
    });
  console.log(response);
  return response;
});
const apiData = createSlice({
  name: "dicom",
  initialState,
  reducers: {
    sortingAscending: (state, action) => {
      state.personDetails = state.personDetails.sort((a, b) =>
        a.studies[action.payload].localeCompare(b.studies[action.payload])
      );
    },
    sortingDescending: (state, action) => {
      state.personDetails = state.personDetails.sort((a, b) =>
        b.studies[action.payload].localeCompare(a.studies[action.payload])
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDetails.fulfilled, (state, action) => {
      state.personDetails = action.payload;
      state.loading = false;
    });
    builder.addCase(getDetails.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(getModality.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getModality.fulfilled, (state, action) => {
      state.modalityData = action.payload;
      state.loading = false;
    });
    builder.addCase(getModality.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(searchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(searchData.fulfilled, (state, action) => {
      state.personDetails = action.payload;
      state.loading = false;
    });
    builder.addCase(searchData.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(savedQueryDatas.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(savedQueryDatas.fulfilled, (state, action) => {
      state.savedQuarys = action.payload;
      state.loading = false;
    });
    builder.addCase(savedQueryDatas.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(saveQueryData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(saveQueryData.fulfilled, (state, action) => {
      state.savedQuarys = action.payload;
      state.loading = false;
    });
    builder.addCase(saveQueryData.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(deleteQuery.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteQuery.fulfilled, (state, action) => {
      state.savedQuarys = action.payload;
      state.loading = false;
    });
    builder.addCase(deleteQuery.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { sortingAscending, sortingDescending, clearfilter, searchBar } =
  apiData.actions;
export default apiData.reducer;
