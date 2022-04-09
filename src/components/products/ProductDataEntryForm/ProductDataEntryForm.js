import React from 'react';
import {ProductDataEntryFormStyles, ProductImage, ProductDescription, ProductName, ProductPrice} from "components/products";
import {Label, Input} from 'ui/forms'
import {TextArea}from 'ui/forms/textarea'
import {ProductImageDropBox} from '../ProductImageDropBox';
import {SubmitButton} from 'ui/buttons';
function ProductDataEntryForm ({children, handleProductName, handleProductPrice,setProductImage, handleProductDescription, handleSubmit ,...props}) {
    return(
        <ProductDataEntryFormStyles {...props} onSubmit={handleSubmit}>
            <productImage>
                <label>Product Image</label>
                <productImageDropBox setProductImage={setProductImage}/>
                </productImage>
            <fieldset><ProductName>
                <label>Product Name</label>
                <Input onChange={(e)=>handleProductName(e.target.value.trim())} maxLength={30}/>
            </ProductName>
            <ProductPrice>
                <label>Product Price</label>
                <Input onChange={(e)=>handleProductPrice(e.target.value.trim())} maxLength={8}/>
            </ProductPrice>
            </fieldset>
            <ProductDescription>
                <label>Product Description</label>
                <TextArea rows={6}/>
            </ProductDescription>
            <div>
                <SubmitButton width="100%" padding="1rem 1rem" margin="1rem 1rem 1rem 1rem" type="submit">Add Coffee Selection</SubmitButton>
            </div>
        </ProductDataEntryFormStyles>
    )
}

export default ProductDataEntryForm