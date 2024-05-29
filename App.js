import { StyleShee, Text, View } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style ={{
      flex: 1,
      alignItems: 'flex-end', //BARIS
      justifyContent: 'center', //KOLOM  
      flexDirection:'row',
      marginBottom: 100,
      justifyContent:'space-evenly'
    }}>
      <View style= {{
        backgroundColor:'blue', width: 180, height: 80,
        justifyContent: 'center',
        borderRadius:10
      }}>
        <Text style={{
          fontSize: 30, color: 'white',
          textAlign: 'center',
          fontWeight: 'bold'
        }}>
          sign in
        </Text>
      </View>

      <View style= {{
        backgroundColor:'red', width: 180, height: 80,
        justifyContent: 'center',
        borderRadius:10
      }}>
        <Text style={{
          fontSize: 30, color: 'white',
          textAlign: 'center',
          fontWeight: 'bold'
        }}>
          sign up
        </Text>
      </View>
    </View>
  )
}  
export default App  