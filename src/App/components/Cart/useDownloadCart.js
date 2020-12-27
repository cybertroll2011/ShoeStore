import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getFirebaseDatabase } from '../../firebase/firebase';
import { downloadItems } from '../../redux/cart/cartSlice';

const useDownloadCart = (userLogin) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (userLogin !== "") {
            getFirebaseDatabase().ref(`users/${userLogin}/cart`).on('value', (data) => {
                let response = data.val();
                if (response !== null) {
                    dispatch(downloadItems(response));
                }
            })
        } else if (userLogin === "") {
            const storageCart = localStorage.getItem('cart');
            if (storageCart !== "" && storageCart !== null) {
                JSON.parse(storageCart);
                dispatch(downloadItems(storageCart));
            }
        }
    }, [userLogin]);
}

export default useDownloadCart;