import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#8257E5",
        justifyContent: 'center',
        padding: 48
    },
    content: {
        flex: 1,
        justifyContent: "center",
    },
    title: {
        fontFamily: "Archivo_700Bold",
        color: "#FFF",
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 100,
    },
    description: {
        marginTop: 24,
        color: "#d4c2ff",
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 240
    },
    okButton: {
        marginVertical: 40,
        backgroundColor: "#04d361",
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6
    },
    okButtonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Archivo_700Bold'
    }
})

export default styles;