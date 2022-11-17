const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// app.get('/Gym', (req, res) => {
//     res.json('Alphaland');
//   })

  app.get('/Gyms', (req,res)=>{
    let locations = (["Alphaland", "Zooculture", "Alphaworld","LA Fitness","Swolehouse"])
    
    res.send(locations)
  
      })




  app.get('/locations', (req,res)=>{
    let locations = (["Texas", "Atlanta", "NewYork","LA","Flordia"])
    res.send(locations)
  
      })

      app.get('/Hours', (req,res)=>{
        let locations = (["5am - 11:pm"])
        res.send(locations)
      
          })



app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))