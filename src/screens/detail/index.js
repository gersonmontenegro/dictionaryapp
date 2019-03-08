import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import GenericHeader from 'src/components/GenericHeader';
import Detail from './Detail';
import Pronuntiation from './Pronuntiation';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

class DetailScreen extends PureComponent {
    constructor(props) {
        super(props);
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
                    <Pronuntiation pron={this.extractingPronuntiation(this.props.results.currentDetail)} word={this.extractingWord(this.props.results.currentDetail)} />
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const { results } = state;
    return { results };
}

export default connect(mapStateToProps)(withNavigation(DetailScreen));