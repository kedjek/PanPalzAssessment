import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';

// Interface to define the props for the CustomButton component
interface CustomButtonProps {
  text: string; // Text to display on the button
  variant?: 'primary' | 'disabled' | 'secondary' | 'error' | 'tertiary'; // Button style variant
  theme: 'light' | 'dark'; // Theme of the button (light or dark)
  padding?: number; // Optional padding for the button (default is 16)
  icon?: React.ReactNode; // Optional icon to display inside the button
  onClick?: () => void; // Callback function triggered on button press
  disabled?: boolean; // Flag to disable the button
}

// CustomButton component definition
const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  variant = 'primary', // Default variant is 'primary'
  theme,
  padding = 16, // Default padding is 16
  icon,
  onClick,
  disabled = false, // Default state is enabled (not disabled)
}) => {
  // Get styles for background and text colors based on the variant and theme
  const { bgColor, textColor } = getButtonStyles(variant, theme);

  // Apply a green border for the "secondary" variant
  const borderStyle = variant === 'secondary' ? { borderWidth: 2, borderColor: '#2D8653' } : {};

  return (
    <Pressable
      testID="button-container" // Used for testing
      style={({ pressed }) => [
        styles.button, // Base button styles
        borderStyle, // Conditional green border for "secondary" variant
        {
          backgroundColor: bgColor, // Dynamically set background color
          paddingHorizontal: padding, // Dynamically set horizontal padding
          opacity: disabled ? 0.6 : 1, // Adjust opacity when the button is disabled
          width: 264, // Fixed width for the button
          minWidth: 130, // Minimum width for responsive designs
          height: 52, // Fixed height
          borderRadius: 24, // Rounded corners
        },
      ]}
      onPress={onClick} // Trigger the onClick callback when pressed
      disabled={disabled} // Disable the button if the disabled prop is true
    >
      {/* Button text */}
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>

      {/* Optional icon */}
      {icon && <View style={styles.icon}>{icon}</View>}
    </Pressable>
  );
};

// Function to get styles for the button based on variant and theme
const getButtonStyles = (
  variant: 'primary' | 'disabled' | 'secondary' | 'error' | 'tertiary',
  theme: string
) => {
  // Define colors for the light theme
  const lightThemeColors = {
    primary: { bgColor: '#2D8653', textColor: '#FFFFFF' },
    disabled: { bgColor: '#DDDDDD', textColor: '#454F4C' },
    secondary: { bgColor: '#EAF3EE', textColor: '#1B1F1B' },
    error: { bgColor: '#A21308', textColor: '#FFFFFF' },
    tertiary: { bgColor: '#EAF3EE', textColor: '#1B1F1B' },
  };

  // Define colors for the dark theme
  const darkThemeColors = {
    primary: { bgColor: '#81B698', textColor: '#1B1F1B' },
    disabled: { bgColor: '#DDDDDD', textColor: '#454F4C' },
    secondary: { bgColor: '#EAF3EE', textColor: '#1B1F1B' },
    error: { bgColor: '#D18983', textColor: '#FFFFFF' },
    tertiary: { bgColor: '#C0DBCB', textColor: '#1B1F1B' },
  };

  // Return the appropriate colors based on the theme
  return theme === 'dark' ? darkThemeColors[variant] : lightThemeColors[variant];
};

// Styles for the CustomButton component
const styles = StyleSheet.create({
  button: {
    alignItems: 'center', // Center align all items horizontally
    justifyContent: 'center', // Center align all items vertically
    flexDirection: 'row', // Layout items (text and icon) horizontally
  },
  text: {
    fontSize: 16, // Font size for the button text
    fontWeight: '600', // Bold font weight for emphasis
  },
  icon: {
    margin: 16, // Add spacing between the icon and text
  },
});

export default CustomButton;
