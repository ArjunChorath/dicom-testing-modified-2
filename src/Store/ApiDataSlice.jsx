import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiEndPoints from "../Services/ApiEndPoints/ApiEndPoints";
import axios from "axios";
const initialState = {
  personDetails: [],
  modalityData: [],
  savedQuarys: [],
  skipAndLimit: { skip: 0, limit: 5 },
  advanceSearchData: [],
  personDetailsLength: [],
  loading: false,
  error: null,
};
export const getDetails = createAsyncThunk("getDetails", async (value) => {
  try {
    console.log(value);
    const response = await fetch(
      `${apiEndPoints.dicomApi}?skip=${value.skip}&limit=${value.limit}`
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
    const response = await fetch(`${apiEndPoints.dicomApi}`)
      .then((data) => data.json())
      .then((results) => results)
      .catch((error) => {
        return error;
      });
    return response;
  } catch (error) {
    console.error("Error in getLength:", error);
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
    console.log(value);
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
    if (value.skip) {
      searchQuery += `skip=${value.skip}&`;
    }
    if (value.limit) {
      searchQuery += `limit=${value.limit}&`;
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
  } catch (error) {
    console.error("Error in searchData:", error);
    throw error;
  }
});
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
export const deleteQuery = createAsyncThunk("deleteQuery", async (value) => {
  try {
    console.log(value);
    const response = await axios
      .delete(`http://10.30.2.208:8193/api/v1/query/${value}`)
      .then((results) => results.data)
      .catch((error) => {
        return error;
      });
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error in deleteQuery:", error);
    throw error;
  }
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
    pagiantionValues: (state, action) => {
      state.skipAndLimit.skip = action.payload.skip;
      state.skipAndLimit.limit = action.payload.limit;
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
      console.error("getDetails rejected:", action.payload);
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
      console.error("getLength rejected:", action.payload);
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
      console.error("getModality rejected:", action.payload);
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
      console.error("searchData rejected:", action.payload);
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
      console.error("savedQueryDatas rejected:", action.payload);
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
      console.error("saveQueryData rejected:", action.payload);
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
      console.error("deleteQuery rejected:", action.payload);
    });
  },
});
export const { sortingAscending, sortingDescending, pagiantionValues } =
  apiData.actions;
export default apiData.reducer;
