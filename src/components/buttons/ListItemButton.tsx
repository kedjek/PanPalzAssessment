import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import '@fontsource/plus-jakarta-sans/400.css';

// Props for ListItemButton
interface ListItemButtonProps {
  text: string;
  icon?: React.ReactNode; // Optional icon/avatar
  onClick?: () => void;
  theme: 'light' | 'dark'; // Add theme prop to toggle light/dark mode
}

const ListItemButton: React.FC<ListItemButtonProps> = ({ text, icon, onClick, theme }) => {
  // Get colors based on theme
  const { textColor, arrowColor, borderColor } = getButtonColors(theme);

  return (
    <TouchableOpacity style={[styles.listItemButton, { borderBottomColor: borderColor }]} onPress={onClick} testID="list-item-button">
      <View style={styles.iconAndTextContainer}>
        {icon && <View style={styles.iconContainer} testID="list-item-icon">{icon}</View>}
        <Text style={[styles.listItemText, { color: textColor }]} testID="list-item-text">{text}</Text>
      </View>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" testID="list-item-arrow">
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
    textColor: theme === 'dark' ? '#FFFFFF' : '#1B1F1B',  // White text for dark, grey for light
    arrowColor: theme === 'dark' ? '#FFFFFF' : '#1B1F1B', // White arrow for dark, grey for light
    borderColor: '#DDDDDD', //Light gray border
  };
};

const styles = StyleSheet.create({
  listItemButton: {
    height: 57,
    width: 375,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1, // This will be overridden by dynamic borderColor
  },
  iconAndTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 12, 
  },
  listItemText: {
    fontSize: 16,
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '400',
  },
});

export default ListItemButton;
