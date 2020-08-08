import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';
import giveClassesBgImage from '../../assets/images/give-classes-background.png'
import { useNavigation } from '@react-navigation/native';


const GiveClasses = () => {
    const {goBack} = useNavigation();

    function handleNavigationGoBack(){
        goBack();
    }
    
    return(
        <View style={styles.container}>
            <ImageBackground 
                resizeMode="contain" 
                source={giveClassesBgImage} 
                style={styles.content}
            >
                <Text style={styles.title}>Quer ser um Proff? </Text>
                <Text style={styles.description}>Para começar, você precisa se cadastrar como professor na nossa plataforma web.</Text>
            </ImageBackground>

            <RectButton onPress={handleNavigationGoBack} style={styles.okButton}>
                <Text style={styles.okButtonText}>Tudo bem</Text>
            </RectButton>
        </View>
    )
}

export default GiveClasses;