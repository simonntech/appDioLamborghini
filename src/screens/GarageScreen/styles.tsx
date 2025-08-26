import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#1e1e20',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cameraBox: {
        position: 'relative',
        borderWidth: 2,
        borderColor: '#f5e89fff',
        width: 350,
        height: '90%',
        overflow: 'hidden',
        borderRadius: 14
    },
    triangleCorner: {
        position:'absolute',
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderTopWidth: 20,
        borderTopColor: '#f5e89fff',
        borderRightWidth: 20,
        borderRightColor: 'transparent',
    },
    topRight: {
        top: 0,
        right: 0,
        transform: [{rotate: '90deg'}]
    },
    bottomLeft: {
        bottom: 0,
        transform: [{rotate: '-90deg'}]
    },
    bottomRight: {
        bottom: 0,
        right: 0,
        transform: [{rotate: '180deg'}]
    }
})