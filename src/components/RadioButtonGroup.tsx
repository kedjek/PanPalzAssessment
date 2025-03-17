import React, {useState} from 'react';
import { StyleSheet, Text, View, Pressable, ViewStyle, StyleProp } from 'react-native';
import '@fontsource/plus-jakarta-sans/400.css';
import RadioButton from './RadioButton';


type RadioButtonGroupProps = {
    radioButtonProps: RadioButtonProps[];
    selectedItem: string | null;
    setSelectedItem: (item: string) => void;
    buttonStyle? : StyleProp<ViewStyle>;
    mode?: 'light' | 'dark';
};

type RadioButtonProps = {
    label: string;
    value: string;
};

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({ 
    radioButtonProps,
    selectedItem, 
    setSelectedItem,
    buttonStyle,
    mode
}) => {
    mode = mode || 'light';
    buttonStyle = buttonStyle || {};

    const styles = StyleSheet.create({
        labelText: {
            fontSize: 14,
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: '400',
            color: mode === 'dark' ? '#FFFFFF' : '#1B1F1B'
        },
        radioButton: {
            display: 'flex',
            flexDirection: 'row', // Arrange header and body text side by side
            alignItems: 'center',
        },
    });

    return  (
        <View >
            {radioButtonProps.map((radioButtonProp) => (
                <Pressable key={radioButtonProp.value} onPress={() => setSelectedItem(radioButtonProp.value)} style={[styles.radioButton, buttonStyle]}>
                    <RadioButton selected={selectedItem === radioButtonProp.value} mode={mode} hasLabel={true}/>
                    <Text style={styles.labelText}>{radioButtonProp.label}</Text>
                </Pressable>
            ))}
        </View>
    );
};

export default RadioButtonGroup;