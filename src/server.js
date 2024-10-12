import express from "express"
const port = 3000;
const app = express();

app.use([
    express.json(),
])

const books = [
    {
        id: 1,
        name: "book 1",
        price : 23.23
    },
    {
        id: 2,
        name: "book 2",
        price: 12
    },
    {
        id: 3,
        name: "book 3",
        price: 99.99
    },
    {
        id: 4,
        name: "book 4",
        price: 999.99
    }
]
let id = 4;
app.get("/books", (req, res) => {
    if(req.query?.show && req.query['show'].toLowerCase() === "all") {
        return res.json(books);
    }
    if(req.query?.price && !isNaN(+req.query['price'])) {
        console.log(req.query.price)
        return res.json(books.filter(book => book.price <= +req.query['price']))
    } 
    return res.send(books.filter(book => book.id % 2 === 0))
} )

app.post("/book", (req, res) => {
    const {name, price} = req.body;
    books.push({
        id: id,
        name: `${name} ${id+1}` ,
        price: price
    })

    const book = books[id];
    console.log(book);
    id++;
    return res.json(book);
})

app.listen("8080", () => {
    console.log("server has been started with 8080")
})