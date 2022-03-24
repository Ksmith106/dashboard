import styled from "styled-components";

const ProductPreviewStyles = styled.aside`
    max-width:36rem;
    align-self: stretch;
    padding:3rem 2rem ;
    background-color:#f7faf2;
`
const ProductImage = styled.div`
margin:1rem auto 0;
width:30rem;
img{
    width:100%;

}
`

const ProductName = styled.h2`
font-size: 2.25rem;
font-weight:700;
line-height:2.5rem ;
letter-spacing: 0.5rem;
color:#1b43b7 ;
word-wrap: break-word;
`;

const ProductPrice = styled.p`
font-size:2rem; 
font-weight:200;
letter-spacing: -2px;
color:#50514f;
margin-top:0.3rem;
margin-bottom:0.5rem;
`;

const ProductDescription = styled.p`
font-size:1.3rem;
color:#514f59;
`
export {
    ProductPreviewStyles, ProductImage, ProductPrice, ProductName, ProductDescription
}