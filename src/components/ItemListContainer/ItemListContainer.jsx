function ItemListContainer ({greeting = "texto home"}) {
    return (  
        <>
            <div>   
                <p>{greeting}</p>
            </div>
            <div>   
                <img className="imgRopa" src="/public/assets/remera.jpg" />
                <img className="imgRopa" src="/public/assets/pantalon.jpg" />
                <img className="imgRopa" src="/public/assets/gorra.jpg" />
                <img className="imgRopa" src="/public/assets/gorro.jpg" />
            </div>
        </>  
    )
}

export default ItemListContainer