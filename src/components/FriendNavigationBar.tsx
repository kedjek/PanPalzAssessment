import React from 'react';
import { StyleSheet, View } from 'react-native';
import Tab, { TabPropsSelection } from './Tab';

/**
 * These are the props for the FriendNavigationBar.
 */
type FriendNavigationBarProps = {
    notificationStatus: {
        menu: boolean,
        home: boolean,
        messages: boolean,
        lobby: boolean,
    },
    activeTab: number, 
    tabPressed: any,
    style?: {
        backgroundColor?: string,
        height?: number,
        paddingTop?: number,
        paddingBottom?: number,
        paddingHorizontal?: number,
    }
};

const FriendNavigationBarPropsSelection = {
    STYLE: {
        DEFAULT: {
            backgroundColor: '#EAF3EE',
            height: 90,
            paddingTop: 0,
            paddingHorizontal: 15,
        },
    },
    ACTIVE_TAB: {
        ...TabPropsSelection.TABID,
        NONE: 0,
    },
};

/**
 * Renders the navigation bar for the friends section.
 * @param props
 * @returns
 */
const FriendNavigationBar = (props: FriendNavigationBarProps) => {
    const customStyle = props.style || FriendNavigationBarPropsSelection.STYLE.DEFAULT;
    return (
        <View style={[styles.container, customStyle]}>
            <Tab tabId={TabPropsSelection.TABID.MENU} tabPressed={props.tabPressed} activeTabIdHook={[props.activeTab,()=>{}]} icon={TabPropsSelection.ICON.MENU} label={TabPropsSelection.LABEL.MENU} notification={props.notificationStatus.menu} colors={TabPropsSelection.COLORS.DEFAULT} />
            <Tab tabId={TabPropsSelection.TABID.HOME} tabPressed={props.tabPressed} activeTabIdHook={[props.activeTab,()=>{}]} icon={TabPropsSelection.ICON.HOME} label={TabPropsSelection.LABEL.HOME} notification={props.notificationStatus.home} colors={TabPropsSelection.COLORS.DEFAULT} />
            <Tab tabId={TabPropsSelection.TABID.MESSAGES} tabPressed={props.tabPressed} activeTabIdHook={[props.activeTab,()=>{}]} icon={TabPropsSelection.ICON.MESSAGES} label={TabPropsSelection.LABEL.MESSAGES} notification={props.notificationStatus.messages} colors={TabPropsSelection.COLORS.DEFAULT} />
            <Tab tabId={TabPropsSelection.TABID.LOBBY} tabPressed={props.tabPressed} activeTabIdHook={[props.activeTab,()=>{}]} icon={TabPropsSelection.ICON.LOBBY} label={TabPropsSelection.LABEL.LOBBY} notification={props.notificationStatus.lobby} colors={TabPropsSelection.COLORS.DEFAULT} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
});

export default FriendNavigationBar;
export { FriendNavigationBarPropsSelection };
export type { FriendNavigationBarProps };
