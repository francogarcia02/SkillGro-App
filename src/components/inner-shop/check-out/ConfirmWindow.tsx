export interface ConfirmWindowProps{
    submit: () => void;
    open: (open: boolean) => void;
}

const ConfirmWindow = ({functions} : {functions: ConfirmWindowProps}) =>{
    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="grid gap-4 bg-white p-6 rounded-lg">
                <h5>Desea confirmar su compra?</h5>
                <div className="flex items-center justify-center gap-4 w-full">
                    <button
                    onClick={()=>functions.submit()}
                    className="bg-sky-500 hover:bg-sky-700 text-white p-2 rounded-lg transition-colors duration-100"
                    >
                        Confirmar
                    </button>
                    <button
                    className="bg-red-500 hover:bg-red-700 text-white p-2 rounded-lg transition-colors duration-100"
                    onClick={()=>functions.open(false)}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmWindow