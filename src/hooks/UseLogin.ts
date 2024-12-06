import { useEffect, useState } from 'react';

const UseLogin = () => {
    const [isLogged, setIsLogged] = useState<boolean>(false);

    const setLogin = (data: any) => {
        if (typeof window !== 'undefined') {
            sessionStorage.setItem('user', JSON.stringify(data.email));
            setIsLogged(true);
        }
    };

    const areLogued = () => {
        if (typeof window !== 'undefined') {
            const user = sessionStorage.getItem('user');
            if (user) {
                return JSON.parse(user);
            } else {
                return false;
            }
        }
        return false;
    };

    useEffect(() => {
        const user = areLogued();
        setIsLogged(!!user);
    }, []);

    return {
        setLogin,
        areLogued,
        isLogged,
    };
};

export default UseLogin;
