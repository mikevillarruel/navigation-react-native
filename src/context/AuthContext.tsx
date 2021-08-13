import React, { useReducer } from "react";
import { createContext } from "react";
import { authReducer } from './authReducer';

// Define how it looks, and what information has on it.
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// Initial State
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
};

// We use it to say to React how it looks and what exposes the context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
}

// Create context
export const AuthContext = createContext({} as AuthContextProps);

// State Provider Component
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const signIn = () => {
        dispatch({ type: 'signIn' });
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
        }}>
            {children}
        </AuthContext.Provider>

    )
}