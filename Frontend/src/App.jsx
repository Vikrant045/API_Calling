import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
      const [products,setProducts] = useState([]);
      const [error,setError]= useState(false)
      const[loading,setLoading]=useState(false)

      useEffect(()=>{
          ;(
            async()=>{
              try {
                setLoading(true);
                setError(false)
                const response  = await axios.get("/api/products");
                setProducts(response.data);
                setLoading(false)                
              } catch (error) {
                setError(true);
                setLoading(false)
              }
            }
          )()
      })
      if(error){
        return <h2>something went wrong//</h2>
      }
      if(loading){
        return <h2> Loading....</h2>
      }
  return (
    <>
      <h2>Total Products :{products.length}</h2>
      {
        products.map((product)=>(
          <div key={product.id}>
             <h3>Name :- {product.name}</h3>
             <h3>price :- {product.price}</h3>
             <img src={product.image} style={{width:"100px", height:"100px"}} ></img>
             <br />
          </div>
        ))
      }
     
    </>
  )
}

export default App
