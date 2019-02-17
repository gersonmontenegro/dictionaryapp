import React from 'react';
import { View, Text } from 'react-native';

const Definition = ({ id, definitions, examples }) => {
    return (
        <View key={id}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ width: 20, fontSize: 12, fontWeight: 'bold' }}>{id}</Text>
                <Text style={{ fontFamily: 'Prata-Regular' }}>{definitions[0]}</Text>
            </View>
            <Text style={{ fontWeight: 'bold', marginLeft: 15, fontFamily: 'Prata-Regular' }}>{example}</Text>
            <View>
                {
                    // createExampleList(new Map([[true, 7], [{ foo: 3 }, ['abc']]]))
                    createExampleList(examples)
                    // createExampleList(new Map(JSON.parse([{ e: 1, e: 99, e: 3 }])))
                }
            </View>
        </View>
    );
}

createExampleList = (data) => {
    return data.map((item, index) => <Text style={{ marginLeft: 20 }} id={index.toString()}>{item.text}</Text>);

    // return examples.map((item, index) => {
    //     return <Text style={{ fontWeight: 'bold', marginLeft: 15, fontFamily: 'Prata-Regular' }}>{item}</Text>
    // });
}


export default Definition;
