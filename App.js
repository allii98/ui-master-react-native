import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView style={{flex: 1}}>
      {/* header */}
      <StatusBar backgroundColor='#00897b' animated/>
      <View style={{
        backgroundColor: '#009688',
        flexDirection:'row',
        paddingVertical: 15,
        elevation: 3,
        marginBottom: 10
      }}>

      <TouchableOpacity>
      <Icon name="bars" size={25} color="#f5f5f5" style={{marginLeft: 15}}/>
      </TouchableOpacity>
      <View style={{justifyContent:'center', marginLeft: 10}}>

        <Text style={{color: '#f5f5f5', fontSize:18 }}>Home</Text>
      </View>
      </View>
      {/* end header */}

      <TouchableOpacity style={{
        backgroundColor:'#009688', 
        justifyContent:'center', 
        alignItems:'center',
        paddingVertical: 10,
        elevation: 3,
        marginHorizontal: 20,
        marginBottom: 10
        }}>
        <Text style={{color: '#ffffff'}}>Button1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        backgroundColor:'#009688', 
        justifyContent:'center', 
        alignItems:'center',
        paddingVertical: 10,
        elevation: 3,
        marginHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10
        }}>
        <Text style={{color: '#ffffff'}}>Button2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        backgroundColor:'#009688', 
        justifyContent:'center', 
        alignItems:'center',
        paddingVertical: 10,
        elevation: 3,
        marginHorizontal: 20,
        borderRadius: 50,
        marginBottom: 10
        }}>
        <Text style={{color: '#ffffff'}}>Button3</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        borderWidth: 2,
        borderColor: '#009688',
        backgroundColor:'#ffffff', 
        justifyContent:'center', 
        alignItems:'center',
        paddingVertical: 10,
        elevation: 3,
        marginHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
        }}>
        <Text style={{color: '#009688'}}>Button4</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        borderWidth: 2,
        borderColor: '#009688',
        backgroundColor:'#ffffff', 
        justifyContent:'center', 
        alignItems:'center',
        paddingVertical: 10,
        elevation: 3,
        marginHorizontal: 20,
        borderRadius: 50,
        marginBottom: 10,
        }}>
        <Text style={{color: '#009688'}}>Button5</Text>
      </TouchableOpacity>

      <TouchableOpacity>
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#12c2e9', '#c471ed', '#f64f59']} 
      style={{
        backgroundColor:'#ffffff', 
        justifyContent:'center', 
        alignItems:'center',
        paddingVertical: 10,
        elevation: 3,
        marginHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
        }}>
        <Text style={{color: '#ffffff'}}>
          Button6
        </Text>
      </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity>
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#12c2e9', '#c471ed', '#f64f59']} 
      style={{
        backgroundColor:'#ffffff', 
        justifyContent:'center', 
        alignItems:'center',
        paddingVertical: 10,
        elevation: 3,
        marginHorizontal: 20,
        borderRadius: 50,
        marginBottom: 10,
        }}>
        <Text style={{color: '#ffffff'}}>
          Button7
        </Text>
      </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity style={{
        backgroundColor: '#009688',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        borderRadius: 5,
        marginHorizontal: 20,
        marginBottom: 10
      }}>
        <Icon name="bars" size={25} color="#f5f5f5" />
      </TouchableOpacity>

      <TouchableOpacity >
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#12c2e9', '#c471ed', '#f64f59']} 
      style={{
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        borderRadius: 5,
        marginHorizontal: 20,
        marginBottom: 10
      }}
      >

        <Icon name="bars" size={25} color="#f5f5f5" />
      </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity style={{
        backgroundColor: '#009688',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        borderRadius: 5,
        marginHorizontal: 20 ,
        paddingVertical: 10,
        marginBottom: 10
      }}>
        <Icon name="bars" size={25} color="#f5f5f5" />
        <Text style={{color: '#ffffff', marginLeft: 10}}>
          Button8
        </Text>
      </TouchableOpacity>

      <TouchableOpacity >
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#C6FFDD', '#FBD786', '#f64f59']} 
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        borderRadius: 5,
        marginHorizontal: 20 ,
        paddingVertical: 10
      }}
      >

        <Icon name="bars" size={25} color="#f5f5f5" />
        <Text style={{color: '#ffffff', marginLeft: 10}}>
          Button9
        </Text>
      </LinearGradient>
      </TouchableOpacity>
      </ScrollView>
    );
  }
}
