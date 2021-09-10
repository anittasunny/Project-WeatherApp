import React, { Component, useState } from 'react';
import { Text, StyleSheet, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';



const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function handleLogin() {
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User is signed in!');
                navigation.replace('HomeScreen');
            })
            .catch(error => {
                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }


    return (
        <View style={styles.container}>
            <View style={styles.logocontainer}>
                {/* <Image style={styles.logo} source={require('../assets/logo.png')} /> */}

            </View>
            <View style={styles.LoginField}>
                <Text style={styles.header}>
                    LOGIN
                </Text>
                <TextInput
                    style={styles.UsrCred}
                    placeholder="Username"
                    placeholderTextColor="#fff"
                    onChangeText={text => setEmail(text)}
                    value={email}
                />
                <TextInput
                    style={styles.UsrCred}
                    placeholder="Password"
                    secureTextEntry
                    placeholderTextColor="#fff"
                    onChangeText={text => setPassword(text)}
                    value={password}
                />
                <View style={styles.BtnContainer}>
                    <TouchableOpacity style={styles.Btn}
                        onPress={() => handleLogin()}
                    >
                        <Text style={styles.BtnText}>
                            SIGN IN
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Btn}
                        onPress={() => navigation.replace('Register')}>
                        <Text style={styles.BtnText}>
                            SIGN UP
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 2,
        backgroundColor: "#A3CDD9",
    },
    logocontainer: {
        flex: 2,
        alignItems: 'center',
    },
    logo: {
        marginTop: 160,
        width: 90,
        height: 90,
    },
    logotxt: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 10,
        color: "#363636",
    },
    header: {
        flex: 0,
        fontWeight: "bold",
        fontSize: 30,
        color: "#fff",
        marginBottom: 40,
    },
    LoginField: {
        flex: 2,
        alignItems: 'center',
    },
    UsrCred: {
        color: "white",
        backgroundColor: "#006996",
        minWidth: '60%',
        padding: 10,
        marginBottom: 10,
    },
    BtnText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 15,
    },
    Btn: {
        backgroundColor: "#006996",
        width: "45%",
        alignItems: 'center',
        alignContent: 'center',
        padding: 10,
        margin: 5,
        borderRadius: 50,
    },
    BtnContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: "60%",
        alignItems: 'center',
    }
})
export default LoginScreen;