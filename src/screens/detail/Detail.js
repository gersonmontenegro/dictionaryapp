import React from 'react';
import { View, Text } from 'react-native';
import Definition from 'src/screens/detail/Definition';

const Detail = ({ title, data }) => {
    return (
        <View style={{ marginLeft: 5, marginRight: 5 }}>
            <Text style={{ color: 'red', borderBottomColor: 'gray', borderBottomWidth: 1 }}>{title}</Text>
            <View>
                {
                    createDefinitions(data)
                }
            </View>
        </View>
    );
}

createDefinitions = (data) => {
    return data.map((item, index) => {
        return <Definition {...item} key={item.id.toString()} />
    })
}

export default Detail;