import React from "react";
import { View, Text, Button, Image } from 'react-native';
import { styles } from "./styles";

import Logo from '../../../assets/logo.png';
import Divider from "../Divider";

export default function CardView() {

    const renderLogoBox = () => (
        <View style={styles.logoContainer}>
            <Image style={styles.imgLogo} source={Logo} />
        </View>
    );

    const renderCardDetails = () => (
        <View style={{ alignItems: 'center' }}>
            <Text style={styles.carBrand}>Lamborghini</Text>
            <Text style={styles.carName}>Model</Text>
        </View>
    )

    const renderCarImage = () => (
        <Image 
            style={styles.image}
            source={{uri: }}
        />
    )

    return (
        <View style={styles.imageContainer}>
            {renderLogoBox()}
            <Divider />
            {renderCardDetails()}
        </View>
    )
}