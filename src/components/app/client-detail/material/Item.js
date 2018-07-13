import React from 'react'
import { connect } from 'react-redux'
import { deleteClientInfo, toggleActive } from '../../../../actions'
import { SwipeRow, Button, Icon, View, Text } from 'native-base'

class Item extends React.Component {
    _toggleActive = () => {
        const setStatus = this.props.material.completed ? false : true
        this.props.toggleActive( 'material',setStatus, this.props.clientId, this.props.material.uid)
    }

    render(){
        return(
            <SwipeRow
                style={{backgroundColor:this.props.material.completed ? '#2e95f9' : 'white'}}
                leftOpenValue={75}
                rightOpenValue={-75}
                left={
                    <Button success onPress={() => this._toggleActive()}>
                        <Icon active name={this.props.material.completed ? "checkmark-circle" : "radio-button-off"} />
                    </Button>
                }
                body={
                    <View>
                        <Text>{this.props.material.content}</Text>
                    </View>
                }
                right={
                    <Button danger onPress={() => this.props.deleteClientInfo('material',this.props.clientId,this.props.material.uid)}>
                        <Icon active name="trash" />
                    </Button>
                }
            />
        )
    }
}

export default connect(null,{deleteClientInfo, toggleActive})(Item)