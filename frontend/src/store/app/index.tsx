import { createContext, FC } from "react";

interface IAppContext {
    device: string;
}
interface IAppProvider {
    children?: JSX.Element;
    state?: IAppContext;
}

const initialState = {
    device: "desktop",
};

export const AppContext = createContext<IAppContext>(initialState);

const AppProvider: FC<IAppProvider> = ({ children, state }) => {
    return (
        <AppContext.Provider value={state ? state : initialState}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
