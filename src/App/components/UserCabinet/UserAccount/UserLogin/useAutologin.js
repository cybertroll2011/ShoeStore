import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { setUserData } from '../../../../redux/user/userSlice';

const useAutoLogin = () => {
    const login = Cookies.get('login');
    const password = Cookies.get('password');
    const dispatch = useDispatch();

    if (login && password) {
        dispatch(setUserData({
            isLogedIn: true,
            login: login
        }))
    }
}

export default useAutoLogin;