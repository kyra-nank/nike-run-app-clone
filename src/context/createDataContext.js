import React, { useReducer } from 'react';

export default (reducer, actions, defaultValue) => {
    const Context = React.createContext();

    const Provider = function ({ children }) {
        const [state, dispatch] = useReducer(reducer, defaultValue);

        const boundActions = {};    // funcs used to change state
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }

        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        );
    };

    return { Context: Context, Provider: Provider };
}