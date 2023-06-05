import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native';
import Checkbox from 'expo-checkbox';
import Colors from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';

const LoginCard: React.FC = () => {
    const [isChecked, setIsChecked] = useState(false)
    const navigation = useNavigation();

    const redirectToRegisterUser = () => {
        // add to navigation stack the RegisterUser component
        // navigation.navigate('RegisterUser'); // RegisterUser is the name of the component
    }

  return (
  <>
    <View style={styles.container}>
        <View style={styles.separator}>
            <Text style={styles.title}>Email</Text>
            <TextInput
                placeholder='Digite seu e-mail de acesso'
                placeholderTextColor={Colors.branco}
                style={styles.input}

            />

            <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder='Digite sua senha de acesso'
                    placeholderTextColor={Colors.branco}
                    style={styles.input}

                />

            {/* add a checkbox */}
            <View style={styles.checkboxContainer}>
                <Checkbox
                    value={isChecked}
                    onValueChange={setIsChecked}
                    color={isChecked ? Colors.laranjaEscuro : Colors.branco}
                    style={styles.checkbox}
                />
                <Text style={styles.checkboxTitle }>
                    Manter conectado
                </Text>

                <Text style={styles.forgotPassword}>
                    Redefina sua senha
                </Text>
            </View>
            
            <View style={styles.secondaryItens}>
               <Text style={styles.checkboxTitle}> Não possui conta? </Text>
               <Text style={styles.forgotPassword } onPress={redirectToRegisterUser}
               >
                    Cadastre-se
                </Text>
            </View>
        </View>

        <View style={styles.submitButton}>
            <Text style={styles.title}> Entrar </Text>
        </View>
    </View>
  </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.branco,
        },
    separator: {
        // marginVertical: 30,
        // height: '100%',
        // width: '100%',
        gap: 15,
        },
    input: {
        borderWidth: 1,
        borderColor: Colors.branco,
        borderRadius: 5,
        padding: 10,
    },
    checkbox: {
        // ColorValue: Colors.branco,
    },
    checkboxContainer: {
        flexDirection: 'row',
        color: Colors.branco,
        // justifyContent: 'space-evenly',
        gap: 10,
    },
    checkboxTitle: {
        color: Colors.laranjaEscuro,
        marginTop: 2,
    },
    forgotPassword: {
        color: Colors.branco,
        marginTop: 2,
        textDecorationLine: 'underline',
    },
    secondaryItens: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    submitButton: {
        marginTop: 20,
        backgroundColor: Colors.laranjaEscuro,
        borderRadius: 5,
        padding: 10,
        width: 200,
        alignItems: 'center',
    }
});

export default LoginCard;