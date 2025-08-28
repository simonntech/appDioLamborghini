import { useEffect, useState } from "react";
import React from "react";
import { View, Text, Button, Image } from 'react-native';
import { styles } from "./styles";

import Logo from '../../../assets/logo.png';
import Divider from "../Divider";
import { CAR_ASSETS_BASE_URL } from "../../constants/car";
import BuyButton from "../BuyButton";
import { CarModel } from "./props";
import { loadCarData } from "./actions";

export default function CardView() {
    const [carData, setCarData] = useState<CarModel | null>( null);

    useEffect(() => {
        (async () => {
            await loadCarData(1, setCarData);
        })();
    }, [])

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
            source={{ uri: `${CAR_ASSETS_BASE_URL}1.png` }}
        />
    )

    const renderPriceControls = () => (
        <View style={styles.priceLabelContainer}>
            <Button
                title="<"
                color={"#b3a701ff"}
                onPress={() => { }}
            />
            <Text style={styles.priceLabel}>Valor</Text>
            <Button
                title=">"
                color={"#b3a701ff"}
                onPress={() => { }}
            />
        </View>
    )

    return (
        <View style={styles.imageContainer}>
            {renderLogoBox()}

            <Divider />

            {renderCardDetails()}
            {renderCarImage()}

            <Divider />
            <BuyButton />
            {renderPriceControls()}
        </View>
    )
}