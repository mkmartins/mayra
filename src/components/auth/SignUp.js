import React, {Component} from 'react'
import { connect } from 'react-redux'
import {onTextChange, onSignUpPress} from '../../actions'
import { Container, Header, Content, Form, Item, Input, Button, Text } from 'native-base' //Using native-base as ui-kit

class SignUp extends Component{

    onSignUpPress = () => {
        this.props.onSignUpPress(this.props.email, this.props.password)
    }

    render() {
        return (
            <Container>
                <Header />
                <Content style={{backgroundColor:"white"}}>
                    <Form>
                        <Item>
                            <Input 
                                placeholder="Username" 
                                value={this.props.email}
                                onChangeText={text => this.props.onTextChange(text, 'email')}
                            />
                        </Item>
                        <Item>
                            <Input 
                                placeholder="Password"
                                value={this.props.password} 
                                onChangeText={text => this.props.onTextChange(text, 'password')}
                            />
                        </Item>
                        <Button full warning
                            onPress={this.onSignUpPress}
                        >
                            <Text>Sign Up</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        )
    }
}

mapStateToProps = state => {
    const {email, password, error, loading} = state.auth
    return{ email, password, error, loading }
}

export default connect(mapStateToProps, {onTextChange, onSignUpPress})(SignUp)