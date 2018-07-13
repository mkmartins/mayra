import React from 'react'
import { Scene, Router, Stack } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { userLoggedIn } from './actions'
//List of components
import InitialScreen from './components/auth/InitialScreen'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Clients from './components/app/Clients'
import Splash from './components/splash/Splash'
import ClientDetail from './components/app/client-detail/ClientDetail'
import NotePad from './components/app/client-detail/note/NotePad'
import Notes from './components/app/client-detail/note/Notes'
import CreateNotePad from './components/app/client-detail/note/CreateNotePad';

class RoutesComponent extends React.Component{

    componentWillMount() {
        //this.props.userLoggedIn()
    }

    render() {
        return(
            <Router>
                <Stack key="root" panHandlers={null}>
                    <Scene key='initialScreen' component={InitialScreen} title='Initial Screen' hideNavBar={true} />
                    <Scene key='splash' component={Splash} title='Splash' hideNavBar={true}/>
                    <Scene key='login' component={SignIn} title='Log In' hideNavBar={true} />
                    <Scene key='signup' component={SignUp} title='Sign Up' hideNavBar={true}/>
                    <Scene key='clients' component={Clients} title='Clients' hideNavBar={true}/>
                    <Scene key='create_note' component={CreateNotePad} title='CreateNotePad' hideNavBar={true} />
                    <Scene key='notepad' component={NotePad} title='NotePad' hideNavBar={true} />
                    <Scene key='notes' component={Notes} title='Notes' hideNavBar={true} />
                    <Scene key='client_detail' component={ClientDetail} title='Client Detail' hideNavBar={true}/>
                </Stack>
            </Router>
        )
    }
}

export default connect(null,{ userLoggedIn })(RoutesComponent)