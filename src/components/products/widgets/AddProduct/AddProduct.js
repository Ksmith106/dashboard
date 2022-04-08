import React, {useState} from "react";
import { useNumberFormat} from 'hooks/useNumberFormat'
import {AddProductStyles} from './styles'
import {ProductEditor} from "components/products/ProductEditor";
import ProductPreview from 'assets/image/totmc.webp'

function AddProduct ({ children, ...props}){
    const [isWriting, setIsWriting] = useState(false)
    const [productName, setProductName] = useState('Product Name')
    const [productDescription, setProductDescription] = useState('Product Description')
    const [productPrice, setProductPrice] = useState ('19.99')
    const [productImage, setProductImage] = useState('ProductPreview')
    const formatter = useNumberFormat()


    function handleProductName (name){
        setProductName(name)
    }
    function handleProductPrice(price){
        setProductPrice(formatter(price))
    }
    function handleSubmit(e){
        e.preventDefault();
        const productData ={
            productName, productPrice, productDescription
        }
        setIsWrinting(true);
    }
    if(isWriting){
        return <h1>Editor Feedback Component</h1>
    }
    else {
    return (
        <AddProductStyles {...props}>
            <ProductEditor 
                productName ={productName}
                productPrice ={productPrice}
                productImage={productImage}
                handleProductName={handleProductName}
                handleProductPrice={handleProductPrice}
                setProductImage={setProductImage}
                handleProductDescription={handleProductDescription}
                handleSubmit={handleSubmit}
             />
            
        </AddProductStyles>
    )
}
}

export default AddProduct;