'use client'
import { useUserContext } from "@/common/UserContext";
import Form from "@/components/Form";
import { toast } from "react-toastify";

const getGreeting = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
        return 'Bom dia';
    } else if (currentHour >= 12 && currentHour < 18) {
        return 'Boa tarde';
    } else {
        return 'Boa noite';
    }
}

export default function Home() {
    const { user } = useUserContext()

    return (
        <main className="w-auto min-h-screen flex flex-col flex-1">
            <div className="greeting w-full h-10">
                <h1 className="text-3xl font-bold m-0 p-0">
                    Olá {user?.name}, {getGreeting()}!
                </h1>
            </div>
            <Form className='w-full min-h-full' />
        </main >
    )
}