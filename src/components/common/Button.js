import React from 'react';
import {Text, TouchableOpacity,Platform} from 'react-native';

const Button = ({onPress, children}) => {

    const {buttonStyle,textStyle} = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: Platform.OS === 'android' ? 'bold' : 600,
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderColor: '#007aff',
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5,
    }
};

export {Button};