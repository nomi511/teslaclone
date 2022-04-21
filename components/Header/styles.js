import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width: '100%',
        paddingHorizontal: 5,
        left: 20,
        position: 'absolute',
        top: 50,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    logo:{
        width: 100,
        height: 20,
        resizeMode: 'contain'

    },
    menu:{

        width: 50,
        height: 50,
        resizeMode: 'contain'

    }

})

export default styles