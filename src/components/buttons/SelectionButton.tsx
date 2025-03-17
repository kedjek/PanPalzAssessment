import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import '@fontsource/plus-jakarta-sans/400.css';
import '@fontsource/plus-jakarta-sans/700.css';

// Props for SelectionButton
interface SelectionButtonProps {
  headerText: string; // Header text
  bodyText?: string;  // Optional body text
  onClick?: () => void;
  theme: 'light' | 'dark'; // Add theme prop to control light/dark mode
}

const SelectionButton: React.FC<SelectionButtonProps> = ({
  headerText,
  bodyText,
  onClick,
  theme,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected((prev) => !prev); // Toggle selection state
    if (onClick) onClick(); // Trigger onClick callback
  };

  // Get colors based on theme
  const { headerTextColor, bodyTextColor, arrowColor, borderColor, selectedBorderColor } = getButtonColors(theme);

  return (
    <TouchableOpacity
      style={[
        styles.selectionButton,
        {
          borderColor: isSelected ? selectedBorderColor : borderColor,
          borderWidth: isSelected ? 2 : 1, // Set border width to 2 when selected, 1 otherwise
        },
      ]}
      onPress={handlePress}
      testID="selection-button"
    >
      <View style={styles.textContainer}>
        <Text style={[styles.headerText, { color: headerTextColor }]}>{headerText}</Text>
        {bodyText && <Text style={[styles.bodyText, { color: bodyTextColor }]}>{bodyText}</Text>}
      </View>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
          stroke={arrowColor} // Set arrow color dynamically
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </TouchableOpacity>
  );
};

// Function to determine colors based on theme
const getButtonColors = (theme: 'light' | 'dark') => {
  return {
    headerTextColor: theme === 'dark' ? '#FFFFFF' : '#1B1F1B',// White text for dark, black for light
    bodyTextColor: theme === 'dark' ? '#FFFFFF' : '#454F4C',  // White text for dark, dark gray for light
    arrowColor: theme === 'dark' ? '#DDDDDD' : '#454F4C', // White arrow for dark, gray for light
    borderColor: '#DDDDDD', // Light gray border for dark mode
    selectedBorderColor: '#2D8653', // Green border when selected
  };
};

const styles = StyleSheet.create({
  selectionButton: {
    height: 50,
    width: 335,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // SVG at the end
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  textContainer: {
    flexDirection: 'row', // Arrange header and body text side by side
    alignItems: 'center',
  },
  headerText: {
    fontSize: 14,
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '700',
    marginRight: 8, // Spacing between header and body text
  },
  bodyText: {
    fontSize: 12,
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '400'
  },
});

export default SelectionButton;
