import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Svg, { Path, Circle } from "react-native-svg";

interface InfoButtonProps {
  onPress: () => void;
}

const InfoButton: React.FC<InfoButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} testID="info-icon" style={styles.button}>
      <Svg width={24} height={28} viewBox="0 0 24 28" fill="none">
        <Path
          d="M11.9941 20V15.17"
          stroke="#B8BCBA"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 12.1289H11.991"
          stroke="#B8BCBA"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Circle
          cx="12"
          cy="16"
          r="9.25"
          stroke="#B8BCBA"
          strokeWidth={1.5}
        />
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 5, // Small padding for better touch area
  },
});

export default InfoButton;
