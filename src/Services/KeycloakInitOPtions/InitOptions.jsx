import apiEndPoints from "../ApiEndPoints/ApiEndPoints";

const initOptions = {
    url: `${apiEndPoints.keycloakApi}`,
    realm: "dicom-realm",
    clientId: "react-client",
  };

  export default initOptions;