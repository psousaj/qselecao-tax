'use client'
import { useUserContext } from "@/common/UserContext";
import FormComponent from "@/components/FormComponent";

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
        <main className="w-auto h-screen flex flex-col">
            <div className="greeting w-full h-14 flex justify-start items-center">
                <h1 className="text-3xl h-full font-bold m-0 p-0">
                    Olá {user?.name}, {getGreeting()}!
                </h1>
            </div>
            <FormComponent className="w-full flex-1" />
        </main >
    )
}
