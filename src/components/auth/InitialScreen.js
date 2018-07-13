import React, { Component } from "react";
import { Container, Header, Content, Form, Item, Input, Button, Text } from 'native-base' //Using native-base as ui-kit
import { Actions } from 'react-native-router-flux';

class InitialScreen extends Component{
    render() {
        return (
            <Container>
                <Header />
                <Content style={{backgroundColor:"white"}}>
                <Button full info
                    onPress={Actions.login}
                >
                    <Text>Log In</Text>
                </Button>
                <Button full warning
                    onPress={Actions.signup}
                >
                    <Text>Sign Up</Text>
                </Button>
                </Content>
            </Container>
        )
    }
}

export default InitialScreen