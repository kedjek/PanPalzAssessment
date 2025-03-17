import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

/**
 * A enum of all the icons that this file can render.
 */
enum TABICON { MENU, HOME, MESSAGES, LOBBY }

/**
 * Contains all the colors needed for the tab.
 */
type TabColor = {
    bgColor: string, iconColor: string, textColor: string, notificationColor: string,
};

/**
 * The props of the Tab component.
 */
type TabProps = {
    /**
     * Any identifier number that represents the current tab.
     */
    tabId: number,
    /**
     * A hook that will be set to the tabId value when user clicks on the tab.
     */
    activeTabIdHook: [number, React.Dispatch<React.SetStateAction<number>>],
    /**
     * The text string displayed to the user.
     */
    label: string,
    /**
     * The icon of the tab. Choose a value from the TABICON enum to set up the icon to render.
     */
    icon: TABICON,
    /**
     * Boolean to indicate whether a notification for the tab exists or not.
     */
    notification: boolean,
    /**
     * Color schema for the tab.
     */
    colors?: TabColor,
    tabPressed: any
};

/**
 * A selector to select values for the Tab to render.
 */
const TabPropsSelection = {
    /**
     * A set of id values to select. The rule is that each selection has a distinct number. The number itself will be used as an identifier.
     */
    TABID: { MENU: 1, HOME: 2, MESSAGES: 3, LOBBY: 4 },
    /**
     * The text string displayed to the user.
     */
    LABEL: { MENU: 'Menu', HOME: 'Home', MESSAGES: 'Messages', LOBBY: 'Lobby' },
    /**
     * A value to identify the icon to render.
     */
    ICON: TABICON,
    /**
     * Boolean options to tell whether notification exists or not.
     */
    NOTIFICATION: { TRUE: true, FALSE: false },
    /**
     * Color schemas for the tab.
     */
    COLORS: { DEFAULT: { bgColor: '#eaf3ee', textColor: '#2d8653', iconColor: '#2d8653', notificationColor: '#A21308' } },
};

/**
 * A processor for the SVG icons. Uses parameters to build the icons.
 */
