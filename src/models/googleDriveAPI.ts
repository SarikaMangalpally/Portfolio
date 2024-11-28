import { gapi } from "gapi-script";

const CLIENT_ID = "1057977154726-1rpj8p6hjmah3iuualjj2vap8ld0ji8h.apps.googleusercontent.com";
const API_KEY = "AIzaSyCazPy9b15RzQ8Tw7G2qyB1az7sY6OqvWA";
const SCOPES = "https://www.googleapis.com/auth/drive.readonly";

export const initGoogleAPI = async () => {
  try {
    await gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
      scope: SCOPES,
    });
    console.log("Google API initialized successfully.");
  } catch (error) {
    console.error("Error initializing Google API:", error);
  }
};

export const fetchGoogleDriveFiles = async (folderId: string) => {
  try {
    const response = await gapi.client.drive.files.list({
      q: `'${folderId}' in parents`,
      fields: "files(id, name, mimeType, webContentLink)",
    });
    return response.result.files || [];
  } catch (error) {
    console.error("Error fetching files from Google Drive:", error);
    return [];
  }
};
