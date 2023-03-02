const mongoose = require('mongoose');

const Product = require('./models/product');

// Metodo de conexion version actual 2023
main().catch(err => console.log(err, "OH NO, MONGO ERROR!"));

async function main() {
    console.log("Mongo Connection Open!!");
    mongoose.set('strictQuery', true) 
    // Mongoose.set es para evitar el warning message.
  await mongoose.connect('mongodb://127.0.0.1:27017/farmStand');
}
    

// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })

// p.save().then(p => {
//     console.log(p)
// })

// .catch(e => {
//     console.log(e)
// })

const seedProducts = [
{
    name:'Fairy Eggplant',
    price: 1.00,
    category: 'vegetable',
},
{
    name:'Organic Goddess Melon',
    price: 4.99,
    category: 'fruit',
},
{
    name:'Organic mini Seedless Watermelon',
    price: 3.99,
    category: 'fruit',
},
{
    name:'Organic Celery',
    price: 1.50,
    category: 'vegetable',
},
{
    name:'Prueba ',
    price: 1.50,
    category: 'vegetable',
}
]
    
Product.insertMany(seedProducts)
.then(res => {
    console.log(res)
})

.catch(e => {
    console.log(e)
})
