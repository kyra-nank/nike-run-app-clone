import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { MaterialIcons } from '@expo/vector-icons';


const AccountScreen = function () {
    const { signout } = useContext(AuthContext);

    return (
        <>
            <SafeAreaView forceInset={{ top: 'always' }}>
                <Text style={{ fontSize: 48 }}>AccountScreen</Text>
                <Spacer>
                    <Button title='Sign Out' onPress={signout} />
                </Spacer>
            </SafeAreaView>
        </>
    );
}

AccountScreen.navigationOptions = {
    title: 'Profile',
    tabBarIcon: <MaterialIcons name='account-circle' size={20} />
};

const styles = StyleSheet.create({});

export default AccountScreen;