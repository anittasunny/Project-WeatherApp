import React, { useState } from 'react';
import { Text, StyleSheet, TextInput, TouchableOpacity, View, Image } from 'react-native';
import auth from '@react-native-firebase/auth';

const Registration = ({ navigation }) => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignup() {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User account created & signed in!');
                navigation.replace('HomeScreen');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                    navigation.replace('HomeScreen');
                }

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
                <Text style={styles.logotxt}></Text>
            </View>
            <View style={styles.LoginField}>
                <Text style={styles.header}>
                    REGISTER
                </Text>
                <View style={styles.TxtInput}>
                    <Text style={styles.InputTitle}>Name        </Text>
                    <TextInput
                        style={styles.TxtInputField}
                        placeholder={'First Name'}
                        placeholderTextColor="#fff"
                        onChangeText={text => setFname(text)}
                        value={fname}
                    />
                </View>
                <View style={styles.TxtInput}>
                    <Text style={styles.InputTitle}>                   </Text>
                    <TextInput
                        style={styles.TxtInputField}
                        placeholder={'Last Name'}
                        placeholderTextColor="#fff"
                        onChangeText={text => setLname(text)}
                        value={lname}
                    />
                </View>
                <View style={styles.TxtInput}>
                    <Text style={styles.InputTitle}>Email         </Text>
                    <TextInput
                        style={styles.TxtInputField}
                        placeholder={'example@domain.com'}
                        placeholderTextColor="#fff"
                        onChangeText={text => setEmail(text)}
                        value={email}
                    />
                </View>
                <View style={styles.TxtInput}>
                    <Text style={styles.InputTitle}>Password </Text>
                    <TextInput
                        style={styles.TxtInputField}
                        placeholder="Password"
                        placeholderTextColor="#fff"
                        secureTextEntry
                        onChangeText={text => setPassword(text)}
                        value={password}
                    />
                </View>
                <TouchableOpacity style={styles.Btn}
                    onPress={() => handleSignup()}>
                    <Text style={styles.BtnText}>
                        SIGN UP
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 15 }}
                    onPress={() => navigation.replace('Login')}>
                    <Text style={styles.link}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: "#A3CDD9",
    },

    header: {
        flex: 0,
        fontWeight: "bold",
        fontSize: 30,
        color: "#fff",
        margin: 40
    },

    TxtInput: {
        flexDirection: 'row',
        alignContent: 'stretch',
    },
    InputTitle: {
        color: "white",
        paddingTop: 14,
        paddingRight: 20,
        marginBottom: 10,
    },
    TxtInputField: {
        color: "white",
        backgroundColor: "#006996",
        minWidth: '60%',
        padding: 10,
        marginBottom: 10,
    },
    BtnText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 15
    },
    Btn: {
        backgroundColor: "#006996",
        minWidth: "50%",
        alignItems: 'center',
        alignContent: 'center',
        padding: 10,
        marginTop: 40,
        borderRadius: 50
    },
    logocontainer: {
        flex: 1,
        alignItems: 'center'
    },
    logo: {
        marginTop: 120,
        width: 90,
        height: 90
    },
    logotxt: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 10,
        color: "#FFF587"
    },
    LoginField: {
        flex: 2,
        alignItems: 'center',
    },
    link: {
        textDecorationLine: 'underline',
        color: "#fff"
    },
})
export default Registration;