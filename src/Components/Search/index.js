import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import './search.css';
import axios from 'axios';

export default function Search() {
    // Create a state to store the textarea content
    const [textareaContent, setTextareaContent] = useState('');
    const [products,setProducts] = useState([]);
    const navigate = useNavigate();
    const [isProductsFetched, setIsProductsFetched] = useState(false);

    // Handle changes to the textarea content
    const handleTextareaChange = (event) => {
        setTextareaContent(event.target.value);
    };

    const handleButtonClick = () => {
        console.log('Button clicked!');
        generateAnswer();
    };

    async function generateAnswer() {
        const response = await axios({
            method: 'post',
            url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCYc5HjwKLL7xbdqGGdDIUe0n3r45O8utw",
            data: { "contents": [{ "parts": [{ "text": `${textareaContent}.Recommend products to buy at Walmart.List down only the products separated by commas.` }] }] }
        })
        const result = await axios({
            method: 'post',
            url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCYc5HjwKLL7xbdqGGdDIUe0n3r45O8utw",
            data: { "contents": [{ "parts": [{ "text": `${response.data.candidates[0].content.parts[0].text}.List down only the products without their brands here separated by commas.` }] }] }
        })
        const itemArray =  result.data.candidates[0].content.parts[0].text;
        //console.log(itemArray);
        setProducts(itemArray.split(","));
        setIsProductsFetched(true); 
        //console.log(products);
    }

    useEffect(() => {
        if (isProductsFetched) {
            console.log(products);
            navigate('/list', { state: { products: products } });
        }
    }, [isProductsFetched , navigate , products]); 

    return (
        <div>
            <Stack gap={3}>
                <div className="p-2">
                    <h1 className="heading">What are you doing today?</h1>
                    <p>Tell us what you are planning to do & we will help you out with your shopping list!</p>
                </div>
                <div className="p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <textarea
                        value={textareaContent}
                        onChange={handleTextareaChange}
                        rows={10}
                        cols={50}
                        placeholder="Describe what you need to go shopping for. . ."
                    />
                </div>
                <div className="p-2 m-1 " style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                    <Button variant="success btn" size="lg" onClick={handleButtonClick} >Get My Items</Button>{' '}
                </div>
            </Stack>
        </div>
    );
}