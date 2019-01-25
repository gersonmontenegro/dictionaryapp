import React from 'react';
import { View, Text } from 'react-native';
import Definition from 'src/screens/detail/Definition';

const Detail = ({ title }) => {
    return (
        <View style={{ marginLeft: 5, marginRight: 5 }}>
            <Text style={{ color: 'red', borderBottomColor: 'gray', borderBottomWidth: 1 }}>{title}</Text>
            <View>
                <Definition id={1} definition="For all future time..." example="'holu shit!'" />
            </View>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ width: 20, fontSize: 12, fontWeight: 'bold' }}>2</Text>
                    <Text style={{ fontFamily: 'Prata-Regular' }}>Continually</Text>
                </View>
                <Text style={{ fontWeight: 'bold', marginLeft: 15, fontFamily: 'Prata-Regular' }}>'She was forever pushing her hair out of her eyes'</Text>
            </View>
        </View>
    );
}

export default Detail;