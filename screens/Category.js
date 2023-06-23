import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-paper';

const Home = (props) => {
    const [categories, setCategories] = useState([]);
    const [isFetching, setIsFetching] = useState(false);



    const fetchCategories = async () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://northwind.vercel.app/api/categories", requestOptions)
            .then(response => response.text())
            .then(result => {
                let response = JSON.parse(result)
                console.log(response)
                setCategories(response)
            })
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <View style={styles.sectionContainer} >
            <FlatList
                data={categories}
                refreshing={isFetching}
                onEndReachedThreshold={0.1}
                columnWrapperStyle={{
                    flex: 1,
                    justifyContent: 'space-evenly',
                }}
                numColumns={2}
                renderItem={({ item }) => (
                    <TouchableOpacity style={{ width: '40%', }} onPress={() => props.navigation.navigate('CategoryDetails', { category: item })}>
                        <Card style={{ marginVertical: 20 }}>
                            <Text style={styles.categ}>
                                {item.name}
                            </Text>
                        </Card>
                    </TouchableOpacity>
                )
                }
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    sectionContainer: {
        width: '100%',
        borderRadius: 12,
        alignSelf: 'center',
        marginBottom: 10,
        backgroundColor: "white",
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    categ: {
        padding: 10,
        margin: 10,
        marginVertical: 20,
        borderRadius: 10,
        fontWeight: 'bold',
        alignContent: 'center'
    },
    innerGrid: {
        width: '33%',
        textAlign: 'center'
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

export default Home