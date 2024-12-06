'use client'
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import UseCourses from "@/hooks/UseCourses";
import UpploadVideo from "@/components/accountActions/upploadVideo/Index";

const index = ({ params }: { params: { id: string } }) => {
    
    return(
        <Wrapper>
         <HeaderOne />
            <UpploadVideo account={{id: params.id}} />
         <FooterOne />
      </Wrapper>
    )
}

export default index
