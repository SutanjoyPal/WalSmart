// import { useLocation } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import '../Search/search.css';
// import { FaExternalLinkAlt } from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';

// export default function ShoppingList() {
//     const location = useLocation();
//     const { products } = location.state || { products: [] };
//     //const products = ["milk", "eggs", "carrot", "juice"]
//     const navigate = useNavigate();


//     return (
//         <div>
//             <div style={{ display: 'flex',flexDirection: 'column' ,justifyContent: 'center', alignItems: 'center' }}>
//                 <h1 className='heading'>My Shopping List</h1>
//                 <p>Here are all the items you will need that you can buy at walmart!</p>
//                 <br />
//                 <br />
//             </div>
//             <div className="d-grid gap-2">
//                 {products.map((product, index) => (
//                     <Button key={index} variant="success" size="lg" onClick={navigate('/items', { state: { item: products } })}>
//                         {product}{'  '}
//                         <FaExternalLinkAlt />
//                     </Button>
//                 ))}
//             </div>
//         </div>

//     );
// }

import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../Search/search.css';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function ShoppingList() {
    const location = useLocation();
    const { products } = location.state || { products: [] };
    const navigate = useNavigate();

    const handleNavigate = (item) => {
        navigate('/items', { state: { item: item } });
    };

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h1 className='heading'>My Shopping List</h1>
                <p>Here are all the items you will need that you can buy at Walmart!</p>
                <br />
                <br />
            </div>
            <div className="d-grid gap-2">
                {products.map((product, index) => (
                    <Button
                        key={index}
                        variant="success"
                        size="lg"
                        onClick={() => handleNavigate(product)} // Pass product to handleNavigate
                    >
                        {product}{'  '}
                        <FaExternalLinkAlt />
                    </Button>
                ))}
            </div>
        </div>
    );
}
