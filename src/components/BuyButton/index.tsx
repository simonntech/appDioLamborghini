import { View, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';

export default function BuyButton() {
    return (
        <View >
            <TouchableOpacity style={[styles.container,styles.button]}>
                <AntDesign
                    name='shoppingcart'
                    size={20}
                />
                <Text style={styles.buttonText}>Comprar</Text>
            </TouchableOpacity>
        </View>
    )
}