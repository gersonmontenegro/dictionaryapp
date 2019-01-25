import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import GenericHeader from 'src/components/GenericHeader';

class DetailScreen extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <GenericHeader title="Forever" />
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <View style={{ marginLeft: 5, marginRight: 5 }}>
                        <Text style={{ color: 'red', borderBottomColor: 'gray', borderBottomWidth: 1 }}>ADVERB</Text>
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ width: 20, fontSize: 12, fontWeight: 'bold' }}>1</Text>
                                <Text style={{ fontFamily: 'Prata-Regular' }}>For all future time...</Text>
                            </View>
                            <Text style={{ fontWeight: 'bold', marginLeft: 15, fontFamily: 'Prata-Regular' }}>'She can eat that forever!'</Text>
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ width: 20, fontSize: 12, fontWeight: 'bold' }}>2</Text>
                                <Text style={{ fontFamily: 'Prata-Regular' }}>Continually</Text>
                            </View>
                            <Text style={{ fontWeight: 'bold', marginLeft: 15, fontFamily: 'Prata-Regular' }}>'She was forever pushing her hair out of her eyes'</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 5, marginRight: 5 }}>
                        <Text style={{ color: 'red', borderBottomColor: 'gray', borderBottomWidth: 1 }}>ADJECTIVE</Text>
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'Prata-Regular' }}>Lasting or permanent</Text>
                            </View>
                            <Text style={{ fontWeight: 'bold', marginLeft: 15, fontFamily: 'Prata-Regular' }}>'these puppies need a forever home'</Text>
                            <Text style={{ fontWeight: 'bold', marginLeft: 15, fontFamily: 'Prata-Regular' }}>'parenting is a forever job'</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 10, marginLeft: 5 }}>
                        <Text style={{ fontFamily: 'Prata-Regular', fontWeight: 'bold', color: 'black' }}>Pronuntiation</Text>
                        <Text style={{ fontFamily: 'Prata-Regular', fontWeight: 'bold', color: 'black' }}>forever /fəˈrɛvə/</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default DetailScreen;