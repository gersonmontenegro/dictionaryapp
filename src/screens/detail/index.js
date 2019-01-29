import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import GenericHeader from 'src/components/GenericHeader';
import Detail from './Detail';
import Pronuntiation from './Pronuntiation';

class DetailScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, definition: "asd 1", example: "adasd 1" },
                { id: 2, definition: "asd 2", example: "adasd 2" },
                { id: 3, definition: "Continually", example: "'She was forever pushing her hair out of her eyes'" }
            ]
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <GenericHeader title="Forever" />
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <Detail title="ADVERB" data={this.state.data} />
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
                    <Pronuntiation pron="forever /fəˈrɛvə/" />
                </View>
            </View>
        );
    }
}

export default DetailScreen;