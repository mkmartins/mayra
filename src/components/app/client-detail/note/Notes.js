import React from 'react'
import { FlatList, TextInput, Dimensions, Keyboard } from 'react-native'
import { connect } from 'react-redux'
import Item from './Item'
import { fetchClientNotes, deleteClientInfo, inputClientInfo, createClientInfo } from '../../../../actions'
import { Container, Header, Content, SwipeRow, View, Text, Body, Button, Title, Left, Right, Icon, ListItem, Input } from 'native-base'
import { Actions } from 'react-native-router-flux';

class Note extends React.Component{
    componentWillMount() {
      const id = this.props.client.uid
      this.props.fetchClientNotes( id )
    }

    _keyExtractor = (item, index) => item.uid

    _renderItem = ({item}) => (
        <Item
          note={item}
          client = {this.props.client}
          clientId = {this.props.client.uid}
        />
    )

    render(){
        return(
            <Container>
            <Header>
              <Left/>
              <Body>
                  <Title>Add:</Title>
              </Body>
              <Right>
                <Button transparent
                  onPress={()=>Actions.create_note({clientId: this.props.client.uid, note: this.props.note, client: this.props.client})}
                >
                  <Icon name='add' />
                </Button>
              </Right>
            </Header>
            <Content>
              <FlatList 
                data={this.props.notes}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
                ListEmptyComponent={
                  <Text>You are awesome ...</Text>
                }
              />
            </Content>
          </Container>           
        )
    }
}

mapStateToProps = state => {
  const notes = _.map(state.client.notes, (val, uid) => {
    return {...val, uid}
  })

  const {note} = state.client
  return {
      notes, note
  }
}


export default connect(mapStateToProps,{ createClientInfo, deleteClientInfo, fetchClientNotes, inputClientInfo })(Note)