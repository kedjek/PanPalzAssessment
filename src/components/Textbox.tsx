import React from 'react';
import { Pressable, StyleSheet, TextInput, View, StyleProp, TextStyle } from 'react-native';
import TextComponent from './TextComponent';

type TextboxProps = {
    textState: [string, (text: string) => void],
    /**
     * Placeholder text for rendering when textbox is empty
     */
    placeholderText?: string,

    /**
     * Set to true if textbox is for display. Ignore otherwise.
     */
    isDisplay?: boolean,
    isMessage?: boolean,
    isInput?: boolean,
    isDisplayWithLabel?: boolean,
    label?: string,
    textStyle?: StyleProp<TextStyle>,
};

type InputTextboxProps = TextboxProps & {
    /**
     * Maximum characters allowed for the textbox. By default, there is no limit.
     */
    maxCharacters?: number,
};

type MessageTextboxProps = TextboxProps & {
    /**
     * Execute function when mic button is clicked.
     */
    micClick?: () => void,
    ignoreMic?: boolean,
    onFocus?: () => void,
    onBlur?: () => void,
    onChange?: (newText: string) => void,
};

type DisplayTextboxProps = TextboxProps & {
    /**
     * Execute function when pencil icon is clicked.
     */
    pencilClick?: () => void,
}

type GroupedProps = InputTextboxProps & MessageTextboxProps & DisplayTextboxProps;

const SVG = {
    PENCIL: <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_27624_120156)">
            <path d="M25.2594 16.1L17.0494 24.79C16.7394 25.12 16.4394 25.77 16.3794 26.22L16.0094 29.46C15.8794 30.63 16.7194 31.43 17.8794 31.23L21.0994 30.68C21.5494 30.6 22.1794 30.27 22.4894 29.93L30.6994 21.24C32.1194 19.74 32.7594 18.03 30.5494 15.94C28.3494 13.87 26.6794 14.6 25.2594 16.1Z" stroke="#454F4C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M23.8906 17.55C24.3206 20.31 26.5606 22.42 29.3406 22.7" stroke="#454F4C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 34.5H33" stroke="#454F4C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_27624_120156">
                <rect x="4" y="4.5" width="40" height="40" rx="20" fill="white" />
            </clipPath>
        </defs>
    </svg>,
    MIC: <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.7559 15C13.8167 15 14.8341 14.5786 15.5843 13.8284C16.3344 13.0783 16.7559 12.0609 16.7559 11V5C16.7559 3.93913 16.3344 2.92172 15.5843 2.17157C14.8341 1.42143 13.8167 1 12.7559 1C11.695 1 10.6776 1.42143 9.92743 2.17157C9.17729 2.92172 8.75586 3.93913 8.75586 5V11C8.75586 12.0609 9.17729 13.0783 9.92743 13.8284C10.6776 14.5786 11.695 15 12.7559 15ZM10.7559 5C10.7559 4.46957 10.9666 3.96086 11.3416 3.58579C11.7167 3.21071 12.2254 3 12.7559 3C13.2863 3 13.795 3.21071 14.1701 3.58579C14.5451 3.96086 14.7559 4.46957 14.7559 5V11C14.7559 11.5304 14.5451 12.0391 14.1701 12.4142C13.795 12.7893 13.2863 13 12.7559 13C12.2254 13 11.7167 12.7893 11.3416 12.4142C10.9666 12.0391 10.7559 11.5304 10.7559 11V5ZM20.7559 11C20.7559 10.7348 20.6505 10.4804 20.463 10.2929C20.2754 10.1054 20.0211 10 19.7559 10C19.4906 10 19.2363 10.1054 19.0488 10.2929C18.8612 10.4804 18.7559 10.7348 18.7559 11C18.7559 12.5913 18.1237 14.1174 16.9985 15.2426C15.8733 16.3679 14.3472 17 12.7559 17C11.1646 17 9.63844 16.3679 8.51322 15.2426C7.388 14.1174 6.75586 12.5913 6.75586 11C6.75586 10.7348 6.6505 10.4804 6.46297 10.2929C6.27543 10.1054 6.02108 10 5.75586 10C5.49064 10 5.23629 10.1054 5.04875 10.2929C4.86122 10.4804 4.75586 10.7348 4.75586 11C4.75763 12.9473 5.46958 14.8271 6.75826 16.287C8.04693 17.7469 9.82384 18.6866 11.7559 18.93V21H9.75586C9.49064 21 9.23629 21.1054 9.04875 21.2929C8.86122 21.4804 8.75586 21.7348 8.75586 22C8.75586 22.2652 8.86122 22.5196 9.04875 22.7071C9.23629 22.8946 9.49064 23 9.75586 23H15.7559C16.0211 23 16.2754 22.8946 16.463 22.7071C16.6505 22.5196 16.7559 22.2652 16.7559 22C16.7559 21.7348 16.6505 21.4804 16.463 21.2929C16.2754 21.1054 16.0211 21 15.7559 21H13.7559V18.93C15.6879 18.6866 17.4648 17.7469 18.7535 16.287C20.0421 14.8271 20.7541 12.9473 20.7559 11Z" fill="#454F4C" />
    </svg>,
};

