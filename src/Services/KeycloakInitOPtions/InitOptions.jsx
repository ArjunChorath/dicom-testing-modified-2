import apiEndPoints from "../ApiEndPoints/ApiEndPoints";

const initOptions = {
    url: `${apiEndPoints.keycloakApi}`,
    realm: "realm-dicom",
    clientId: "dicom-authentication",
  };

  export default initOptions;