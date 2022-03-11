 import React from 'react'
 
 import  Logo  from './Logo'
 import {BrandStyles} from './styles'
 function Brand  (props){
     return( 
         <BrandStyles {...props}>
             <Logo height={props.iconSize} fill={props.fill}/>
             <figcaption>Rise Coffee</figcaption>
         </BrandStyles>
     )
 }
 
 export default Brand 