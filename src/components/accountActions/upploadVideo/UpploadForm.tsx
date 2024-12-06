import UseCourses from "@/hooks/UseCourses";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
import UseAccount from "@/hooks/UseAccount";

export interface UpploadFormProps {
    id: string;
    open: (open: boolean) => void;
}

const UpploadForm = ({ account }: { account: UpploadFormProps }) => {
    const { courses, setCourses } = UseCourses();
    const {getAccount} = UseAccount()
    const dispatch = useDispatch();
    const [id, setId] = useState<number>();
    const [thumb, setThumb] = useState<File | null>(null);
    const [title, setTitle] = useState<string>();
    const [rating, setRating] = useState<number>();
    const [category, setCategory] = useState<string>(''); 
    const [descripcion, setDescription] = useState<string>();
    const [price, setPrice] = useState<number>();
    const [priceType, setPriceType] = useState<string>();
    const [creator, setCreator] = useState<string>();
    const [skillLevel, setSkillLevel] = useState<string>();
    const [language, setLanguage] = useState<string>();
    const [video, setVideo] = useState<object>();

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setThumb(event.target.files[0]);
        }
    };

    const accountFiltered: any = getAccount(account.id)

    const handleSubmit = () => {
        setId(courses.length + 1);
        setCreator(accountFiltered.user);
        setRating(0);
        setPriceType('Paid');
        const videoNew = {
            thumb: thumb, 
            title: title,
            category: category,
            price: price,
            skill_level: skillLevel,
            language: language,
            desc: descripcion,
        };
        setVideo(videoNew);
    };

    useEffect(() => {
        if (video) {
            setCourses([...courses, { ...video, id: id, instructors: creator, rating: rating, price_type: priceType }]);
            account.open(true);
            console.log(courses);
        }
        console.log(courses);
    }, [video]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <form onSubmit={handleSubmit} className="grid justify-items-center align-center bg-white m-10 p-10 rounded-lg w-full gap-4">
                <div className="flex justify-between items-center w-full">
                    <h3 className="text-purple-600 bg-gray-100 p-2 rounded-full">Subir Video</h3>
                    <button onClick={() => account.open(true)}>
                        <CloseIcon
                            sx={{
                                fontSize: 30,
                            }}
                        />
                    </button>
                </div>
                <div className="grid justify-items-center align-center gap-4 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                        <div className="flex items-center justify-between gap-2">
                            <h5>Titulo:</h5>
                            <input
                                className="border border-gray rounded-lg p-2 w-full"
                                value={title}
                                placeholder="Titulo..."
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center justify-between gap-2">
                            <h5>Categoria:</h5>
                            <select
                                className="border border-gray rounded-lg p-2 w-full"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="">Selecciona una categoría</option>
                                <option value="Data Science">Data Science</option>
                                <option value="Development">Development</option>
                                <option value="Art & Design">Art & Design</option>
                                <option value="Business">Business</option>
                                <option value="Finance">Finance</option>
                                <option value="Health & Fitness">Health & Fitness</option>
                                <option value="Lifestyle">Lifestyle</option>
                                <option value="Design">Design</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                        <div className="flex items-center justify-between gap-2">
                            <h5>Precio:</h5>
                            <input
                                className="border border-gray rounded-lg p-2 w-full"
                                value={price}
                                type="number"
                                placeholder="Precio..."
                                onChange={(e) => setPrice(Number(e.target.value))}
                            />
                        </div>
                        <div className="flex items-center justify-between gap-2">
                            <h5>Descripcion:</h5>
                            <input
                                className="border border-gray rounded-lg p-2 w-full"
                                value={descripcion}
                                placeholder="Descripcion..."
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                        <div className="flex items-center justify-between gap-2">
                            <h5>Lenguaje:</h5>
                            <input
                                className="border border-gray rounded-lg p-2 w-full"
                                value={language}
                                placeholder="Lenguaje..."
                                onChange={(e) => setLanguage(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center justify-between gap-2">
                            <h5>Nivel:</h5>
                            <input
                                className="border border-gray rounded-lg p-2 w-full"
                                value={skillLevel}
                                placeholder="Nivel..."
                                onChange={(e) => setSkillLevel(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-2 w-full">
                        <h5>Imagen:</h5>
                        <input
                            type="file" 
                            accept="image/*" 
                            className="border border-gray rounded-lg p-2 w-full"
                            onChange={handleImageChange}
                        />
                    </div>
                </div>
                <button type="submit" className="bg-purple-600 text-white p-2 rounded-lg">Subir Video</button>
            </form>
        </div>
    );
};

export default UpploadForm;
