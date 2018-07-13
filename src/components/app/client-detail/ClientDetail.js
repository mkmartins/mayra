import React from 'react'
import { connect } from 'react-redux'
import { fetchClientInfo } from '../../../actions'
import _ from 'lodash'
import Nav from '../../common/NavFooter'
import ToDo from './todo/ToDos'
import Material from './material/Materials'
import Note from './note/Notes'
import { Text, Container, Header, Title, Body, Content, Tabs, Tab, TabHeading, Icon } from 'native-base'

class ClientDetail extends React.Component {
    render() {
        return(
            <Container>
                    <Header hasTabs>
                        <Body>
                            <Title>
                                {/* the second 'client' below means initials. so, client.initials */}
                                {this.props.client.client}
                            </Title>
                        </Body>
                    </Header>
                    <Tabs locked={true}>
                        <Tab heading={ <TabHeading><Icon name="create" /><Text>Notes</Text></TabHeading>}>
                            <Note client={this.props.client}/>
                        </Tab>
                        <Tab heading={ <TabHeading><Icon name="checkbox" /><Text>ToDos</Text></TabHeading>}>
                            <ToDo client={this.props.client}/>
                        </Tab>
                        <Tab heading={ <TabHeading><Icon name="menu" /><Text>Materials</Text></TabHeading>}>
                            <Material client={this.props.client}/>
                        </Tab>
                    </Tabs>
                <Nav />
            </Container>
        )
    }
}

export default ClientDetail