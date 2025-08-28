import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: 8,
        gap: 10
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 200,
        resizeMode: 'contain'
    },
    imgLogo: {
        flex: 1,
        width: '65%',
        resizeMode: 'contain'
    },
    carBrand: {
        color: '#dfd9d0ff',
        fontWeight: '500',
        fontSize: 20,
        fontStyle: 'italic'
    },
    carName: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    image: {
        flex: 1,
        marginBottom: 10,
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})