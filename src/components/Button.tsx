import React from "react";
import{
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from 'react-native'

// type ButtonProps = TouchableOpacityProps;

interface ButtonProps extends TouchableOpacityProps { 
    title: string;
}
export function Button({title, ...rest }: ButtonProps) {
    return(
        <TouchableOpacity 
            style={styles.button}
             activeOpacity={0.7}
            {...rest}
        >
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor:'blue',
        padding:30,
        borderRadius:45,
        marginTop:10,
        
        
    },
    buttonText: {
        color: '#fff',
        fontSize:18,
        fontWeight:'bold'
    },
})