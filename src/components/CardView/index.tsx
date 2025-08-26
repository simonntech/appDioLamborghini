import React from "react";
import { View, Text, Button, Image } from 'react-native';
import { styles } from "./styles";

import Logo from '../../../assets/logo.png';

export default function CardView() {

    const renderLogoBox = () => (
        <View style={styles.logoContainer}>
            <Image style={styles.imgLogo} source={Logo} />
        </View>
    )

    return (
        <View style={styles.imageContainer}>
            {renderLogoBox()}
        </View>
    )
}