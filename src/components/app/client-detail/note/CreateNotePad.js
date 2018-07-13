import React from 'react'
import { TextInput, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { patchClientInfo, inputClientInfo, createClientInfo } from '../../../../actions'
import { Text, Container, Header, Left, Button, Icon, Body, Title, Right } from 'native-base'
import { Actions } from 'react-native-router-flux';

class NotePad extends React.Component {

    _createClientInfo = () => {
        if (this.props.note != "") {
            this.props.createClientInfo('note',this.props.clientId,this.props.note)
        }
        Actions.pop({client: this.props.client})
    }


    render() {
        return(
            <Container>
                <Header>
                    <Left>
                        <Button transparent
                            onPress={this._createClientInfo}
                        >
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title><Text>NotePad</Text></Title>
                    </Body>
                    <Right/>
                </Header>
                    <TextInput 
                        placeholder='Todays date'
                        style={{height:Dimensions.get('window').height,width:Dimensions.get('window').width, backgroundColor:'#00f7ff'}}
                        editable = {true}
                        onChangeText={text=>this.props.inputClientInfo('note', text)}
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

export default connect(mapStateToProps, { createClientInfo, inputClientInfo })(NotePad)