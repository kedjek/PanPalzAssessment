import React from "react";
import { StyleSheet, View } from "react-native";

type RadioButtonProp = {
    selected: boolean;
    mode?: 'light' | 'dark';
    hasLabel?: boolean;
};

const RadioButtonPropSelection = {
    COLOR: { GREEN: '#659E71', GREY: '#D9D9D9' },
    MODE: { LIGHT: 'white', DARK: '#101510' },
};

const RadioButton: React.FC<RadioButtonProp> = ({
    selected,
    mode,
    hasLabel,
}) => {
    mode = mode || 'light';
    hasLabel = hasLabel || false;
    const backgroundColor = mode === 'light' ? RadioButtonPropSelection.MODE.LIGHT : RadioButtonPropSelection.MODE.DARK;
    const outerCircleColor = selected ? RadioButtonPropSelection.COLOR.GREEN : RadioButtonPropSelection.COLOR.GREY;
    const innerCircleColor = selected ? RadioButtonPropSelection.COLOR.GREEN : 'transparent';

    const styles = StyleSheet.create({
        circle: {
            height: 20,
            width: 20,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: outerCircleColor,
            backgroundColor: backgroundColor,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: hasLabel ? 10 : 0,
        },
        innerCircle: {
            height: 10,
            width: 10,
            borderRadius: 5,
            backgroundColor: innerCircleColor,
        },
    });

    return (
        <View style={styles.circle}>
            {selected && <View style={styles.innerCircle} />}
        </View>
    );
};

export default RadioButton;