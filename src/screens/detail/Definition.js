import React from 'react';
import { View, Text } from 'react-native';

const Definition = ({ id, definition, example }) => {
    return (
        <View key={id}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ width: 20, fontSize: 12, fontWeight: 'bold' }}>{id}</Text>
                <Text style={{ fontFamily: 'Prata-Regular' }}>{definition}</Text>
            </View>
            <Text style={{ fontWeight: 'bold', marginLeft: 15, fontFamily: 'Prata-Regular' }}>{example}</Text>
        </View>
    );
}

function loadDict() {
    let url = "https://od-api.oxforddictionaries.com/api/v1/entries/en/forever/regions=us";
    let options = {
        headers: { "app_id": "9d8a319a", "app_key": "5e52771af8525d683fafa9353a4ccab8" },
        method: 'GET'
    }
    fetch(url, options)
        .then(r => {
            if (r.status === 200) {
                return r.json();
            } else {
                console.log("Error fetching...");
            }
        })
        .then(data => {
            console.log(data);
        }).catch(e => {
            console.log("E", JSON.stringify(e));

        });
}
export default Definition;