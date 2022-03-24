import React from 'react'; 

import {ProductPreviewStyles, ProductImage, ProductName, ProductPrice, ProductDescription} from './styles'

function ProductPreview ({children, productName, productPrice, productImage, ...props}) {
    return(
        <ProductPreviewStyles {...props}>
        <ProductImage>
            <img src={productImage} alt="top of the morning coffee" width="320" height="184"/>
        </ProductImage>
        <ProductName>{productName}</ProductName>
        <ProductPrice>${productPrice}</ProductPrice>
        <ProductDescription></ProductDescription>    
        I'm baby seitan irure mlkshk tote bag pinterest before they sold out fixie. Air plant fanny pack subway tile dolore, narwhal intelligentsia biodiesel microdosing kinfolk. Eiusmod slow-carb in, literally typewriter selfies jianbing.
        </ProductPreviewStyles>
    )
}

export default ProductPreview