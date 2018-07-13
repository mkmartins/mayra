import React from 'react'
import { TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { SwipeRow, Button, Icon, View, Text, ListItem } from 'native-base'
import { Actions } from 'react-native-router-flux';

class Item extends React.Component {

    _editNote(content, contentId, clientId, notes) {
        Actions.notepad({content, contentId, clientId, notes, client: this.props.client})
    }

    render(){
        return(
            <ListItem
                onPress={() => this._editNote(this.props.note.content, this.props.note.uid, this.props.clientId)}
            >
                <Text>{this.props.note.content.substr(0, 35) + '...'}</Text>
            </ListItem>
        )
    }
}

export default Item