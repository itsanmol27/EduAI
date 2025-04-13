"use client"
import { createContext } from "react";

export interface UserType{
    name: string;
    email: string;
    profilePhoto: string;
    _id: string;
}

interface UserContextType {
    user : UserType | null;
    setUser :(user:UserType) => void
}

const defaultUserContext: UserContextType = {
    user: null,
    setUser: () => {}
}

export const UserContext = createContext<UserContextType>(defaultUserContext);