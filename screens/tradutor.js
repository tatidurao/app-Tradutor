import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { WebView } from 'react-native-webview';
export default class Tradutor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tradutor: '',
      go: false,
    };
  }
  render() {
    if (this.state.go == false) {
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
            <View style={styles.botaoview}>
              <View style={styles.bolinha}></View>
              <TouchableOpacity style={styles.botao}
               onPress={()=> this.setState({go:true})}
               >
                <Text style={styles.apptitletext}>Clique para traduzir</Text>
                <TextInput
                  style={styles.inputFont}
                  onChangeText={(tradutor) => this.setState({ tradutor })}
                  multiline={true}
                  numberOfLines={20}
                  value={this.state.tradutor}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
    else{
      return(
        <View style={{flex:1,  backgroundColor: '#FAE7E7'}}>
          <View style={styles.botaoview}>
              <View style={styles.bolinha}></View>
              <TouchableOpacity style={styles.botao2}
               onPress={()=> this.setState({go:false})}
               >
                <Text style={styles.apptitletext}>Clique para traduzir</Text>
                <TextInput
                  style={styles.inputFont}
                  onChangeText={(tradutor) => this.setState({ tradutor })}
                  multiline={true}
                  numberOfLines={20}
                  value={this.state.tradutor}
                />
              </TouchableOpacity>
            </View>
            <WebView 
              source={{uri: "https://translate.google.com/?sl=auto&tl=pt&text="+this.state.tradutor}}
              sytle={{}}
            />
        </View>
      )
    }
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
    fontSize: 24,
  },
  imageContainer: {
    flex: 0.85,
  },
  botao: {
    width: RFValue(230),
    height: RFValue(150),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f79875',
    borderRadius: RFValue(30),
    marginTop: 70,
  },
   botao2: {
    width: RFValue(230),
    height: RFValue(150),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f79875',
    borderRadius: RFValue(30),
    marginTop: 10,
  },
  botaoview: {
    // backgroundColor: "black",
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(10),
    flexDirection: 'row',
  },
  bolinha: {
    width: RFValue(50),
    height: RFValue(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(90),
    backgroundColor: '#EB9F9F',
    marginRight: 30,
  },
  bolinha2: {
    width: RFValue(50),
    height: RFValue(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(90),
    backgroundColor: '#7A679D',
    marginLeft: 60,
  },
  inputFont: {
    height: RFValue(100),
    width: RFValue(120),
    borderColor: 'white',
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: 'white',
  },
});
