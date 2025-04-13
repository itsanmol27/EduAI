"use client"
import { useState } from "react";
import {UserContext, UserType} from "./UserContext"

export const UserContextProvider = ({children}:{children:React.ReactNode}) => {

    const [user, setUser] = useState<UserType | null>(null);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}