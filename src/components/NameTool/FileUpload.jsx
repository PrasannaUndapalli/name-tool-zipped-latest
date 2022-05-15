import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/styles";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";

const Input = styled('input')({
  display: "none"
});

export default function FileUpload() {
  const fileRef = React.useRef();
  let [file, setFile] = useState();
  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  function getData(audioFile) {
    var reader = new FileReader();
    reader.onload = function(event) {
        var data = event.target.result.split(',')
         , decodedImageData = btoa(data[1]);                    // the actual conversion of data from binary to base64 format
        return (decodedImageData);        
    };
    reader.readAsDataURL(audioFile);
}

  return (
    <div>
      <label htmlFor="contained-button-file">
      <Input accept="audio/*" id="contained-button-file" type="file" ref={fileRef} onChange={handleChange} />
      <Button variant="contained" className="uploadIcon" component="span" size="span" startIcon={<ArrowUpwardOutlinedIcon fontSize="small"/>}> Upload Audio </Button>
      </label>

      {/* <button onClick={() => fileRef.current.click()}>
        <input id="upload" name="upload" type="file" ref={fileRef} hidden
          onChange={handleChange} />
        Upload File
      </button>
      { file &&  file!==undefined && file!==null &&
        <div>
          <p>{file.name}</p>
          <p>{file.size}</p>
          <p>{file.type}</p>
        </div>
      }   */}
    </div>
  );


}