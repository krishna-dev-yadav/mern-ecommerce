import { createContext, useState, useEffect } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const Shopcontext = createContext();

const Shopcontextprovider = (props) => {
    const currency = "$";
    const delivery_fee = 10;
    const [search, setsearch] = useState('');
    const [showSearch, setshowSearch] = useState(false);
    const [cartItem, setcartItem] = useState([]);
    const navigate= useNavigate();

    const addToCart = async (itemid, size) => {
        if (!size) {
            toast.error('Select product type');
            return;
        }

        let cartData = structuredClone(cartItem);
        if (cartData[itemid]) {
            if (cartData[itemid][size]) {
                cartData[itemid][size] += 1;
            } else {
                cartData[itemid][size] = 1;
            }
        } else {
            cartData[itemid] = {};
            cartData[itemid][size] = 1;
        }
        setcartItem(cartData);
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItem) {
            for (const item in cartItem[items]) {
                try {
                    if (cartItem[items][item] > 0) {
                        totalCount += cartItem[items][item];
                    }
                } catch (error) { }
            }
        }
        return totalCount;
    };

    const updateQuentity = async (itemid, size, quentity) => {
        let cartData = structuredClone(cartItem);
        cartData[itemid][size] = quentity;
        setcartItem(cartData);
    };

    const getCartamount = () => {
        let totalAmount = 0;
        for (const items in cartItem) {
            let itemInfo = products.find((product) => product._id === items);
            for (const item in cartItem[items]) {
                try {
                    if (cartItem[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItem[items][item];
                    }
                } catch (error) { }
            }
        }
        return totalAmount;
    };


    const value = {
        products,
        currency,
        delivery_fee,
        search, setsearch,
        showSearch, setshowSearch,
        cartItem,
        addToCart,
        getCartCount,
        updateQuentity,
        getCartamount,
        navigate
    };

    return (
        <Shopcontext.Provider value={value}>
            {props.children}
        </Shopcontext.Provider>
    );
};

export default Shopcontextprovider;
