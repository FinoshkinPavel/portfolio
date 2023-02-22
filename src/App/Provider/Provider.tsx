import React, {createContext, ReactNode, useContext} from 'react';

type ProviderPropsType = {
    children: ReactNode
    open: boolean
    setOpen: (value: boolean) => void
}

export const Context = createContext({
    open: false,
    setOpen: (value: boolean) => {}
})

export const Provider: React.FC<ProviderPropsType> = (props) => {
    const {children, setOpen, open} = props

    return (
        <Context.Provider value={{open, setOpen}}>
            {children}
        </Context.Provider>
    );
};
