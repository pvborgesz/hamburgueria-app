import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import ForgotPasswordCard from '../components/ForgotPasswordCard';
import Colors from '../constants/Colors';
const ForgotPassword: React.FC = () => {

    return (
        <>
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/splash.png')} style={{ width: '100%', height: '100%' }} >
                    <ForgotPasswordCard />
                </ImageBackground>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',

    },
});


export default ForgotPassword;