import React, {useState} from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from '../styles/Styles';
import PhoneInput from "../components/PhoneInput";
import CodeIndicator from "../components/CodeIndicator";
import ButtonGrid from "../components/ButtonGrid";

const MainScreen = ({ navigation }) => {

    return (
        <View style={styles.background}>

            <Text style={styles.h2}>MainScreen</Text>

            <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
                <Text style={styles.h2}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => navigation.navigate('Register')}>
                <Text style={styles.h2}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => navigation.navigate('NewLogin')}>
                <Text style={styles.h2}>NewLogin</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => navigation.navigate('MainScreen')}>
                <Text style={styles.h2}>MainScreen</Text>
            </TouchableOpacity>

        </View>
    );
}

export default MainScreen;
