import React, { useState } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import TextComponent from '../TextComponent';

type CheckBoxButtonsProps = {
  items: string[];
  selectedItem: string[];
  onItemSelect: (item: string) => void;
};

const CheckBoxButtons = ({ items, selectedItem, onItemSelect }: CheckBoxButtonsProps) => {
  const [selectedItems, setSelectedItems] = useState<string[]>(selectedItem ? selectedItem : []);

  const handleItemSelect = (item: string) => {
    // Update the selected items based on the current selection
    setSelectedItems(prevSelected =>
      // Check if the item is already selected
      prevSelected.includes(item)
        // If it is selected, remove it from the selected items
        ? prevSelected.filter(i => i !== item)
        // If it is not selected, add it to the selected items
        : [...prevSelected, item]
    );
    onItemSelect(item);
  };

  return (
    <View style={styles.container}>
      {items.map((item) => (
        <Pressable
          key={item}
          style={styles.item}
          onPress={() => handleItemSelect(item)}
        >
          <View style={[
            styles.checkBox,
            selectedItems.includes(item) && styles.selectedCheckBox,
          ]} />
          <TextComponent
            size="p2"
            color={selectedItems.includes(item) ? '#2C8652' : '#454F4C'}
            style={styles.text}
          >
            {item}
          </TextComponent>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 40,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkBox: {
    width: 25,
    height: 25,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#CCCCCC',
    marginRight: 20,
    marginLeft: 10,
    marginBottom: 0,
    marginTop: 0,
  },
  selectedCheckBox: {
    borderColor: '#2C8652',
    backgroundColor: '#E8F5E9',
  },
  text: {
    fontSize: 20,
    fontWeight: 'normal',
    textAlign: 'left',
    color: '#000000',
    lineHeight: 30,
    marginTop: 0,
    marginBottom: 0,
  },
});

export default CheckBoxButtons;