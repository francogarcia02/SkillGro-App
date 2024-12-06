'use client'
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import { Provider } from "react-redux";
import store from "@/redux/store";
import Account from "@/components/accountActions/account/Index";

const index = ({ params }: { params: { id: string } }) => {
    return (
        <Wrapper>
            <Provider store={store}>
            <HeaderOne />
                <Account account={{id: params.id}}/>
            <FooterOne />
            </Provider>
        </Wrapper>
    );
};

export default index;
