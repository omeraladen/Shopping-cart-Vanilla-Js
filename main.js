let shop = document.getElementById('shop');

let shopItemsData = [
    {
        id: "1",
        name: "Casual Shirt",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        price: 25,
        img: "images/img-1.jpg"
    },{
        id: "2",
        name: "Office Shirt",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        price: 78,
        img: "images/img-2.jpg"
    },{
        id: "3",
        name: "Mens Suit",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        price: 100,
        img: "images/img-3.jpg"
    },{
        id: "4",
        name: "Smart Watch",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        price: 39,
        img: "images/img-4.jpg"
    }
]

//let fakeStoreData = fetch('https://fakestoreapi.com/products').then(resp => resp.json()).then(data => console.log(data))

let basket = [];


let shopGenerator = () => {
    return (shop.innerHTML = shopItemsData.map( item => {
       let { id , name , desc , price , img} = item
        return (
            `
    <div id=product-id-${id} class="item">
    <img width="222" src=${img}  alt="items-image">
    <div class="details">
        <h2>${name}</h2>
        <p>${desc}</p>
        <div class="price-quantity">
            <h2>$ ${price}</h2>
            <div class="buttons">
                <i onclick=increment(${id}) class="bi bi-plus-lg"></i>
                <div id=${id} class="quantity">0</div> 
                <i onclick=decrement(${id}) class="bi bi-dash-lg"></i>
            </div>
        </div>
    </div>
</div>
    `
        )
    } ).join(" "))
}

shopGenerator();

let increment = (id ) => {
    
    let search = basket.find( x => x.id === id );
    if (search === undefined){
        
        basket.push({
            id,
            item : 1
        })
         
    }else{
        search.item += 1
    }
    
    update(id);
}

let decrement = (id) => {
    let search = basket.find( x => x.id === id );
   
    if(search.item === 0) return;
    else{
        search.item -= 1 
    }
   
    update(id);
}

let update = (id) => {
    let search = basket.find( x => x.id === id );
    document.getElementById(id).innerHTML = search.item
    calculation();
}


let calculation = (id) => {
    let cartIcon = document.getElementById('cartAmount');

    let search = basket.find( x => x.id === id );

    let totalItems = basket.map((x)=> x.item).reduce((x,y)=> x+y,0) ;
    console.log(totalItems)
   
    
    cartIcon.innerHTML = totalItems;
    


}