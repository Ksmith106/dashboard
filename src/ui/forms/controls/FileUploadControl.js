import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import styled from 'styled-components';

const getColor = (props) => {
  if (props.isDragAccept) {
      return '#DDD1C7';
  }
  if (props.isDragReject) {
      return '#7E8987';
  }
  if (props.isFocused) {
      return '#4B4A67';
  }
  return '#8DB580';
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-width: 5px;
  border-radius: 3px;
  border-color: ${props => getColor(props)};
  border-style: solid;
  background-color: #C2C1C2;
  color: #94A187;
  outline: none;
  transition: border .24s ease-in-out;
`;

function FileUploadControl  (props){
   const onDrop = useCallback(acceptedFiles => {
       console.log(acceptedFiles)
     }, [])
     const {
       getRootProps,
       getInputProps,
     
       isFocused,
       isDragAccept,
       isDragReject,
     } = useDropzone({ accept: 'image/jpeg,image/png', maxFiles:1, onDrop });


     
  

    return( 
       <div className="container">
       <Container {...getRootProps({isFocused, isDragAccept, isDragReject})}>
         <input {...getInputProps()}  />
         <p>Drag 'n' drop some the product image file here</p>
       </Container>
      
      
     </div>
    )
}

export default FileUploadControl 