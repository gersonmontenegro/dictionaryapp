import React from 'react';
import { ActivityIndicator } from 'react-native';
import Popover from 'react-native-popover-view';

const PopOverComponent = (props) => {
    return (
        <Popover placement="auto" isVisible={props.showPopOver}>
            <ActivityIndicator size="small" color="#ff00ff" />
        </Popover>
    );
}

export default PopOverComponent;