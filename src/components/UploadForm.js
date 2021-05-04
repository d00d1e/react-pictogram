import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const fileTypes = ["image/png", "image/jpeg", "image/jpg"];

  const uploadHandler = (e) => {
    let selectedFile = e.target.files[0];

    if (selectedFile && fileTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError("");
    } else {
      setFile(null);
      setError("Please select a valid image file (png or jpg)");
    }
  };

  return (
    <div>
      <form>
        <label>
          <input type="file" onChange={uploadHandler} />
          <span>+</span>
        </label>
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div>{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </form>
    </div>
  );
}
