import React from 'react';

import {ProductDataEntryForm } from "./../ProductDataEntryForm";
import { ProductPreview } from "./../ProductPreview";
import { ProductEditorStyles } from './styles'

function ProductEditor ({children, productName, productPrice, productImage, handleProductName, handleProductPrice, setProductImage ,...props}){

    return(
        <ProductEditorStyles>
            <ProductDataEntryForm
                handleProductName={handleProductName}
                handleProductPrice={handleProductPrice}
                setProductImage={setProductImage}
            />
            <ProductPreview
             productName={productName}
             productPrice={productPrice}
             productImage={productImage}
             />
        </ProductEditorStyles>
    )
}

export default ProductEditor