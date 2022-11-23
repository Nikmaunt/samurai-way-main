import * as React from "react";
import {StoreType} from "./Store";


const StoreContext = React.createContext({} as StoreType);
// const StoreContext = React.createContext(null);

StoreContext.Provider

export type ProviderType = {
    store: StoreType,
    children: React.ReactNode
}
//
// export const Provider = (props: ProviderType) => {
//     return <StoreContext.Provider store = {props.store} >
//         {props.children}
//         < /StoreContext.Provider>
//
// }
export default StoreContext