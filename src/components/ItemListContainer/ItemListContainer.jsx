function ItemListContainer ({greeting = "texto home"}) {
    return (  
        <>
            <div>   
                <p>{greeting}</p>
            </div>
            <div>   
                <img className="imgRopa" src="/assets/remera.jpg" />
                <img className="imgRopa" src="/assets/pantalon.jpg" />
                <img className="imgRopa" src="/assets/gorra.jpg" />
                <img className="imgRopa" src="/assets/gorro.jpg" />
            </div>
        </>  
    )
}

export default ItemListContainer