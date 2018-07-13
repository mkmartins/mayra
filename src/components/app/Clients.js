import React, { Component } from 'react'
import { FlatList } from 'react-native'
import _ from 'lodash'
import { connect } from 'react-redux'
import { addInitials, addClient, fetchClients } from '../../actions'
import Nav from '../common/NavFooter'
import Client from './Client'
import { Container, Header, Content, List, ListItem, Text, Body, Title, Button, Icon, Right, Left, Input } from 'native-base'

class Clients extends Component {
  constructor(props){
    super(props)
    this.state = {
      add: false
    }
  }

  componentWillMount() {
    this.props.fetchClients()
  }

  addClient = () => {
    this.props.addClient(this.props.initials)
    this.setState({add:false})
  }

  _keyExtractor = (item, index) => item.uid

  renderItem = ({item}) => (
      <Client
          client={item}
      />
  )

  render() {
    return (
      <Container>
        <Header>
            <Left />
            <Body>
                <Title>Clients</Title>
            </Body>
            <Right>
                {!this.state.add &&
                  <Button transparent
                    onPress={()=>this.setState({add:true})}
                  >
                    <Icon name='add' />
                  </Button>
                }
                {this.state.add &&
                  <Button transparent
                    onPress={()=>this.setState({add:false})}
                  >
                    <Icon name='close' />
                  </Button>
                }
            </Right>
        </Header>
        <Content>
          <List>
            {this.state.add &&            
            <ListItem last>
              <Input 
                placeholder='Client Initials'
                maxLength={3}
                value={this.props.initials}
                onChangeText={text=>this.props.addInitials(text)}
              />
              <Button transparent
                onPress={this.addClient}
              >
                <Icon active name='add-circle' />
              </Button>
            </ListItem>
            }
            <ListItem itemDivider>
              <Text>Clients List</Text>
            </ListItem>
            <FlatList 
              data={this.props.clients}
              renderItem={this.renderItem}
              keyExtractor={this._keyExtractor}
              ListEmptyComponent={
                <Text>You are awesome ...</Text>
              }
            />
          </List>
        </Content>
        <Nav />
      </Container>
    )
  }
}

mapStateToProps = state => {
  const clients = _.map(state.clients.clients, (val, uid) => {
    return { ...val, uid }
  })
  const { initials, add } = state.clients
  return {
    initials, add, clients
  }
}

export default connect(mapStateToProps, {addInitials, addClient, fetchClients})(Clients)