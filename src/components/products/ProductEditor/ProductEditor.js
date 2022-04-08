import React from 'react';

import {ProductDataEntryForm } from "./../ProductDataEntryForm";
import { ProductPreview } from "./../ProductPreview";
import { ProductEditorStyles } from './styles'

function ProductEditor ({children, productName, productPrice, productImage, productDescription, handleSubmit, handleProductName, handleProductPrice, setProductImage ,...props}){

    return(
        <ProductEditorStyles>
            <ProductDataEntryForm
                handleProductName={handleProductName}
                handleProductPrice={handleProductPrice}
                setProductImage={setProductImage}
                handleProductDescription={handleProductDescription}
                handleSubmit={handleSubmit}
            />
            <ProductPreview
             productName={productName}
             productPrice={productPrice}
             productImage={productImage}
             productDescription={productDescription}
             />
        </ProductEditorStyles>
    )
}

export default ProductEditor