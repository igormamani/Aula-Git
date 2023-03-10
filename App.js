import React from 'react'; 
import {Text, StyleSheet, View} from 'react-native';

export default function App (){
  return(

    <View style = {css.container}>

    {/* <Text style = {css.Texto}> Meu Primeiro Projeto</Text>
    <Text style = {css.Texto}> Meu Segundo Projeto</Text>  */}

      <View style = {css.quadrado}>

      </View>
      
      <View  style = {css.quadrado}>
        
      </View>
      
      <View style = {css.quadrado}>
        
      </View>

  


    </View>
    

  );

}

const css = StyleSheet.create({

  Texto:{
    fontSize:20,
    color:'blue',
    textAlign:'center' ,
    backgroundColor:'white'
},

  container :{
    backgroundColor:'#87CEEB',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    flexDirection: 'row'

  },

  quadrado :{
    width:100,
    height:100,
    backgroundColor:'gray',
    margin:10
  }


})

 


