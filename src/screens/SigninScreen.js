import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';

const SigninScreen = function () {

    const { state, signin, clearErrorMessage } = useContext(Context);

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearErrorMessage}
            />
            <AuthForm headerText='Sign In to Tracker' errorMessage={state.errorMessage} submitButtonText='Sign In' onSubmit={signin} />
            <NavLink text='New to Tracker? Sign up.' routeName='Signup' />
        </View>
    );
};

SigninScreen.navigationOptions = function () {
    return {
        headerShown: false
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 225
    }
});

export default SigninScreen;