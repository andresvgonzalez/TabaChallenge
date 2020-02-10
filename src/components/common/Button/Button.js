import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';

const Button = ({ loading, btnTitle, onPress }) => {

    return (
    	<TouchableOpacity style={{ width: '100%' }} onPress={onPress}>
    		<View style={styles.container}>
            { loading ? (
                <Text style={styles.btnText}>Cargando ...</Text>
            ) : (
                <Text style={styles.btnText}>{btnTitle}</Text>
            )}
        </View>
    	</TouchableOpacity>
    );
}   

export default Button;
