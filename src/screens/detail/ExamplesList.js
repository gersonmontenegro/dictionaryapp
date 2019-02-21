import React from 'react';
import { View, Text } from 'react-native';

const ExamplesList = ({ list }) => {
    console.debug("ASDASDAS");
    console.log("2ASDASDAS");
    return (
        <View>
            {
                createExampleList(list)
            }
        </View>
    );
}

createExampleList = (data) => {
    return data.map((item, index) => <Text style={{ marginLeft: 20, fontStyle: 'italic', fontSize: 40 }} id={index.toString()}>{item.text}</Text>);
}

export default ExamplesList;