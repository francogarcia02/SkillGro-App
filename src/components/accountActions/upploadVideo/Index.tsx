import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import UseCourses from "@/hooks/UseCourses";
import UpploadForm from "./UpploadForm";
import { set } from "react-hook-form";

export interface UpploadVideoProps{
    id: string;
}

const UpploadVideo = ({account} : { account: UpploadVideoProps }) => {
    const [open, setOpen] = useState(true)

    

    return(
        <div className="border border-gray m-4 p-4 rounded-lg grid justify-items-center align-center">
            
            <div className="grid m-10">
                <h5>Bienvenido al creador de videos</h5>
                <p>Aqui haras tus sueños realidad</p>
                <button 
                className="bg-purple-600 text-white p-3 rounded-lg"
                onClick={()=>setOpen(false)}
                >
                    Abrir Formulario
                </button>
            </div>
            {open ?
            <></>
            :
            <UpploadForm account={{id: account.id, open: setOpen}}/>
            }
        </div>
    )
}

export default UpploadVideo
