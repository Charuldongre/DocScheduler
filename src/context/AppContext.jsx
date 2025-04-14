import { createContext } from 'react';
import { doctors } from '../assets/assets';

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const currencySymbol ='$';

    const value = {
        doctors,
        currencySymbol
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;

// File: AppContext.js
// Purpose: To provide a global context for the application, allowing shared data (like the doctors list) to be accessed by any component in the tree.
// Key Parts:
// createContext():
// Creates the AppContext, which acts as a container for shared data.
// AppContextProvider Component:
// Wraps child components and provides the context value (in this case, the doctors list) to them.
// value contains all the data or functions you want to make globally accessible.