const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let products = [
    { id: 1, name: 'Elektronik' },
    { id: 2, name: 'Perabotan' }
]


//get all products
app.get('/api/products', (req, res) => {
    res.json(products);
});

//get product by id

app.get('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'product not found' });
    }
});

// add new product
app.post('/api/products', (req, res) => {
    const newProduct = req.body;
    newProduct.id = products.length ? products[products.length - 1].id + 1 : 1;
    products.push(newProduct);
    res.status(202).json(newProduct);
});

//update product
app.put('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
        products[productIndex] = { id: productId, ...req.body };
        res.json(products[productIndex]);
    } else {
        res.status(202).json({ message: 'product not found' });
    }
});

//delete product
app.delete('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    products = products.filter(p => p.id !== productId);
    res.status(204).send();
});

// get query string

let barangs = [
    { id: 1, name: 'Laptop', category: 'Elektronik' },
    { id: 2, name: 'Meja', category: 'Perabotan' }
]

app.get('/api/search', (req, res) => {
    const {name} = req.query;
    if (!name){
        return res.status(400).send('Query string "name" di perlukan');
    }

    const filterBarang = barangs.filter(barang =>
        barang.name.toLowerCase().includes(name.toLowerCase())
    );
    res.json (filterBarang);
});

// route GET dengan parameter dan query string

app.get('/api/search/:category', (req,res)=>{
    const category = req.params.category;
    const {name} = req.query;

    let filteredBarang = barangs.filter(barang =>
        barang.category.toLowerCase() === category.toLowerCase()
    );

    if (name){
        filteredBarang = filteredBarang.filter(barang =>
            barang.name.toLowerCase().includes(name.toLowerCase())
        );
    }
    res.json(filteredBarang);
});

app.listen(port, () => {
    console.log(`Server is running at port http://localhost:${port}`);
});