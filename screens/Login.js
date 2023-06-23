/**
 * Sample React Native Login
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React, { useState } from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';



function Login(props) {

    const isDarkMode = useColorScheme() === 'dark';
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();

    isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    }
    makeSum = () => {
        if (email) {
            if (isValidEmail(email)) {
                if (pass) {
                    props.navigation.navigate("HomeScreen")
                }
                else {
                    alert("Please enter password")
                }
            }
            else {
                alert("email is invalid")
            }

        }
        else {
            alert("Please enter email")
        }
    }
    return (
        <SafeAreaView>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
            >
                <View style={styles.container}>
                    <View style={styles.sumCon}>
                        <Text style={styles.sumText}>
                            Welcome Back
                        </Text>
                    </View>
                    <Text>
                        Email
                    </Text>
                    <TextInput onChangeText={(num) => setEmail(num)} value={email} keyboardType='email-address' style={styles.myInput} />
                </View>
                <View style={styles.container}>
                    <Text>
                        Password
                    </Text>
                    <TextInput onChangeText={(num) => setPass(num)} value={pass} secureTextEntry={true} style={styles.myInput} />
                </View>
                <TouchableOpacity onPress={makeSum} style={styles.sumBtn}>
                    <Text style={styles.sumBtnTxt}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")} style={styles.register}>
                    <Text>
                        Don't have an account yet, Register here!
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    register: {
        alignItems: "center",
        marginHorizontal: 20,
        paddingVertical: 10
    },
    container: {
        padding: 10,
        paddingHorizontal: 20
    },
    sumBtn: {
        alignItems: "center",
        padding: 10,
        backgroundColor: "red",
        margin: 20,
        borderRadius: 10
    },
    sumText: {
        fontSize: 30,
        marginVertical: 20
    },
    sumBtnTxt: {
        fontWeight: 'bold',
        color: "white",
        fontSize: 20
    },
    sumCon: {
        justifyContent: "center",
        alignItems: 'center'
    },
    myInput: {
        backgroundColor: 'silver',
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default Login;
