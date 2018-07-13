import React, {Component} from 'react'
import { connect } from 'react-redux'
import {onTextChange, onLoginPress} from '../../actions'
import { Container, Header, Content, Form, Item, Input, Button, Text, Card } from 'native-base' //Using native-base as ui-kit

class SignIn extends Component{

    onLoginPress = () => {
        this.props.onLoginPress(this.props.email, this.props.password)
    }

    render() {
        return (
            <Container>
                <Header />
                <Content style={{backgroundColor:"white"}}>
                    <Form>
                        <Item>
                            <Input 
                                value={this.props.email}
                                placeholder="Username" 
                                onChangeText={text => this.props.onTextChange(text,'email')}
                            />
                        </Item>
                        <Item>
                            <Input 
                                value={this.props.password}
                                placeholder="Password" 
                                onChangeText={text => this.props.onTextChange(text,'password')}
                            />
                        </Item>
                        <Button full info
                            onPress={this.onLoginPress}
                        >
                            <Text>Log In</Text>
                        </Button>
                        {this.props.loading && 
                            <Text> Loading...</Text>
                        }
                        {this.props.error != "" && 
                            <Card style={{backgroundColor:'#ff615e'}}>
                                <Text style={{margin:20, color: 'white'}}>{this.props.error}</Text>
                            </Card>
                        }
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

export default connect(mapStateToProps, {onTextChange, onLoginPress})(SignIn)