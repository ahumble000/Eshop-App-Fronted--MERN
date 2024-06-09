import React,{createContext, useEffect, useState} from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};
    for (let index = 1; index <= 300 ; index++) {
        cart[index] = 0;
    }
    
    return cart;
}

const ShopContextProvider = (props)=> {  
    
    
    const [all_product,setAllProducts] = useState([]);
    const [cartItems,setCartItems] = useState(getDefaultCart());
    
    useEffect(()=>{
        const fetchInfo = async () =>{
            await fetch(`http://localhost:4000/api/products`)
            .then(res=>res.json())
            .then(data=>setAllProducts(data))
        }
        fetchInfo();

        if(localStorage.getItem('auth_token')){
            fetch(`http://localhost:4000/api/users/userCartData`,{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth_token' : `${localStorage.getItem('auth_token')}`,
                    'Content-Type':'application/json',
                },
                body:'',
            })
            .then(res=>res.json())
            .then(data=>setCartItems(data));  
        }
    },[])
    


    const addToCart = (itemId) =>{ 
        setCartItems((prev)=> ({...prev,[itemId] : prev[itemId] + 1}));
        if(localStorage.getItem('auth_token')){
            fetch(`http://localhost:4000/api/users/addToCart`,{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth_token' : `${localStorage.getItem('auth_token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({'itemId':itemId}),
            })
            .then(res=>res.json())
            .then(data=>console.log(data));  
        }

    };
      
    const removeFromCart = (itemId) =>{
        let confirm = window.confirm("Do you want to remove this product?");
        if(confirm){
            setCartItems((prev)=> ({...prev,[itemId] : 0}));
        }
        if(localStorage.getItem('auth_token')){
            fetch(`http://localhost:4000/api/users/removeFromCart`,{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth_token':`${localStorage.getItem('auth_token')}`,
                    'Content-Type':'application/json',      
                },
                body:JSON.stringify({'itemId':itemId})
            })
            .then(res=>res.json())
            .then(data=>console.log(data))
        }
    };
    
    const decrementFromCart = (itemId) =>{
        setCartItems((prev)=> ({...prev,[itemId] : prev[itemId] -1 }));
        if(localStorage.getItem('auth_token')){
            fetch(`http://localhost:4000/api/users/decrementFromCart`,{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth_token':`${localStorage.getItem('auth_token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({'itemId':itemId})
            })
            .then(res=>res.json())
            .then(data=>console.log(data))
        }};
         
    const cartTotal = () =>{
        let totalAmount = 0;

        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = all_product.find(product=> product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.new_price;
            }
        }

        return totalAmount;
    }

    const shipCost = () =>{
        let shippingCharges = 0;
        const shipLimit = 500;
        if(cartTotal() < shipLimit && cartTotal() > 0){
            shippingCharges = 20;
        }

        return shippingCharges;
    }

    const cartSubTotal = () =>{
        if(shipCost()){
            return cartTotal() + shipCost();
        }
        else{
            return cartTotal()
        }
    }

    const totalCartItems = () =>{
        let cartItemsCount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                cartItemsCount += 1;
            }
        }
        return cartItemsCount;
    }
    
  
    const contextValue = {all_product,cartItems,addToCart,removeFromCart,decrementFromCart,cartTotal,shipCost,cartSubTotal,totalCartItems};

    // console.log(cartSubTotal);
    // console.log(cartItems);
    // console.log(addToCart);
    // console.log(removeFromCart);

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider> 
    )

}      

export default ShopContextProvider;