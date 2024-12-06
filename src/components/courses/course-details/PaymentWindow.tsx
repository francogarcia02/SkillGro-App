import CloseIcon from '@mui/icons-material/Close';

interface PaymentWindowProps {
    open: boolean;
    setOpen: (value: boolean) => void; 
}

const PaymentWindow = ({ open, setOpen }: PaymentWindowProps) => {
    return (
        <>
            {open && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <div className='grid justify-items-end'>
                            <CloseIcon 
                            onClick={() => setOpen(false)} 
                            className="cursor-pointer"
                            />
                        </div>
                        <h2 className="text-lg font-semibold">Contenido cargado al carrito con exito</h2>
                        <p className="mt-2">Presione el item de la barra superior para ver informacion del pago</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default PaymentWindow;

