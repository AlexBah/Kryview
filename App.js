import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, Image, TouchableWithoutFeedback } from 'react-native';

export default function App() {
  const HandleTextPress = () => console.log('text pressed');
  const HandleButtonPress = () => Alert.alert('Название','Сообщение',[
    {text: 'Да', onPress: () => console.log('Yes')},
    {text: 'Отмена', onPress: () => console.log('No')}
  ]);
  const HandleButtonPress2 = () => Alert.prompt('Название','Сообщение', text => console.log(text));

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headertext}> KryView </Text>
      </View>
      <View style={styles.schedule}>
        
      </View>
      <View style={styles.krypto}>
        <Text style={styles.headertext}>
          {'https://www.binance.com/ru/price/bitcoin//html/body/div[3]/section/div/div[2]/div[4]/div[1]/div[1]'} 
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flex: 1,
    backgroundColor: '#222',
    borderWidth: 3,
    borderRadius: 5,
    margin: 2,
    borderColor: '#242',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headertext: {
    fontSize: 30,
    color: '#eee',
  },
  schedule: {
    flex: 1,
    backgroundColor: '#222',
    borderWidth: 3,
    borderRadius: 5,
    margin: 2,
    borderColor: '#242',
    alignItems: 'center',
    justifyContent: 'center',
  },
  krypto: {
    flex: 4,
    backgroundColor: '#222',
    borderWidth: 3,
    borderRadius: 5,
    margin: 2,
    borderColor: '#242',
  },
});
