import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const styledButton = ({type, content, onPress}) => {

    const backgroundcolor = type === 'primary'? '#171a20cc': '#FFFFFFA6';
    const txtcolor = type === 'primary'? '#FFFFFF': '#171a20'

    return ( 
        <View style={styles.container}>
            <Pressable 
            style={[styles.button, {backgroundColor: backgroundcolor}]}
            onPress={()=> onPress()}
            title='button'
            >
                <Text style={[styles.btntxt, {color: txtcolor}]} >{content}</Text>
            </Pressable> 
        </View>
     );
}
 
export default styledButton;