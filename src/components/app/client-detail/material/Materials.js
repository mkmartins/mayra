import React from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import Item from './Item'
import { createClientInfo, deleteClientInfo, fetchClientMaterials, inputClientInfo } from '../../../../actions'
import { Container, Header, Content, SwipeRow, View, Text, Body, Button, Title, Left, Right, Icon, ListItem, Input } from 'native-base'

class Material extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            add: false
        }
    }

    componentWillMount() {
      const id = this.props.client.uid
      this.props.fetchClientMaterials( id )
    }

    _createClientInfo = () => {
      this.props.createClientInfo('material',this.props.client.uid,this.props.material)
      this.setState({add:false})
    }

    _deleteClientInfo = (type,id) => {
      this.props.deleteClientInfo(type,id)
    }

    _keyExtractor = (item, index) => item.uid

    _renderItem = ({item}) => (
        <Item
          material={item}
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
                  //value={this.props.content}
                  onChangeText={text=>this.props.inputClientInfo('material', text)}
                />
                <Button transparent
                  onPress={this._createClientInfo}
                >
                  <Icon active name='add-circle' />
                </Button>
              </ListItem>
              }
              <FlatList 
                data={this.props.materials}
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
  const materials = _.map(state.client.materials, (val, uid) => {
      return {...val, uid}
  })
  const {material} = state.client
  return {
      materials, material
  }
}


export default connect(mapStateToProps,{ createClientInfo, deleteClientInfo, fetchClientMaterials, inputClientInfo })(Material)