'use client'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddBoxIcon from '@mui/icons-material/AddBox';
import UseCourses from '@/hooks/UseCourses';
import UseAccount from "@/hooks/UseAccount";
import { useMemo } from "react";
import VideoCard from "@/components/courses/course/VideoCard";
import Link from "next/link";

export interface AccountProps{
    id: string;
}

const Account = ({account} : { account: AccountProps }) => {
    const { courses, setCourses } = UseCourses();
    const { getAccount } = UseAccount()
    const accountFiltered:any = getAccount(account.id)
    const publications = accountFiltered.publications.map((item: any)=>{
        return item.videoId
    })
    const bought = accountFiltered.bought.map((item: any)=>{
        return item.videoId
    })
    const publicationsFiltered = useMemo(() => {
        return courses.filter(course => publications.includes(course.id));
    }, [courses, publications]);

    const boughtsFiltered = useMemo(() => {
        return courses.filter(course => bought.includes(course.id));
    }, [courses, bought]);

    return (
        <main className="main-area fix">
                <div className="container">
                    <div className="grid justify-items-center align-center border border-gray rounded-lg p-4 mb-4 w-full">
                        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 w-full bg-gray-200 rounded-lg p-2">
                        <AccountCircleIcon 
                        sx={{ 
                            fontSize: {
                            xs: 150,
                            sm: 250, 
                            },
                            color: '#6a6a6a',
                        }}
                        />
                            <h5>{accountFiltered.user}</h5>
                        </div>
                        <div className="grid justify-items-start gap-2 p-10">
                            <h5>Descripcion</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugit esse consequatur quibusdam. Delectus, vel doloribus porro illo fugiat vero ducimus cupiditate, sed quae accusamus minus? Facilis vitae nulla cupiditate?</p>
                        </div>
                        <div className="grid justify-items-start align-start w-full p-10 gap-4">
                            <div className="flex justify-start items-center gap-2">
                                <h5 className="m-0">Videos subidos</h5>
                                <Link href={`/upploadVideo/${accountFiltered.email}`} className="no-underline">
                                    <AddBoxIcon
                                        sx={{
                                            fontSize: 30,
                                            color: 'black',
                                            '&:hover': {
                                                color: '#2a41ff', 
                                            },
                                            transition: 'color 0.3s',
                                        }}
                                    />
                                </Link>
                            </div>
                            <div className="grid justify-items-center align-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {publicationsFiltered.map((item) => (
                                    <VideoCard key={item.id} item={{...item, type: 'edit'}} />
                                ))}
                            </div>
                        </div>
                        <div className="grid justify-items-start align-start w-full p-10 gap-4">
                            <div className="flex justify-start items-center gap-2">
                                <h5 className="m-0">Videos adquiridos</h5>
                                <Link href={`/courses`} className="no-underline">
                                    <AddBoxIcon
                                        sx={{
                                            fontSize: 30,
                                            color: 'black',
                                            '&:hover': {
                                                color: '#2a41ff', 
                                            },
                                            transition: 'color 0.3s',
                                        }}
                                    />
                                </Link>
                            </div>
                            <div className="grid justify-items-center align-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {boughtsFiltered.map((item) => (
                                    <VideoCard key={item.id} item={{...item, type: 'see'}} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
    );
};

export default Account;
