import React from 'react'
import { TouchableOpacity } from 'react-native'
import { List, ListItem, Text, Body, Left, Right, Icon } from 'native-base'
import { Actions } from 'react-native-router-flux';

class Client extends React.Component {
    _onPress = () => {
        Actions.client_detail({client:this.props.client})
      };
    render() {
        return(
            <ListItem
                onPress={this._onPress}
            >
                <Body>
                    {/* the second 'client' below means initials. so, client.initials */}
                    <Text>{this.props.client.client}</Text>
                </Body>
                <Right>
                    <Icon name="arrow-forward" />
                </Right>
            </ListItem>                  
        )
    }
}

export default Client