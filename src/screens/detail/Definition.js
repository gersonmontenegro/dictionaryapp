import React from 'react';
import { View, Text } from 'react-native';
import ExamplesList from './ExamplesList';

const Definition = ({ id, definitions, examples }) => {
    return (
        <View key={id}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ width: 20, fontSize: 12, fontWeight: 'bold' }}>{id}</Text>
                <Text style={{ fontFamily: 'Prata-Regular', fontSize: 14, fontWeight: 'bold' }}>{definitions[0]}</Text>
            </View>
            <ExamplesList list={examples} />
            {/* <View>
                {
                    createExampleList(examples)
                }
            </View> */}
        </View>
    );
}

createExampleList = (data) => {
    return data.map((item, index) => <Text style={{ marginLeft: 20, fontStyle: 'italic' }} id={index.toString()}>{item.text}</Text>);

    // return examples.map((item, index) => {
    //     return <Text style={{ fontWeight: 'bold', marginLeft: 15, fontFamily: 'Prata-Regular' }}>{item}</Text>
    // });
}


export default Definition;
