import React from "react";
import {TouchableOpacity, Text, StyleSheet, TouchableOpacityProps} from 'react-native'

interface ISkillCaraProps extends TouchableOpacityProps {
    CodPais: string,
    nomePais: string,
    

}

export function SkillCard({CodPais, nomePais, ...rest}: ISkillCaraProps){
    return (
        <TouchableOpacity 
            style={styles.buttonSkill} 
            {...rest} 
        >
           <Text style={styles.textSkillCodPais}>
            {CodPais}
            </Text>
            <Text style={styles.textSkillemail}>
            {nomePais}
            </Text>
            
       </TouchableOpacity>       
    )
}
const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: 'blue',
        padding:5,
        borderRadius:45,
        alignItems: 'center',
        fontSize: 25
        
        
        
    },
    textSkillCodPais: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        padding:5
    },
    textSkillemail: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        padding:5
    }
})