const Textbox = (props: InputTextboxProps | MessageTextboxProps | DisplayTextboxProps) => {
    const grouped = (props as GroupedProps);
    const [textState, setTextState] = props.textState;
    return (
        <View style={styles.container}>
            <View style={styles.textboxContainer}>
                {grouped.label && grouped.isDisplayWithLabel && (
                    <TextComponent style={styles.inlineLabel}>{grouped.label}</TextComponent>
                )}
                <TextInput 
                    testID="input-textbox" 
                    style={[
                        styles.textbox, 
                        styles.textColor, 
                        grouped.isInput && styles.pb2, 
                        grouped.isDisplay && styles.paddingDisplay,
                        grouped.isDisplayWithLabel && styles.noBorder,
                        grouped.isDisplayWithLabel && styles.paddingDisplayWithLabel,
                        (grouped.isDisplay || grouped.isMessage || grouped.isDisplayWithLabel) && styles.bgGreen, 
                        grouped.isMessage && styles.paddingMessage,
                        grouped.textStyle,
                    ]}
                    multiline={grouped.isDisplayWithLabel ? false : true}
                    numberOfLines={grouped.isMessage ? 1 : grouped.isDisplayWithLabel ? 1 : 4}
                    onFocus={grouped.onFocus}
                    onBlur={grouped.onBlur}
                    maxLength={grouped.maxCharacters}
                    onChangeText={(text) => { !grouped.isDisplay && setTextState(text); grouped.onChange && grouped.onChange(text); }}
                    placeholder={grouped.placeholderText}
                    value={textState}
                    readOnly={grouped.isDisplay || grouped.isDisplayWithLabel}
                    aria-disabled={grouped.isDisplay || grouped.isDisplayWithLabel} />
                {grouped.maxCharacters &&
                    <TextComponent style={[styles.textCharacter, styles.textColor]}>{textState.length}/{grouped.maxCharacters} characters</TextComponent>
                }
                {grouped.isMessage && !grouped.ignoreMic &&
                    <View style={styles.svgContainer}>
                        <Pressable style={[styles.svgMic]} onPress={grouped.micClick}>{SVG.MIC}</Pressable>
                    </View>
                }
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    bgGreen: {
        backgroundColor: '#EAF3EE',
    },
    textbox: {
        width: '100%',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#454F4C',
        borderRadius: 8,
        padding: 16,
        overflow: 'scroll',
    },
    paddingDisplay: {
        paddingBottom: 48 + 16,
        paddingVertical: 8,
    },
    paddingMessage: {
        padding: 8,
        paddingEnd: 25 + 8,
    },
    pb2: {
        paddingBottom: 32,
    },
    svgContainer: {
        alignItems: 'flex-end',
        paddingHorizontal: 16,
    },
    svgMic: {
        flex: 1,
        position: 'relative',
        bottom: 8 + 24,
        alignItems: 'flex-end',
    },
    svgPencil: {
        flex: 1,
        position: 'relative',
        bottom: 48 + 16,
        alignItems: 'flex-end',
    },
    textColor: {
        color: '#454F4C',
    },
    textCharacter: {
        position: 'relative',
        paddingHorizontal: 16,
        bottom: 16 + 21 - 3,
        textAlign: 'right',
    },
    label: {
        color: '#454F4C',
        marginBottom: 8,
        fontWeight: '500',
    },
    textboxContainer: {
        position: 'relative',
        width: '100%',
    },
    inlineLabel: {
        position: 'absolute',
        top: 8,
        left: 16,
        color: '#454F4C',
        fontSize: 12,
        fontWeight: '500',
        zIndex: 1,
    },
    paddingDisplayWithLabel: {
        paddingTop: 28,
        paddingBottom: 8,
        paddingHorizontal: 16,
        minHeight: 60,
    },
    noBorder: {
        borderWidth: 0,
    },
});

export type { InputTextboxProps, MessageTextboxProps, DisplayTextboxProps };
export default Textbox;
