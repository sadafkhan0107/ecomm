import './App.css';
import {ProductCart} from './component/ProductCart/ProductCart';
import { useState, useEffect} from 'react';
import axios from 'axios';
import {Filter} from './components/Filter/Filter';
import {useFilter} from './context/FilterContext/FilterContext'
function App() {
  const [products, setProducts] = useState([])
  const {discount} = useFilter();
  console.log(discount);

   useEffect(() => {
    (
      async() => {
        try{
          const {data : {data}} = await axios.get('products.json')
          setProducts(data);
        }catch(err){
          console.log(err);
        }
      }
    )()
   }, [])

  return (
   <div className='home-page'>
    <Filter />
    <main className='container'>
      {
        products?.length > 0 && products.map(product => <ProductCart key={product.id} product={product} />)
      }
    </main>
   </div>
  );
}

export default App;
