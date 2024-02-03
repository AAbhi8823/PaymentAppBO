import { createContext, useState, FC, ReactNode } from 'react';

interface menuProviderProps {
    children: ReactNode;
}

export const MenuContext = createContext();

const MenuProvider: FC<menuProviderProps> = (props) => {
    const { children } = props;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <MenuContext.Provider value={{ isMobileMenuOpen, setIsMobileMenuOpen }}>
            {children}
        </MenuContext.Provider>
    );
};

export default MenuProvider 