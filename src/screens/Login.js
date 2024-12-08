import React from "react";
import { Text, View, Image, TextInput } from "react-native";
import Icon from '@expo/vector-icons/AntDesign';
import styles from 'github.com/AlexBah/krypsy/styles/Styles'

export default class Login extends React.Component {

    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={styles.background}>

                <Image source={require('../images/adaptive-icon.png')}
                    style={styles.frontPicture} />

                <Text style={styles.h1}>Authorization</Text>
                <Text style={styles.h2}
                >Please enter the username and password you created during registration</Text>

                <View style={styles.inputBorder}>
                    <Icon name="mail" size={23} style={styles.inputIcon}/>
                    <TextInput style={styles.inputText} 
                        placeholder="mail" 
                        placeholderTextColor={styles.inputText.color}/>
                </View>

                <View style={styles.inputBorder}>
                    <Icon name="lock" size={23} style={styles.inputIcon}/>
                    <TextInput style={styles.inputText} 
                        placeholder="password" 
                        placeholderTextColor={styles.inputText.color}/>
                </View>

                <View style={styles.button}>
                    <Text style={styles.inputText}>Login</Text>
                </View>
                <Text
                    onPress={()=>navigate('Register')}
                    style={styles.h2}>Register</Text>

            </View>
        )
    }
}
