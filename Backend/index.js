import express from "express"

const app = express();

const port  = process.env.PORT || 3000;

app.get("/api/products",(req,res)=>{

    const products = [
        {
          id: 1,
          name: "Product 1",
          price: 10.99,
          image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
        },
        {
          id: 2,
          name: "Product 2",
          price: 19.99,
          image: "https://images.unsplash.com/photo-1526267922563-3ddc3dc08a6e"
        },
        {
          id: 3,
          name: "Product 3",
          price: 14.49,
          image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde"
        },
        {
            id: 4,
            name: "Product 4",
            price: 14.49,
            image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde"
          },
          {
            id: 5,
            name: "Product 5",
            price: 19.99,
            image: "https://images.unsplash.com/photo-1526267922563-3ddc3dc08a6e"
          },
        
      ];

      setTimeout(()=>{
           res.send(products)
      },3000)
      
})
app.listen(port,()=>{
    console.log(`Server is running`);
})