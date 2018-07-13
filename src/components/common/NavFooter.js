import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logOut } from '../../actions'
import { Text, Footer, FooterTab, Button, Icon } from 'native-base'
import { Actions } from 'react-native-router-flux'

class NavFooter extends Component {
    render() {
        return(
            <Footer style={styles.footer}>
                <FooterTab>
                    <Button vertical
                        onPress={() => Actions.clients()}
                    >
                        <Icon name="menu" />
                        <Text>Index</Text>
                    </Button>
                    <Button vertical
                        onPress={() => this.props.logOut()}
                    >
                        <Icon name="exit" />
                        <Text>Log Out</Text>
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
}

const styles = {
    footer: {
        backgroundColor: 'white'
    }
}

export default connect(null, {logOut})(NavFooter)