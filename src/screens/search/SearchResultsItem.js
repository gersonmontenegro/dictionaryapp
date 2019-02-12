import React, { PureComponent } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setDetail } from 'src/actions';

class SearchResultsItem extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ height: 40, justifyContent: 'center', borderBottomColor: 'gray', borderBottomWidth: 1 }}>
                <TouchableHighlight onPress={this.onClickItem}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'Prata-Regular', marginLeft: 5, color: 'black' }}>{this.props.word}</Text>
                        <Text style={{ fontFamily: 'Prata-Regular', marginLeft: 5, color: 'gray' }}>{this.props.lexicalCategory}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }

    onClickItem = () => {
        const { word, lexicalCategory, senses } = this.props;
        this.props.setDetail({ word, lexicalCategory, senses });
        console.debug('>', this.props.navigation);
    }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators(
        {
            setDetail
        },
        dispatch
    )
);

const maptStateToProps = (state) => {
    const { currentDetail } = state;
    return { currentDetail };
}

export default connect(maptStateToProps, mapDispatchToProps)(SearchResultsItem);