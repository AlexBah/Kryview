import React from "react";
import { Text, View, Image, TextInput } from "react-native";
import Icon from '@expo/vector-icons/AntDesign';
import styles from 'github.com/AlexBah/krypsy/styles/Styles'

export default class Register extends React.Component {

    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={styles.background}>

                <Image source={require('../images/adaptive-icon.png')}
                    style={styles.frontPicture} />

                <Text style={styles.h1}>Registration</Text>
                <Text style={styles.h2}
                >Enter your registration information</Text>

                <View style={styles.inputBorder}>
                    <Icon name="mail" size={23} style={styles.inputIcon}/>
                    <TextInput style={styles.inputText} 
                        placeholder="mail" placeholderTextColor={styles.inputText.color}/>
                </View>

                <View style={styles.inputBorder}>
                    <Icon name="lock" size={23} style={styles.inputIcon}/>
                    <TextInput style={styles.inputText} 
                        placeholder="password" placeholderTextColor={styles.inputText.color}/>
                </View>

                <View style={styles.inputBorder}>
                    <Icon name="lock" size={23} style={styles.inputIcon}/>
                    <TextInput style={styles.inputText} 
                        placeholder="password" placeholderTextColor={styles.inputText.color}/>
                </View>

                <View style={styles.button}>
                    <Text style={styles.inputText}>Register</Text>
                </View>

                <Text
                    onPress={()=>navigate('Login')}
                    style={styles.h2}>Login</Text>
            </View>
        )
    }
}
