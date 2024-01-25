import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiEndPoints from "../Services/ApiEndPoints/ApiEndPoints";
import axios from "axios";
let newQuery='';
const initialState = {
  personDetails: [],
  modalityData: [],
  savedQuarys: [],
  skipAndLimit: {
    skip: 0,
    limit: 5,
  },
  advanceSearchData: [],
  personDetailsLength: [],
  loading: false,
  error: null,
};

// const create=(value,newQuery)=>{
//   let queryToSearch='';
//   queryToSearch+=
// }


//GET STUDIES API CALLS
//fetch the data based on particullar conditions from backend
//parameter value is the value of skip and limit
export const getDetails = createAsyncThunk("getDetails", async (value) => {
      try {
      const response = await fetch(
      `${apiEndPoints.dicomApi}?${newQuery}skip=${value.skip}&limit=${value.limit}`
    )
      .then((data) => data.json())
      .then((results) => results)
      .catch((error) => {
        return error;
      });
    return response;
  } catch (error) {
    console.error("Error in getDetails:", error);
    throw error;
  }
});
export const getLength = createAsyncThunk("getLength", async () => {
  try {
    const response = await fetch(
      `http://10.30.2.208:8193/qido/studies?${newQuery}`
    )
      .then((data) => data.json())
      .then((results) => results)
      .catch((error) => {
        return error;
      });
    return response;
  } catch (error) {
    console.error("Error in searchData:", error);
    throw error;
  }
});
export const getModality = createAsyncThunk("getModality", async () => {
  try {
    const response = await fetch("http://10.30.2.208:8193/api/v1/modality")
      .then((data) => data.json())
      .then((results) => results[0].value)
      .catch((error) => {
        return error;
      });
    return response;
  } catch (error) {
    console.error("Error in getModality:", error);
    throw error;
  }
});
export const searchData = createAsyncThunk("searchData", async (value) => {
  try {
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
    if (value.accession !== "") {
      searchQuery += `accession=${value.accession}&`;
    }
    if (value.instance !== "") {
      searchQuery += `instance=${value.instance}&`;
    }
    newQuery=searchQuery;

      searchQuery += `skip=${value.skip}&`;
      searchQuery += `limit=${value.limit}&`;
      const response = await fetch(
      `http://10.30.2.208:8193/qido/studies?${searchQuery}`
    )
      .then((data) => data.json())
      .then((results) => results)
      .catch((error) => {
        return error;
      });
    return response;
  } catch (error) {
    console.error("Error in searchData:", error);
    throw error;
  }

  getDetails()

});


//SAVED QUERY API CALLS
//fetch all saved queries from the backend
export const savedQueryDatas = createAsyncThunk("savedQueryDatas", async () => {
  try {
    const response = await fetch("http://10.30.2.208:8193/api/v1/query")
      .then((data) => data.json())
      .then((results) => results)
      .catch((error) => {
        return error;
      });
    return response;
  } catch (error) {
    console.error("Error in savedQueryDatas:", error);
    throw error;
  }
});

//save a new savedQuery
//parameter queryData is the datas in savedQuery to be saved
export const saveQueryData = createAsyncThunk(
  "saveQueryData",
  async (queryData) => {
    try {
      const response = await axios
        .post("http://10.30.2.208:8193/api/v1/query", queryData)
        .then((results) => results.data)
        .catch((error) => {
          return error;
        });
      return response;
    } catch (error) {
      console.error("Error in saveQueryData:", error);
      throw error;
    }
  }
);

//delete a savedQuery
//parameter value is the id of savedQuery
export const deleteQuery = createAsyncThunk("deleteQuery", async (value) => {
  try {
    const response = await axios
      .delete(`http://10.30.2.208:8193/api/v1/query/${value}`)
      .then((results) => results.data)
      .catch((error) => {
        return error;
      });
    return response;
  } catch (error) {
    console.error("Error in deleteQuery:", error);
    throw error;
  }
});

//sorting the data based on various parameters given by the user
const apiData = createSlice({
  name: "dicom",
  initialState,
  reducers: {
    sortingAscending: (state, action) => {
      if (action.payload === "givenName") {
        state.personDetails = state.personDetails.sort((a, b) =>
          a.patientName[action.payload].localeCompare(
            b.patientName[action.payload]
          )
        );
      } else if (action.payload === "patientMrn") {
        state.personDetails = state.personDetails.sort((a, b) =>
          a[action.payload].localeCompare(b[action.payload])
        );
      } else {
        state.personDetails = state.personDetails.sort((a, b) =>
          a.study[action.payload].localeCompare(b.study[action.payload])
        );
      }
    },
    sortingDescending: (state, action) => {
      if (action.payload === "givenName") {
        state.personDetails = state.personDetails.sort((a, b) =>
          b.patientName[action.payload].localeCompare(
            a.patientName[action.payload]
          )
        );
      } else if (action.payload === "patientMrn") {
        state.personDetails = state.personDetails.sort((a, b) =>
          b[action.payload].localeCompare(a[action.payload])
        );
      } else {
        state.personDetails = state.personDetails.sort((a, b) =>
          b.study[action.payload].localeCompare(a.study[action.payload])
        );
      }
    },
    pagiantionValues: (state, action) => {
      state.skipAndLimit.skip = action.payload.skip;
      state.skipAndLimit.limit = action.payload.limit;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDetails.fulfilled, (state, action) => { //set data to personDetails
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
      state.skipAndLimit.skip=0;
      state.skipAndLimit.limit=5;
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
    builder.addCase(getLength.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getLength.fulfilled, (state, action) => {
      state.personDetailsLength = action.payload;
      state.loading = false;
    });
    builder.addCase(getLength.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { sortingAscending, sortingDescending, pagiantionValues } =
  apiData.actions;
export default apiData.reducer;
