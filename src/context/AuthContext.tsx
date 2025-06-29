'use client'

import { User } from "@/types/types";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
    authUser: User | null;
    setAuthUser: React.Dispatch<React.SetStateAction<User | null>>;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
    authUser: null,
    setAuthUser: () => { },
    loading: false
})

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [authUser, setAuthUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const stored = localStorage.getItem("user");
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                setAuthUser(parsed);
            } catch (e) {
                console.error("Failed to parse user from localStorage:", e);
            }
        }
        setLoading(false)
    }, []);

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser, loading }}>
            {children}
        </AuthContext.Provider>
    )
}