const SVG = {
    CHOOSE_ICON_FUNCTION: (icon: TABICON) => {
        switch (icon) {
            case TABICON.HOME: return SVG.ICON.HOME;
            case TABICON.LOBBY: return SVG.ICON.LOBBY;
            case TABICON.MENU: return SVG.ICON.MENU;
            case TABICON.MESSAGES: return SVG.ICON.MESSAGES;
            default: return () => <Text>?</Text>;
        }
    },
    ICON: {
        MENU: (active: boolean, notification: boolean, colors: TabColor) => {
            const notification_icon = notification ? <circle cx="30" cy="4" r="4" fill="#A21308" /> : undefined;
            return (active) ?
                <svg width="39" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 0.693359H6C2.68629 0.693359 0 3.37965 0 6.69336V20.6934C0 24.0071 2.68629 26.6934 6 26.6934H24C27.3137 26.6934 30 24.0071 30 20.6934V6.69336C30 3.37965 27.3137 0.693359 24 0.693359Z" fill={colors.iconColor} />
                    <path d="M8 19.6934H22" stroke={colors.bgColor} strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 13.6934H22" stroke={colors.bgColor} strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 7.69336H22" stroke={colors.bgColor} strokeWidth="2" strokeLinecap="round" />
                    {notification_icon}
                </svg>
                :
                <svg width="39" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 8.69336H22" stroke={colors.iconColor} strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 13.6934H22" stroke={colors.iconColor} strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 18.6934H22" stroke={colors.iconColor} strokeWidth="2" strokeLinecap="round" />
                    {notification_icon}
                </svg>;
        },
        HOME: (active: boolean, notification: boolean, colors: TabColor) => {
            return (
                <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.02 4.52962L4.63 8.72962C3.73 9.42962 3 10.9196 3 12.0496V19.4596C3 21.7796 4.89 23.6796 7.21 23.6796H18.79C21.11 23.6796 23 21.7796 23 19.4696V12.1896C23 10.9796 22.19 9.42962 21.2 8.73962L15.02 4.40962C13.62 3.42962 11.37 3.47962 10.02 4.52962Z" fill={active ? colors.iconColor : 'none'} stroke={colors.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    {notification ? <circle cx="22" cy="4" r="4" fill={colors.notificationColor} /> : undefined}
                </svg>
            );
        },
        MESSAGES: (active: boolean, notification: boolean, colors: TabColor) => {
            return (
                <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5475 20.3283L22.0025 24.0149C22.1192 24.9833 21.0808 25.6599 20.2525 25.1582L15.3642 22.2533C14.8275 22.2533 14.3025 22.2183 13.7892 22.1483C14.6525 21.1333 15.1658 19.8499 15.1658 18.4616C15.1658 15.1483 12.2958 12.465 8.74917 12.465C7.39584 12.465 6.14751 12.8499 5.10918 13.5266C5.07418 13.2349 5.0625 12.9433 5.0625 12.6399C5.0625 7.3316 9.67084 3.02661 15.3642 3.02661C21.0575 3.02661 25.6658 7.3316 25.6658 12.6399C25.6658 15.7899 24.0442 18.5783 21.5475 20.3283Z" fill={active ? colors.iconColor : 'none'} stroke={colors.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.1673 18.4617C15.1673 19.85 14.654 21.1334 13.7907 22.1484C12.6357 23.5484 10.804 24.4467 8.75065 24.4467L5.70565 26.255C5.19232 26.57 4.53898 26.1384 4.60898 25.5434L4.90065 23.2451C3.33731 22.1601 2.33398 20.4217 2.33398 18.4617C2.33398 16.4084 3.43066 14.6001 5.11066 13.5267C6.14899 12.8501 7.39732 12.4651 8.75065 12.4651C12.2973 12.4651 15.1673 15.1484 15.1673 18.4617Z" stroke="#2D8653" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    {notification ? <circle cx="24" cy="4" r="4" fill={colors.notificationColor} /> : undefined}
                </svg>
            );
        },
        LOBBY: (active: boolean, notification: boolean, colors: TabColor) => {
            return (
                <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5104 2.85986H9.49045C5.41711 2.85986 5.10295 6.52153 7.30211 8.51486L18.6988 18.8715C20.8979 20.8649 20.5838 24.5265 16.5104 24.5265H9.49045C5.41711 24.5265 5.10295 20.8649 7.30211 18.8715L18.6988 8.51486C20.8979 6.52153 20.5838 2.85986 16.5104 2.85986Z" fill={active ? colors.iconColor : 'none'} stroke="#2D8653" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    {notification ? <circle cx="22" cy="4" r="4" fill={colors.notificationColor} /> : undefined}
                </svg>
            );
        },
    },
};

/**
 * Renders a single clickable tab component.
 * @param props
 * @returns 
 */
const Tab = (props: TabProps) => {
    const [activeTabId, setActiveTabId] = props.activeTabIdHook;
    const colors: TabColor = props.colors || TabPropsSelection.COLORS.DEFAULT;
    const notification = props.notification || TabPropsSelection.NOTIFICATION.FALSE;
    const iconBuilder = SVG.CHOOSE_ICON_FUNCTION(props.icon);

    return <Pressable
        testID="button-tab"
        onPress={() => props.tabPressed(props.label)}
        style={[styles.container, { backgroundColor: colors.bgColor }]}
        role="button"
        accessible={true}
        accessibilityState={{ selected: (activeTabId === props.tabId) }}>
        <View style={styles.icon}>
            {iconBuilder(activeTabId === props.tabId, notification, colors)}
        </View>
        <Text style={[styles.text, { color: colors.textColor }, activeTabId === props.tabId ? styles.boldText : styles.normalText]}>
            {props.label}
        </Text>
    </Pressable>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 'auto',
        maxWidth: 85,
    },
    icon: {
        paddingBottom: 4,
    },
    text: {
        fontSize: 14,
        lineHeight: 18,
        textAlign: 'center',
        verticalAlign: 'middle',
    },
    normalText: {
        fontWeight: 'normal',
    },
    boldText: {
        fontWeight: 'bold',
    },
});

export default Tab;
export { TabPropsSelection };
export type { TabProps };
