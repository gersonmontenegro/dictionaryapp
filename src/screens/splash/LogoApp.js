import React, { memo } from 'react';
import { View, Image } from 'react-native';

const LogoComponent = () => {
    return (
        <View>
            <Image source={require('src/assets/img/logo.png')} />
        </View>
    );
}

export default memo(LogoComponent);