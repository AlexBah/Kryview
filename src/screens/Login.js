import React from "react";
import { Text, View, Image, TextInput } from "react-native";
import Icon from '@expo/vector-icons/AntDesign';

export default class Login extends React.Component {

    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:"#FFF", height:"100%"}}>
                <Image source={require('../images/adaptive-icon.png')}
                style={{width:"100%",height:"43%"}} />
                <Text style={{
                    fontSize:30,
                    fontFamily:"SemiBold",
                    alignSelf:"center",
                }}
                >Авторизация</Text>

                <Text style={{
                    fontFamily:"SemiBold",
                    marginHorizontal:55,
                    alignSelf:"center",
                    marginTop:5,
                    opacity:0.4
                }}
                >Введите логин и пароль, который создавали ранее при регистрации.</Text>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"#880000",
                    borderRadius:23,
                    paddingVertical:2 
                }}>
                    <Icon name="mail" color="#880000" size={24}/>
                    <TextInput style={{paddingHorizontal:10}} />
                </View>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#880000",
                    borderRadius:23,
                    paddingVertical:2 
                }}>
                    <Icon name="lock" color="#880000" size={24}/>
                    <TextInput style={{paddingHorizontal:10,
                        placeholder:"Password"}} />
                </View>

                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#880000",
                    paddingVertical:2,
                    borderRadius:23,
                }}>
                    <Text style={{color:"white",
                        fontFamily:"SemiBold"
                        }}>Войти</Text>
                </View>
                <Text
                    onPress={()=>navigate('Register')}
                    style={{
                        alignSelf:"center",
                        color:"#888888",
                        fontFamily:"SemiBold",
                        paddingVertical:10,
                    }}>Зарегистрироваться</Text>
            </View>
        )
    }
}
