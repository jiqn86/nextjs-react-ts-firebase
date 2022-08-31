import React, { createContext, ReactNode, useContext, useEffect, useState} from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from "../config/firebas";

const AuthContext = createContext<any>({});
export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({children}: {children: ReactNode}) => {

    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName
                })
            } else {
                setUser(null);
            }
            setLoading(false)
            console.log(user)
        })
        return () => unsubscribe();
    }, []);

    
    const signup = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = async () => {
        setUser(null)
        await signOut(auth)
    } 


    return <AuthContext.Provider value={{user, signup, login, logout}}>{loading ? null : children}</AuthContext.Provider>
}