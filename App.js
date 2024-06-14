import { Text,View, Image,TextInput } from 'react-native';
import React from 'react' ;

const App = ()=> {
const TextInputCustom = ({name , color})=> {
  return (
    <TextInput
    placeholder={`Masukkan ${name}`}
    style = {{
      height : 40,
      width : 200,
      borderColor: 'gray',
      borderWidth: 1,
      color: color,
      padding:10,
      margin : 10,
      borderRadius: 10,
      paddingLeft: 10

    }}
    />
   )
}
return (
  <View style = {{
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
   }}>

    <TextInputCustom name= "nama" color = "black"></TextInputCustom>
    <TextInputCustom name= "email" color= "red" ></TextInputCustom>
    <TextInputCustom name= "password" color= "black" ></ TextInputCustom>
    </View>
)
}
export default App