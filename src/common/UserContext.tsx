'use client'
import { createContext, useContext, useState } from "react";

type UserContextType = {
    user: User | null;
    setUser: (user: User | null) => void;
}

type User = {
    name: string;
    email: string;
}

export const UserContext = createContext({} as UserContextType);

export const useUserContext = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('useUser must be used within a Provider')
    }
    return context
}

export function UserProvider({ children }: { children: React.ReactNode }) {
    const initialState = { name: 'José', email: 'XXXXXXXXXXXX' }
    const [user, setUser] = useState<User | null>(initialState)

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}