const express = require ("express");
const app = express();
const bodyParser = require("body-parser");
const massive = require("massive")

require("dotenv").config();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db =>{
    app.set('db',db)
    console.log('database conected')
})

app.get('/api/shelfie', (req, res) => {
    req.app.get('db').get_shelfie().then(shelfie => {
        res.json('sup');
    }).catch(error => {
        console.log('error', error);
        res.status(500).send('There was an error on the server')
    })
})

app.post('/api/shelfie', (req, res) => {
    const product = req.body;
    req.app.get('db').create_product({
        imageUrl: product.imageUrl,
        product: product.newProduct,
        price: product.price
    }).then((newProduct)=>{
        res.json(newProduct[0]);
    }).catch(error => {
        console.log('error', error);
        res.status(500).send('There was an error on the server');
    });
})

const PORT = 4000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
