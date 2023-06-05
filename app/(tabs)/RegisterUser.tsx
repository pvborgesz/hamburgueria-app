import React from 'react';
import { View, Text} from '../../components/Themed';
import { ImageBackground, StyleSheet } from 'react-native';
import RegisterUserCard from '../../components/RegisterUserCard';
// import { Container } from './styles';

const RegisterUser: React.FC = () => {
  return (
    <>
    <View style={styles.container}>
            <ImageBackground source={require('../../assets/images/splash.png')} style={styles.LoginCard}>
                    <RegisterUserCard/>
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
            width: '100%',
            height: '100%',
    },
    LoginCard: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 50,  // Menor margin
        marginVertical: 170,  // Menor margin
        backgroundColor: 'rgba(56, 20, 0, 0.55)',
        borderRadius: 10,
    },
    registerCard: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 50,  // Menor margin
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        // make bg transparent
        backgroundColor: 'rgba(0, 0, 0, 0)',
    }
})


export default RegisterUser