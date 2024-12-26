import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/Styles';

const CodeButton = ({ value, onPress }) => {

    const handlePress = (value) => {
        switch (value) {
            case '':
                break;
            default:
                onPress(value);
            }
    };

    return (
        <TouchableOpacity 
            style={[styles.gridButton, value == '' ? styles.gridButtonEmpty : {}]}
            onPress={() => handlePress(value)}
        >
            <Text style={styles.h2}>{value}</Text>
        </TouchableOpacity>
    );
};

export default CodeButton;
