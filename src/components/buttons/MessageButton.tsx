import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import '@fontsource/plus-jakarta-sans/400.css';
import Avatar from '../Avatar';
import { AVATAR_NAMES } from '../Avatar';

interface MessageButtonProps {
    avatar: AVATAR_NAMES;
    id: number;
    name: string;
    time: string;
    onClick?: () => void;
};

const MessageButton: React.FC<MessageButtonProps> = ({ avatar, id, name, time, onClick }) => {
    return (
        <TouchableOpacity key={id} style={styles.itemContainer} onPress={onClick} testID='message-button'>
            <View style={styles.LeftContainer}>
                <View testID={`avatar-container-${id}`}>
                    <Avatar name={avatar} isTagged={false} height={48} width={48} />
                </View>
                <Text style={styles.nameText}>{name}</Text>
            </View>
            <Text>
                {new Date(time).toLocaleTimeString( [], {hour: 'numeric', minute: '2-digit', hour12: true })}
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#DDDDDD',
        paddingVertical: 15,
    },
    LeftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30,
    },
    nameText: {
        fontSize: 17,
        fontWeight: 'bold',
    }
});

export default MessageButton;