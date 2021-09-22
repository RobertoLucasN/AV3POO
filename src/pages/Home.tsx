import React, { useState,useEffect} from 'react'
import { View, Text, StyleSheet, TextInput, Platform, TouchableOpacity, ScrollView, FlatList,Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import  { Button }  from '../components/Button'
import { SkillCard } from '../components/SkillCard'
interface Cadastro{
    id: string,
    
    codpais: string,
    nomepais: string,
    
}

    

export function Home() {

   
    const [CodPais, setcodPaiss] = useState('')
    
  
    const [codPaiss_, setcodPaiss1] = useState<Cadastro[]>([])

   
    const [nomePais, setnomePaiss] = useState('')

    
    const [nomePaiss, setnomePaiss1] = useState<Cadastro[]>([])
    
   

    function handleAddNew(){
       
if (CodPais.trim()!=="" && nomePais.trim()!=="") {
        
    const Dati = {
            id: String(new Date().getTime()),
            codpais: CodPais,
            nomepais: nomePais,
           
        }
        setcodPaiss1([...codPaiss_,Dati])

        setcodPaiss('')

        setnomePaiss1([...nomePaiss,Dati])

        setnomePaiss('')

        
    }}

    function handleRemove(id: string){

        setcodPaiss1(codPaiss_.filter(Cadastro=> Cadastro.id !== id))

    }

 

    useEffect(() => {

        async function loadData() {
            const storagedSkills = await AsyncStorage.getItem('@codPaiss_: Paiss')
           
            if(storagedSkills){
                setcodPaiss1(JSON.parse(storagedSkills))
            }
        }
        loadData()
    }, [])
    
     

    useEffect (() =>{
        async function saveData(){
           
            await AsyncStorage.setItem('@codPaiss_: Paiss', JSON.stringify(codPaiss_))
        }
        saveData()
    },[codPaiss_])

  return(
    <>
        <View style={styles.container}>
            <Image style={{width:330,height:100, backgroundColor: "blue",borderRadius: 45}} source={require('../assets/cadastro.jpg')}/>

            
            
                
           
        
            <TextInput
            style={styles.input}
            placeholder= 'Codigo Pais'
            value={CodPais}
            placeholderTextColor='white'
            onChangeText={value => setcodPaiss(value)}
            />

            <TextInput
            style={styles.input}
            placeholder= 'Nome Pais'
            value={nomePais}
            placeholderTextColor='white'
            onChangeText={value => setnomePaiss(value)}
            />

            <Button 
            onPress={handleAddNew}
            title = 'Cadastrar'
            
            />

                       
            
            <Text style={[styles.title, {marginVertical:20},{fontSize: 25},{marginBottom: 40},{paddingTop: 5},
 {borderWidth: 1}, {borderColor: 'white'},{alignItems:'center'},{justifyContent:'center'},{borderRadius: 45},{color: 'white'}]}>
                Para Deletar Clique em Cima dos Itens Abaixo
                
            </Text>
            
            <FlatList showsVerticalScrollIndicator={false}
            data={codPaiss_}
            keyExtractor={item=> item.id}
            renderItem={({item})=> ( 
                <SkillCard
                CodPais={item.codpais}
                nomePais={item.nomepais}
                onPress={() => handleRemove(item.id)}
                />
            )}
            />
        </View>
    </>
  )
}

const styles= StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'black',
        paddingHorizontal:30,
        paddingVertical: 70,
        fontSize: 25
        
       
        
    },
    title: {
        color:'blue',
        fontSize:25,
        fontWeight: 'bold',
        
    },
    input:{
        backgroundColor:'blue',
        color: '#fff',
        fontSize: 18,
        marginTop: 5,
        borderRadius: 45,
        padding:30
        
    },
   
})