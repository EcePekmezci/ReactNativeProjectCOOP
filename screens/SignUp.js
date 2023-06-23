/**
 * Sample React Native SignUp
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



function SignUp(props) {

    const isDarkMode = useColorScheme() === 'dark';
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [userName, setUserName] = useState();


    isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    }
    makeSum = () => {
        if (email) {
            if (isValidEmail(email)) {
                if (userName) {
                    if (pass) {
                        props.navigation.navigate("HomeScreen")

                    }
                    else {
                        alert("Please enter password")
                    }
                }
                else {
                    alert("Please enter username")
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
                            Register
                        </Text>
                    </View>
                    <Text>
                        Email
                    </Text>
                    <TextInput onChangeText={(num) => setEmail(num)} value={email} keyboardType='email-address' style={styles.myInput} />
                </View>
                <View style={styles.container}>
                    <Text>
                        Username
                    </Text>
                    <TextInput onChangeText={(num) => setUserName(num)} value={userName} style={styles.myInput} />
                </View>
                <View style={styles.container}>
                    <Text>
                        Password
                    </Text>
                    <TextInput onChangeText={(num) => setPass(num)} value={pass} secureTextEntry={true} style={styles.myInput} />
                </View>
                <TouchableOpacity onPress={makeSum} style={styles.sumBtn}>
                    <Text style={styles.sumBtnTxt}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate("Login")} style={styles.register}>
                    <Text>
                        Already have an account! Login here.
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

export default SignUp;
