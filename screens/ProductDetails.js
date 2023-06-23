import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Foundation from '@expo/vector-icons/Foundation';


const Home = (props) => {
    const [product, setProduct] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        if (isFetching) {
            fetchProducts();
        }
    }, [isFetching]);


    const fetchProducts = async () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://northwind.vercel.app/api/products/" + props.route.params.itemId, requestOptions)
            .then(response => response.text())
            .then(result => {
                let response = JSON.parse(result)
                console.log(response)
                setProduct(response)
            })
            .catch(error => console.log('error', error));
        setIsFetching(false);

    }

    useEffect(() => {
        fetchProducts()
    }, [])


    return (
        <View style={styles.sectionContainer} >
            <Text style={styles.name}>
                {product.name}
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.innerGrid}>
                    <MaterialCommunityIcons name={"weight"} size={25} />  {product.quantityPerUnit}
                </Text>
                <Text style={styles.innerGrid}>
                    <Feather name={"dollar-sign"} size={25} />  {product.unitPrice}
                </Text>

            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.innerGrid}>
                    <MaterialIcons name={"inventory"} size={25} />
                    {product.unitsInStock}
                </Text>
                <Text style={styles.innerGrid}>
                    <Foundation name={"burst-sale"} size={25} />
                    {product.discontinued ? "Discounted" : ''}
                </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.innerGrid}>
                    Units on order :  {product.unitsOnOrder}
                </Text>

            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.innerGrid}>
                    Units on reorder :
                    {product.reorderLevel}
                </Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    sectionContainer: {
        shadowOffset: { width: 5, height: 0 },
        width: '90%',
        borderRadius: 12,
        alignSelf: 'center',
        marginBottom: 10,
        backgroundColor: "white",
        padding: 10,
        marginVertical: 20,
        flex: 1,

    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10
    },
    categ: {
        padding: 10,
        margin: 10,
        marginVertical: 20,
        backgroundColor: "grey",
        borderRadius: 10,
        color: "white",
        fontWeight: 'bold',
        alignContent: 'center'
    },
    innerGrid: {
        width: '50%',
        textAlign: 'flex-start',
        flexDirection: 'row',
        fontSize: 18,
        marginVertical: 20,
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