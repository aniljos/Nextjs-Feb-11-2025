'use client'

import { Provider } from "react-redux";
import { store } from "@/redux/store";


type AppReduxProviderProps = {
    children: React.ReactNode
}
export function AppReduxProvider(props: AppReduxProviderProps){

    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )

}