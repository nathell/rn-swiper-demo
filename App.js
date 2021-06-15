import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-swiper';

const Card = (props) => {
  return (
    <View style={styles.card}>
      <Text>Card {props.number}</Text>
    </View>
  );
}

export default function App() {
  const [pressed, press] = React.useState(false);
  const onPress = () => press(true);
  const cards = [1, 2, 3].map((x) => <Card key={x} number={x} />);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Kaboom!</Text>
      </TouchableOpacity>
      {
        React.createElement(Swiper, {style: styles.swiper, loadMinimal: true},
                            pressed ? cards[0] : cards)
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    flex: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  swiper: {
    flex: 0,
    height: Dimensions.get('window').width + 50,
  }
});
