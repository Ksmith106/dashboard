import styled from 'styled-components';

const BrandStyles = styled.figure`
display:flex;
align-items: center;
     figcaption{
         display: inline;
         font-size: ${props => props.size || "1rem"};
         font-weight: ${props => props.weight || "600"};
         color: ${props => props.color || "grey"};
         padding: ${props => props.padding || "0"};
         margin: ${props => props.margin || "0"};
         line-height: 0;
         background-color: red;
     }
`;

export{BrandStyles} ;