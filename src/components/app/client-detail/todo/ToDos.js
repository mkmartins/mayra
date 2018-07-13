import React from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import Item from './Item'
import { fetchClientTodos, deleteClientInfo, inputClientInfo, createClientInfo } from '../../../../actions'
import { Container, Header, Content, SwipeRow, View, Text, Body, Button, Title, Left, Right, Icon, ListItem, Input } from 'native-base'

class ToDo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            add: false,
            todos: []
        }
    }

    componentWillMount() {
      const id = this.props.client.uid
      this.props.fetchClientTodos( id )
      
    }

    _createClientInfo = () => {
      this.props.createClientInfo('todo',this.props.client.uid,this.props.todo)
      this.setState({add:false})
    }

    _deleteClientInfo = (type,id) => {
      this.props.deleteClientInfo(type,id)
    }

    _keyExtractor = (item, index) => item.uid

    _renderItem = ({item}) => (
        <Item
          todo={item}
          clientId = {this.props.client.uid}
        />
    )

    render(){
        return(
            <Container>
            <Header>
              <Left />
              <Body>
                  <Title>Add:</Title>
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
              {this.state.add &&            
              <ListItem last>
                <Input 
                  placeholder='Client Initials'
                  onChangeText={text=>this.props.inputClientInfo('todo', text)}
                />
                <Button transparent
                  onPress={this._createClientInfo}
                >
                  <Icon active name='add-circle' />
                </Button>
              </ListItem>
              }
              <FlatList 
                data={this.props.todos}
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
  const todos = _.map(state.client.todos, (val, uid) => {
    return {...val, uid}
  })
  const {todo} = state.client
  return {
      todos, todo
  }
}


export default connect(mapStateToProps,{ createClientInfo, deleteClientInfo, fetchClientTodos, inputClientInfo })(ToDo)