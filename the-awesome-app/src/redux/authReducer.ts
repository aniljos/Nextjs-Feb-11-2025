//type of state
type AuthState = {
    isAuthenticated: boolean;
    username: string;
    accessToken: string;
    refreshToken: string
}

//initial state
const initialState: AuthState = {
    isAuthenticated: false,
    username: "",
    accessToken: "",
    refreshToken: ""
}

//action : {type: "login", payload: AuthState}
//action : {type: "logout"}
type AuthAction = {
    type: string;
    payload?: AuthState
}


//reducer
export const authReducer = (currentState=initialState, action: AuthAction) => {

    //process the action
    if(action.type === "login" && action.payload){
        return action.payload;
    }

    if(action.type=== "logout"){
        return initialState;
    }
    return currentState;

}
