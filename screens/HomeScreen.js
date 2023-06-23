import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, Text, StyleSheet, TouchableOpacity } from 'react-native'


const Home = (props) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (isFetching) {
            fetchProducts();
        }
    }, [isFetching]);
    useEffect(() => {
        if (page > 1) {
            fetchProducts();
        }
    }, [page]);

    function onRefresh() {
        setIsFetching(true);
    }
    function handleLoadMore() {
        setPage(page => page + 1);
    }


    const fetchProducts = async () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://northwind.vercel.app/api/products", requestOptions)
            .then(response => response.text())
            .then(result => {
                let response = JSON.parse(result)
                console.log(response)
                setProducts(response)
            })
            .catch(error => console.log('error', error));
        setIsFetching(false);

    }
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
        fetchProducts()
    }, [])
    function renderFooter() {
        if (isFetching) return null;
        return (
            <View
                style={{
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: '#CED0CE',
                }}>
                <ActivityIndicator animating size="large" />
            </View>
        );
    }

    return (
        <View>
            <View>
                <FlatList
                    data={categories}
                    refreshing={isFetching}
                    onEndReachedThreshold={0.1}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <View style={{ borderRadius: 10, overflow: 'hidden' }}>
                            <Text style={styles.categ}>
                                {item.name}
                            </Text>
                        </View>
                    )
                    }
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>

            <FlatList
                data={products}
                onRefresh={() => onRefresh()}
                refreshing={isFetching}
                onEndReached={() => handleLoadMore()}
                onEndReachedThreshold={0.1}
                ListFooterComponent={() => renderFooter()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => props.navigation.navigate('ProductDetails', { itemId: item.id })} style={styles.sectionContainer} >
                        <Text style={styles.name}>
                            {item.name}
                        </Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={styles.innerGrid}>
                                {item.quantityPerUnit}
                            </Text>
                            <Text style={styles.innerGrid}>
                                {item.unitPrice}
                            </Text>
                            <Text style={styles.innerGrid}>
                                {item.discontinued ? "Discounted" : ''}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )
                }
                keyExtractor={(item, index) => index.toString()}
            />
        </View >
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
        backgroundColor: "grey",
        borderRadius: 10,
        color: "white",
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