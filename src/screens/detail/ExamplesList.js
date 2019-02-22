import React from 'react';
import { View, Text } from 'react-native';

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
    return data.map((item, index) => <Text style={{ marginLeft: 20, fontStyle: 'italic', fontSize: 15 }} id={index.toString()}>{item.text}</Text>);
}

export default ExamplesList;