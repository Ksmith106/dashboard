import styled from "styled-components";


const LoginPageStyles = styled.section`
  margin: 4rem auto 0;
  max-width: 480px;
  h2 {
    text-align: center;
    font-size: 2rem;
  }
  .Toastify__toast {
    background-color: #f53131;
      color:white;
}
.Toastify__progress-bar--error {
    background-color: #680101;
}
.Toastify__close-button {
    color:white;
    opacity:1;
}
.Toastify__toast-icon {
    fill:white;
}
`;
const FormControl = styled.div`
  margin: 1rem 0;
`;

export {LoginPageStyles, FormControl}