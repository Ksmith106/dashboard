import styled from 'styled-components';

const PanelStyles= styled.section`
flex:1;
box-shadow: 0 0 0.2rem 0 #25CED1 ;
background-color: #FCEADE ;
border-radius:0.2rem ;
margin:1rem;
  
`;

const PanelHeader = styled.header`
    h2{
        background-color: #F2E8CF;
        padding:0.5rem;
        border-radius: 0.3rem ;
        border-bottom-left-radius:0.5rem;
        border-bottom-right-radius:0.5rem ;
        color:#E2EFDE;
    }
`;

const PanelBody = styled.div`
    margin: ${props => props.margin || " 3rem"};
`;

export {PanelStyles, PanelBody, PanelHeader}