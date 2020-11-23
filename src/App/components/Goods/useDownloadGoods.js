import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getFirebaseDatabase } from '../../firebase/firebase';

const useDownloadData = (
    array,
    firebaseRef,
    loadingStatus,
    setLoadingStatus,
    addGoodsData) => {

    const dispatch = useDispatch();
    useEffect(() => {
        if (loadingStatus === 'idle' && array.length === 0) {
            dispatch(setLoadingStatus('loading'));
            getFirebaseDatabase().ref(firebaseRef).on('value', (data) => {
                let response = data.val();
                dispatch(addGoodsData(response));
                dispatch(setLoadingStatus('succeeded'));
            });
        }
    })
}

export default useDownloadData;