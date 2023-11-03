const products = [  
    {id: '1', name: "Remera 1", category: "remeras", price: 3500, stock: 600, description: "remeras stampadas", image: "/public/assets/remera joystick1.webp"},
    {id: '2', name: "Remera 2", category: "remeras", price: 3500, stock: 600, description: "remeras stampadas", image: "/public/assets/remera joystick2.webp"},
    {id: '3', name: "Remera 3", category: "remeras", price: 3500, stock: 600, description: "remeras stampadas", image: "/public/assets/remera joystick3.jpg"},
    {id: '4', name: "Remera 7", category: "remeras", price: 3500, stock: 600, description: "remeras stampadas", image: "/public/assets/remera blanca.jpg"},
    {id: '5', name: "Pantalon 4", category: "pantalones", price: 3500, stock: 600, description: "pantalones", image: "/public/assets/babucha beige.webp"},
    {id: '6', name: "Pantalon 5", category: "pantalones", price: 3500, stock: 600, description: "pantalones", image: "/public/assets/babucha negra.webp"},
    {id: '7', name: "Pantalon 6", category: "pantalones", price: 3500, stock: 600, description: "pantalones", image: "/public/assets/shoggins negro.jpg"},
    {id: '8', name: "Gorra 8", category: "gorras", price: 3500, stock: 600, description: "gorras", image: "/public/assets/gorra assasins.jpg"},
    {id: '9', name: "Gorra 9", category: "gorras", price: 3500, stock: 600, description: "gorras", image: "/public/assets/gorra fornite.jpg"},
    {id: '10', name: "Gorra 10", category: "gorras", price: 3500, stock: 600, description: "gorras", image: "/public/assets/gorra freefire.jpg"},
    {id: '11', name: "Gorra 11", category: "gorras", price: 3500, stock: 600, description: "gorras", image: "/public/assets/gorra joistick.jpg"},
    {id: '12', name: "Gorro 12", category: "gorras", price: 3500, stock: 600, description: "gorro", image: "/public/assets/gorro.jpg"}
]
export const mFetch = (id) => {   
    return new Promise (( res, rej ) => {
        setTimeout(()=> {
            res(id ? products.find(prod => prod.id === id) :products)
        }, 500)
        
    })
}
