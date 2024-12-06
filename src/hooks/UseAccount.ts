// UseAccount.ts
import { selectAccounts, setAccounts, Account } from "@/redux/features/accountSlice"; // Importa Account
import { useDispatch, useSelector } from "react-redux";

const UseAccount = () => {
    const dispatch = useDispatch();
    const accounts = useSelector(selectAccounts); 

    // Función para actualizar accounts
    function updateAccounts(newAccounts: Account[]) {
        dispatch(setAccounts(newAccounts));
    }

    const getAccount = (id: string): Account | undefined => {
        const idDecodificado = decodeURIComponent(id);
        const account = accounts.find(account => account.email === idDecodificado);
        if(account){
            return account; 
        }       
    };

    return {
        accounts,
        updateAccounts,
        getAccount
    };
};

export default UseAccount;
