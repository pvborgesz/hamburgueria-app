import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native';
import Colors from '../constants/Colors';
import Checkbox from 'expo-checkbox';

const RegisterUserCard: React.FC = () => {
    const [isChecked, setIsChecked] = useState(false)

    return (
    <>
        <ImageBackground source={require('../assets/images/splash.png')} style={styles.RegisterCard} blurRadius={5}>
            <View style={styles.container}>
                <View style={styles.separator}>
                    <View style={styles.title}>
                        <Text style={styles.title}>Cadastro</Text>
                        <Text style={{color: Colors.branco}}>Informe seus dados para continuar com o seu cadastro.</Text>
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.title}>Nome</Text>
                        <TextInput style={styles.input} placeholder="Nome" />
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.title}>Sobrenome</Text>
                        <TextInput style={styles.input} placeholder="Sobrenome" />
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.title}>Email</Text>
                        <TextInput style={styles.input} placeholder="Email" />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.title}>CPF</Text>
                        <TextInput style={styles.input} placeholder="CPF" />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.title}>Senha</Text>
                        <TextInput style={styles.input} placeholder="Senha" />

                    </View>
                    <View style={styles.field}>
                        <Text style={styles.title}>Confirmar Senha</Text>
                        <TextInput style={styles.input} placeholder="Senha" />
                    </View>

                    
                    <View style={styles.checkboxContainer}>
                        <Checkbox
                            value={isChecked}
                            onValueChange={setIsChecked}
                            color={isChecked ? Colors.laranjaEscuro : Colors.branco}
                            style={styles.checkbox}
                        />
                        <Text style={styles.checkboxTitle }>
                            Concordo com os termos de uso.
                        </Text>
                    </View>

                    <View style={styles.submitButton}>
                        <Text style={styles.title}> Cadastrar </Text>
                    </View>
                </View>
            </View>
        </ImageBackground>

    </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: "5%",
        backgroundColor: 'rgba(56, 20, 0, 0.55)',
        // backdrop-filter: blur(15px),
        backdropFilter: 'blur(15px)',
        borderRadius: 10,
        padding: 20,
        gap:20,
        width: '80%',
        height: '100%',
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.branco,
        borderRadius: 5,
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        margin: 8,
    },
    RegisterCard: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    field: {
        flexDirection: 'column',
        gap: 10,
    },
    separator: {
        marginVertical: 30,
        height: '100%',
        width: '100%',
        gap: 10,
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
        gap: 10,
    },
    checkbox: {
        alignSelf: "center",
    },
    checkboxTitle: {
        color: Colors.branco,
        fontSize: 16,
        fontWeight: 'bold',
    },
    submitButton: {
        backgroundColor: Colors.laranjaEscuro,
        borderRadius: 5,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        // width: '100%',
        // height: '10%',
    },


});



export default RegisterUserCard;