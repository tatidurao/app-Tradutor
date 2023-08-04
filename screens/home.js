import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.apptitle}>
          <View
            style={{ flex: 0.8, justifyContent: 'center', marginLeft: 100 }}>
            <Text style={styles.apptitletext}> tradutor</Text>
          </View>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/Screenshot2.png')}
            style={styles.previewimage}
            ></Image>
            <Image
            source={require('../assets/Screenshot3.png')}
            style={styles.previewimage2}></Image>

            <View style={styles.botaoview}>
          <TouchableOpacity style={styles.botao}
          onPress={()=> this.props.navigation.navigate("tradutor")}
          >
            <Text style={styles.apptitletext}> tradutor</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAE7E7',
  },
  apptitle: {
    flex: 0.07,
    backgroundColor: '#9780C2',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  apptitletext: {
    color: 'white',
    fontSize: 28,
  },
  botao: {
    width: RFValue(310),
    height: RFValue(70),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f79875',
    borderRadius: RFValue(70),
  },
  imageContainer: {
    flex: 0.85,
  },
  previewimage: {
    width: '80%',
    height: RFValue(200),
    alignSelf: 'center',
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: 'contain',
    marginTop: 20,
  },
    previewimage2: {
    width: '80%',
    height: RFValue(150),
    alignSelf: 'center',
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: 'contain',
    marginTop: 50,
  },
  botaoview:{
   // backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  }
});
