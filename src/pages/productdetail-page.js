import { useParams } from "react-router-dom";
import hmacSHA512 from 'crypto-js/hmac-sha512';
import { useEffect } from "react";
import { client } from "../axiosConfig";

const ProductDetailsPage = () => {
    const params = useParams();

    useEffect(() => {
        const { id } = params;
        client.get(`/products/${id}`).then((response) => {
            console.log('Response: ', response.data.products);
            // setData(response.data.products)
        }).catch((err) => {
            console.log(err)
        });

    }, [])
    
    // const id = import hmacSHA512 from 'crypto-js/hmac-sha512';
    // console.log(hmacSHA512(params.id))
    return <h2>Product </h2>
}

export default ProductDetailsPage;