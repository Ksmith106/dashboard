import React from 'react';
import {ProductDataEntryFormStyles, ProductImage, ProductDescription, ProductName, ProductPrice} from "components/products";
import {Label, Input} from 'ui/forms'
import {TextArea}from 'ui/forms/textarea'
import {ProductImageDropBox} from '../ProductImageDropBox';
function ProductDataEntryForm ({children, handleProductName, handleProductPrice,setProductImage ,...props}) {
    return(
        <ProductDataEntryFormStyles {...props}>
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
            
        </ProductDataEntryFormStyles>
    )
}

export default ProductDataEntryForm