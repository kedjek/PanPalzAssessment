import TextStyles from './TextStyles';
import {Text, TextStyle, StyleProp} from 'react-native';
import React from 'react';

interface TextProps {
  size?: keyof typeof TextStyles;
  color?: string;
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

//default is 'p3' but can be overridden by any other size through props
const TextComponent: React.FC<TextProps> = ({
  size = 'p3',
  color,
  style,
  children,
}) => {
  const textStyle: TextStyle = {
    ...TextStyles[size],
    color: color || 'black', // Default color is black but can be replaced by a hex code
  };

  return <Text style={[textStyle, style]}>{children}</Text>;
};

export default TextComponent;