import axios from 'axios';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card.css';
import { useLocation } from 'react-router-dom';


export default function AllProducts() {

    const [products, setProducts] = useState([]);
    const location = useLocation();
    const { item } = location.state || { item: [] };

    async function getProducts() {
        const options = {
            method: 'GET',
            url: `https://amazon-scraper-api11.p.rapidapi.com/search/${item}`,
            params: {
                api_key: 'a6b524dc87ad22814fe57302cea9cc20'
            },
            headers: {
                'x-rapidapi-key': 'a0a5db4db5msh4d477bbe0939796p15e9f2jsn7331fa690cb9',
                'x-rapidapi-host': 'amazon-scraper-api11.p.rapidapi.com'
            }
        };


        try {
            const response = await axios.request(options);
            console.log(response.data.results);
            setProducts(response.data.results);
            console.log(products.length);
        } catch (error) {
            console.error(error);
        }
    }

    // getProducts();
    useEffect(() => {
        console.log("Calling API");
        getProducts();
    }, []);

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substring(0, maxLength) + '...';
    };


    return (
        // <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', overflow: 'hidden' }}>
        //     {
        //         products.map((product, index) => (
        //             <div className="m-1">
        //                 <Card style={{ width: '18rem' }}>
        //                     <Card.Img variant="top" src={product.image}
        //                         style={{
        //                             width: '100%', // Ensures the image takes the full width of the card
        //                             height: '200px', // Fixed height
        //                             objectFit: 'cover' // Crops the image to fit the dimensions
        //                         }}
        //                     />
        //                     <Card.Body>
        //                         <Card.Title>{product.price_string}</Card.Title>
        //                         <Card.Text>
        //                         {truncateText(product.name, 30)} 
        //                         </Card.Text>
        //                         <Button variant="success">Add To Cart</Button>
        //                     </Card.Body>
        //                 </Card>
        //             </div>
        //         ))
        //     }
        // </div>
        <div className="card-container">
            {
                products.map((product, index) => (
                    <div key={index} className="card-item">
                        <Card className="fixed-card">
                            <Card.Img variant="top" src={product.image} className="fixed-card-img" />
                            <Card.Body className="fixed-card-body">
                                <div>
                                    <Card.Title>{product.price_string}</Card.Title>
                                    <Card.Text>{truncateText(product.name, 20)}</Card.Text>
                                </div>
                                <Button variant="success">Add To Cart</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))
            }
        </div>
    );
}