import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = function ({ navigation }) {

    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearErrorMessage}
            />
            <AuthForm headerText='Sign Up for Tracker' errorMessage={state.errorMessage} submitButtonText='Sign Up' onSubmit={signup} />
            <NavLink text='Already have an account? Sign in.' routeName='Signin' />
        </View>
    );
};

SignupScreen.navigationOptions = function () {
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

export default SignupScreen;