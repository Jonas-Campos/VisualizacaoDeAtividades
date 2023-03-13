import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, FlatList, StyleSheet, Image, View,Button, TextInput} from "react-native";

export default function Curso() {
  const [data, setData] = useState({});
  const [data3, setData3] = useState({});

  const fetchData = async () => {
    //const resp = await fetch("http://academico3.rj.senac.br:8080/api/Atividade/FiltrarAtividadeBySituacaoAprendizagemId/1");
    const resp = await fetch("http://academico3.rj.senac.br:8080/api/SituacaoAprendizagem/1").then(resp=>resp.json()).catch(error=>error); 
    const resp3 = await fetch("http://academico3.rj.senac.br:8080/api/Atividade/3").then(resp=>resp.json()).catch(error=>error);
    console.log(resp);
    setData(resp);
    console.log(resp3);
    setData3(resp3);
    
  };

  
  useEffect(() => {
    fetchData();
  }, []);
  
  const renderItem3 = 
    ({ item }) => (
    <View style={styles.listItem}>
      <View style={{flex:1}}>
      <Text style={{textAlign:"center", fontWeight:"bold", fontSize:20, paddingBottom: 10}}>{item.situacaoAprendizagem.titulo}</Text>
      <Text style={{textAlign:"center", fontWeight:"bold", fontSize:20, paddingBottom: 10}}>{item.situacaoAprendizagem.descricao}</Text>       
      </View>
    </View>
  );
  const renderItem = 
    ({ item }) => (
    <View style={styles.listItem}>
      <View style={{flex:1}}>
      <Text style={{textAlign:"center", fontWeight:"bold", fontSize:20, paddingBottom: 10}}>{item.titulo}</Text>
      <Text style={{textAlign:"center", fontWeight:"bold", fontSize:20, paddingBottom: 10}}>{item.descricao}</Text>
      <Text style={{textAlign:"center", fontWeight:"bold", fontSize:20, paddingBottom: 10}}>{item.grauDificuldade.descricao}</Text>
      <Text style={{textAlign:"center", fontWeight:"bold", fontSize:20, paddingBottom: 10}}>{item.status}</Text>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
        
          <FlatList
            data={[data]}
            renderItem={renderItem}
          />
          <FlatList
            data={[data3]}
            renderItem={renderItem3}
          />
          
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        marginTop:60
      },
      listItem:{
        margin:10,
        padding:10,
        backgroundColor:"#FFF",
        width:"80%",
        flex:1,
        alignSelf:"center",
        flexDirection:"row",
        borderRadius:5
      },
      tinyLogo: {
        flex:1,
        alignSelf:"center",
        resizeMode: "contain"
      },
  });