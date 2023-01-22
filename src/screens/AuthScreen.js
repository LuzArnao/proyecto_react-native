import { 
    KeyboardAvoidingView, 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    Button, 
    Alert, 
    ImageBackground, 
    Dimensions,
} from 'react-native'
import React, { useState, useCallback, useReducer, useEffect } from 'react'
import { COLORS } from '../constants/colors'
import { useDispatch } from 'react-redux'
import { signUp } from '../store/actions/auth.action'
import Input from "../components/Input"
import { backgroundPrincipal } from '../constants/img'

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE"

export const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const formReducer = (state, action) => {
    console.log(action)
    if(action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value,
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid,
        };
        let updatedFormIsValid = true
        for(const key in updatedValidities){
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key]
        }
        return {
            inputValues: updatedValues,
            inputValidities: updatedValidities,
            formIsValid: updatedFormIsValid,
        };
    };
    return state 
};

const AuthScreen = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState(null);

    useEffect(() => {
        if(error){
          Alert.alert('errorcito', error, [{text: "OK"}])
        }
      }, [error])

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            email: "",
            password: "",
        },
        inputValidities: {
            email: false,
            password: false,
        },
        formIsValid: false,
    });

    const handleSignUp = () => {
        //dispatch(signup(email, password))
        if (formState.formIsValid) {
            dispatch(
            signUp(formState.inputValues.email, formState.inputValues.password)
            )
        } else {
            Alert.alert("formulario invalido", "Ingresa email y usuario valido", [
            { text: "ok" },
            ])
        }
    }

    const onInputChangeHandler = useCallback(
        (inputIdentifier, inputValue, inputValidity) => {
          console.log(inputIdentifier, inputValue, inputValidity)
          dispatchFormState({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier,
          })
        },
        [dispatchFormState]
      )

  return (
    <KeyboardAvoidingView
    behavior='padding'
    keyboardVerticalOffset={50} 
    style={styles.screen}
    >

        <ImageBackground source={backgroundPrincipal} style={styles.background} >
            <View style={styles.container}>
                <Text style={styles.title}>Bienvenido</Text>
                <View>
                    <Input
                        style={styles.input}
                        id="email"
                        keyboardType='email-address'
                        placeholder='Email'
                        required
                        email
                        autoCapitalize='none'
                        errorText="Por Favor ingrese mail valido"
                        onInputChange={onInputChangeHandler}
                        initialValue=""
                    />
                    <Input
                        style={styles.input}
                        id="password"
                        placeholder='Password'
                        keyboardType='default'
                        required
                        password
                        secureTextEntry
                        minlenght={6}
                        autoCapitalize='none'
                        errorText="Por favor ingrese una contrasena valida"
                        onInputChange={onInputChangeHandler}
                        initialValue=""
                    />
                </View>
                <View style={styles.footer}>
                    <View style={styles.button}>
                        <Button
                            title={ signUp ? "REGISTRARME" : "LOGIN"}
                            color={COLORS.primary}
                            onPress={handleSignUp}
                        />
                    </View>
                </View>
            </View>
        </ImageBackground>
    </KeyboardAvoidingView>
  )
}

export default AuthScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center", 
    },
    background: {
        position: 'absolute', 
        left: 0, 
        top: 0, 
        height: screenHeight, 
        width: screenWidth,
    },
    container: {
        width: '90%',
        maxWidth: 400,
        height: '40%',
        maxHeight: 250,
        padding: 12,
        margin: 20,
        marginTop: 170,
    },
    footer: {
        marginTop: 42,
    },
    button: {
        marginBottom: 8,
    },
    title: {
        fontSize: 40,
        fontFamily: 'Tillana',
        color: 'white',
        position: 'absolute'
    },
    input: {
        height: 40,
        marginTop: 12,
        borderWidth: 1,
        backgroundColor: '#FFFF',
        padding: 10,
    }
})