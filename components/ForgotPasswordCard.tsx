import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

const ForgotPasswordCard: React.FC = () => {
    const [email, setEmail] = useState('');

    const onPress = () => {
        console.log("Botão de submissão pressionado")
    }
    return (
        <>
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.separator}>
                        <Text style={styles.title}>Recuperar Senha</Text>
                        <Text style={{ color: Colors.branco }}>Informe seu e-mail para continuar com a redifinição da sua senha.</Text>
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.title}>E-mail</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>

                    <TouchableOpacity style={styles.submitButton} onPress={onPress}>
                        <Text style={styles.title}> Validar Email </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: "55%",
        marginHorizontal: "10%",
        backgroundColor: 'rgba(56, 20, 0, 0.55)',
        borderRadius: 10,
        width: '80%',
        height: '100%',
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.branco,
        borderRadius: 5,
        padding: 10,
        width: 200,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.branco
    },
    separator: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
        // height: ",
        width: '80%',
        gap: 10,
    },
    field: {
        flexDirection: 'column',
        gap: 10,
    },
    submitButton: {
        backgroundColor: Colors.laranjaEscuro,
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 50,
        alignItems: 'center',
        justifyContent: 'center',
        // width: '100%',
        // height: '10%',
        marginTop: 20,
    },
    card: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '100%',
    }
})

export default ForgotPasswordCard;