import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View, LayoutAnimation, Platform, UIManager} from 'react-native';
import {connect} from 'react-redux';
import {CardSection} from './common';
import * as actions from '../actions';

class ListItem extends Component {

    componentWillUpdate() {
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        } else if (Platform.OS === 'ios') {
            LayoutAnimation.spring();
        }

    }

    renderDescription() {
        const {library, expanded} = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={{flex: 1}}>
                        {library.item.description}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {

        const {id, title} = this.props.library.item;
        const {titleStyle} = styles;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    const expanded = state.selectedLibraryId === ownProps.library.item.id;

    return {expanded};
};

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default connect(mapStateToProps, actions)(ListItem);