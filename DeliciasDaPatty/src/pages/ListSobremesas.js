import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

function ListSobremesas() {    
    return (
        <View style={{flex: 1, 
                      padding: 10,
                      //justifyContent: 'space-between',                     
                      //borderColor: 'blue',
                      //borderWidth: 2,
                      }}>

            <View style={{ flexDirection: 'row',
                           height: 130,
                           padding: 10,
                           alignItems: 'center',
                           borderColor: '#FFFFFF',
                           borderRadius: 10,
                           borderWidth: 2,
                           backgroundColor: '#DEA9A5'
                        }}>

                <View style={{ 
                           width: 100,
                           height: 100,
                           borderColor: 'blue',
                           borderWidth: 2,
                           borderRadius: 50}}>

                    {/* <Image style={{ 
                                    width: '100%',
                                    height: '100%' }} source={require('../../assets/imgs/img_bolo.jpg')} /> */}

                </View>

                    <View style={{ flex: 2,//width: '70%',
                            height: 100, 
                            borderColor: 'green',
                            borderWidth: 1}}>

                    </View>
            </View>

           
           
        </View>
       
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'row',
        //marginVertical: 8,
        //marginHorizontal: 16,
        //padding: 10,
        borderRadius: 15,/* 
        shadowColor: "#A0A0A0",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,    
        elevation: 5, */
        backgroundColor: '#DEA9A5',
        borderColor: 'black',
        borderWidth: 2,
        height: 300,
        width: 40
    },

    image: {
        flex: 1,
        height: 100,
        width: 100,
        borderRadius: 50,
        borderColor: '#FFFFFF',
        borderWidth: 2,
    },

    containerText: {
        flex: 2,
        flexDirection: 'column',
        alignContent: 'center',
        borderWidth: 1,
        borderColor: 'red',
        marginLeft: 10,
    },

    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#5C2D1E'
    },
});

 export default ListSobremesas;