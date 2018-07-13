import React from 'react'
import { TextInput, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { patchClientInfo, inputClientInfo, deleteClientInfo } from '../../../../actions'
import { Text, Container, Header, Left, Button, Icon, Body, Title, Right } from 'native-base'
import { Actions } from 'react-native-router-flux';

class NotePad extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            inputValue: this.props.content
        }
    }

    _patchClientInfo = () => {
        this.props.patchClientInfo(this.props.clientId, 'note', this.props.contentId, this.state.inputValue)
        Actions.pop({client: this.props.client})
    }

    _updateNote = text => {
        this.setState({inputValue: text})
        this.props.inputClientInfo('note', this.state.inputValue)
    }

    _deleteClientInfo = () => {
        this.props.deleteClientInfo('note',this.props.clientId,this.props.contentId)
        Actions.pop({client: this.props.client})
    }

    render() {
        return(
            <Container>
                <Header>
                    <Left>
                        <Button transparent
                            onPress={this._patchClientInfo}
                        >
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title><Text>NotePad</Text></Title>
                    </Body>
                    <Right>
                        <Button transparent
                            onPress={() => this._deleteClientInfo()}
                        >
                            <Icon name='trash' style={{color: 'red'}}/>
                        </Button>
                    </Right>
                </Header>
                    <TextInput 
                        placeholder='Todays date'
                        style={{height:Dimensions.get('window').height,width:Dimensions.get('window').width, backgroundColor:'#00f7ff'}}
                        editable = {true}
                        value={this.state.inputValue}
                        onChangeText={text=>this._updateNote(text)}
                        multiline = {true}
                        numberOfLines = {10}
                    />
            </Container>   
        )
    }
}

mapStateToProps = state => {
    return { 
        note: state.client.note
    }
}

export default connect(mapStateToProps, { patchClientInfo, inputClientInfo, deleteClientInfo })(NotePad)