import React, { useState, useRef } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import PhoneInput from "../components/PhoneInput";
import styles from '../styles/Styles';

const Register = ({ navigation }) => {
    const timeout = 10000;

    const [buttonEnabled, setButtonEnabled] = useState(false);
    const [smsInputEnabled, setSmsInputEnabled] = useState(false);
    
    const [phoneNumber, setPhoneNumber] = useState('');
    const [buttonTitle, setButtonTitle] = useState('wait phone');

    const handlePhoneChange = (number) => {
        const phoneRegex = /^\+\d{1}-\d{3}-\d{3}-\d{2}-\d{2}$/;
    
        setPhoneNumber(number);
        if (phoneRegex.test(number)) {
            setButtonTitle('send sms');
            setButtonEnabled(true);
        } else {
            setButtonEnabled(false);
            setButtonTitle('invalid phone');
            setSmsInputEnabled(false);
        }
    };

    const handleSendSmsPress = (number) => {
        // to do: firebase sms 
        setSmsInputEnabled(true);
        setButtonTitle(`new sms (${timeout / 1000})`);
        setButtonEnabled(false);
        setTimeout(() => {
            setButtonEnabled(true);
            setButtonTitle('send sms');
             }, timeout);
    };
    
    return(
        <View style={styles.background}>

            <PhoneInput 
                onChange={handlePhoneChange} 
            />

            <TouchableOpacity 
                disabled={!buttonEnabled}
                style={styles.button}
                onPress={() => handleSendSmsPress(phoneNumber)}
            >
                <Text style={styles.inputText}>
                    {buttonTitle}
                </Text>
            </TouchableOpacity>

            <View style={styles.inputBorder}>
                <TextInput 
                    editable={smsInputEnabled} 
                    style={styles.inputText} 
                    placeholder="_ _ _" 
                    placeholderTextColor={styles.inputText.color}
                />
            </View>

            <TouchableOpacity  onPress={() => navigation.navigate('MainScreen')}>
                <Text style={styles.h2}>MainScreen</Text>
            </TouchableOpacity>

        </View>
    )
 }

export default Register;
