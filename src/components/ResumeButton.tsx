import React, { useState } from "react";
import { initGoogleAPI, fetchGoogleDriveFiles } from "../models/googleDriveAPI";

const ResumeButton: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleResumeDownload = async () => {
    setLoading(true);
    setError(null);

    try {
      // Initialize Google API
      await initGoogleAPI();

      // Fetch the files from a specific folder (replace "YOUR_FOLDER_ID" with the actual folder ID)
      const files = await fetchGoogleDriveFiles("1DiGrrV-UNhgRi2Hkcr1h2jStq9zJ6_27");

      // Look for a file named "Resume" (or a similar unique identifier)
      const resumeFile = files.find((file: { name: string; }) => file.name.toLowerCase().includes("sarika mangalpally"));

      if (resumeFile && resumeFile.webContentLink) {
        // Redirect to the file's webContentLink to download it
        window.open(resumeFile.webContentLink, "_blank");
      } else {
        setError("Resume file not found.");
      }
    } catch (err) {
      console.error("Error fetching the resume:", err);
      setError("An error occurred while fetching the resume.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleResumeDownload}
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {loading ? "Loading..." : "Download Resume"}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default ResumeButton;
