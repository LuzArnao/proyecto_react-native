import { URL_API, URL_AUTH_SIGNUP } from "../../constants/Database";

export const SIGNUP = "SIGNUP"
export const LOGIN = "LOGIN"

export const signUp = (email, password) => {
    console.log(email, password)
    return async (dispatch) => {
        try {
            const response = await fetch(URL_AUTH_SIGNUP, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true,
                }),
            });

            const responseData = await response.json();
            console.log(responseData);
            dispatch({
                type: SIGNUP, 
                token: responseData.idToken,
                userId: responseData.localId
            });
        } catch (error) {
            console.log(error)
            
        }
    }
}