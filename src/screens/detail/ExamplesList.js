import React from 'react';
import { View, Text } from 'react-native';
import { ItemList } from './ItemList';

const ExamplesList = ({ list }) => {
    return (
        <View>
            {
                createList(list)
            }
        </View>
    );
}

createList = (data) => {
    return data.map((item, index) => <ItemList key={index} index={index} text={item.text} />);
}

export default ExamplesList;