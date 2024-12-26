import React, {useState} from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from '../styles/Styles';
import CodeIndicator from "../components/CodeIndicator";
import ButtonGrid from "../components/ButtonGrid";

const Login = ({ navigation }) => {
    const maxCodeLength = 4;
    const [code, setCode] = useState('');

    const handleCodeChange = (number) => {
        switch (number) {
            case '<X':
                if (code.length > 0) { setCode(code.slice(0, -1)) };
                break;
            default:
                if (code.length < maxCodeLength) { setCode(code + number) };
            }
    };


    return (
        <View style={styles.background}>

            <CodeIndicator codeLength={code.length} maxCodeLength={maxCodeLength} />
            <ButtonGrid onChange={handleCodeChange} />

            <TouchableOpacity  onPress={() => navigation.navigate('MainScreen')}>
                <Text style={styles.h2}>MainScreen</Text>
            </TouchableOpacity>

        </View>
    );
}

export default Login;
