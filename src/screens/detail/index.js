import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import GenericHeader from 'src/components/GenericHeader';
import Detail from './Detail';
import Pronuntiation from './Pronuntiation';
import { connect } from 'react-redux';

class DetailScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, definition: "asd 1", example: "adasd 1" },
                { id: 2, definition: "asd 2", example: "adasd 2" },
                { id: 3, definition: "Continually", example: "'She was forever pushing her hair out of her eyes'" }
                        { e: 'parenting is a forever job' }
            ]
        }
    extractingDefinition(data) {
    }

    extractingLexicalCategory({ lexicalCategory }) {
        return lexicalCategory.toString().toUpperCase();
    }

    extractingPronuntiation({ pronunciations }) {
        return pronunciations;
    }

    extractingWord({ word }) {
        return word;
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <GenericHeader title={this.props.results.currentDetail.word} />
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <Detail title={this.extractingLexicalCategory(this.props.results.currentDetail)} data={this.props.results.currentDetail.senses} />
                    {/* <View style={{ marginLeft: 5, marginRight: 5 }}>
                        <Text style={{ color: 'red', borderBottomColor: 'gray', borderBottomWidth: 1 }}>ADJECTIVE</Text>
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'Prata-Regular' }}>---{this.extractingDefinition(this.props.results.currentDetail.senses[0])}---</Text>
                            </View>
                            <Text style={{ fontWeight: 'bold', marginLeft: 15, fontFamily: 'Prata-Regular' }}>'these puppies need a forever home'</Text>
                            <Text style={{ fontWeight: 'bold', marginLeft: 15, fontFamily: 'Prata-Regular' }}>'parenting is a forever job'</Text>
                        </View>
                    </View> */}
                    <Pronuntiation pron="forever /fəˈrɛvə/" />
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const { results } = state;
    return { results };
}

export default connect(mapStateToProps)(DetailScreen);