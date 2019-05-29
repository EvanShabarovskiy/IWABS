import { useState } from "react";

export const useUpload = () => {
  const [upload, setUpload] = useState({
    file: null, 
    fileName: '', 
    disabled: false
  });

  const fileChange = ({ target: { files } }) => {
    console.log('files', files);
    setUpload({
      file: files[0],
      fileName: files[0].name,
      disabled: true
    })
  }

  upload['fileChange'] = fileChange;
  return { upload };
}