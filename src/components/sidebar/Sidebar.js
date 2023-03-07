import React from 'react'
import { Link } from 'react-router-dom';
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Input,
  Image,
  Label,
  Menu,
  Table
} from "semantic-ui-react";

function Sidebar(props) {

  // const handleToggleDropdownMenu = () => {
  //   let newState = Object.assign({}, this.state);
  //   if (newState.dropdownMenuStyle.display === "none") {
  //     newState.dropdownMenuStyle = { display: "flex" };
  //   } else {
  //     newState.dropdownMenuStyle = { display: "none" };
  //   }

  //   this.setState(newState);
  // };
    return (
      <div className="App">
            <Grid padded className="tablet computer only">
              <Menu borderless inverted fluid fixed="top">
                <Menu.Item header as="a">
                  Reservation
                </Menu.Item>
                <Menu.Menu position="right">
                  <Menu.Item as="a">Carlos Estrada
                  <Image size='mini circular' src='https://lh3.googleusercontent.com/a/AGNmyxa3XPliFFZKUQWvfDB5dcue9tjjcvKuuJSNSmhi=s96-c' style={{ marginLeft: '1.5em' }} />
                  </Menu.Item>
                </Menu.Menu>
              </Menu>
            </Grid>
    
            <Grid padded className="mobile only">
              <Menu borderless inverted fluid fixed="top">
                <Menu.Item header as="a">
                  Reservation
                </Menu.Item>
                <Menu.Menu position="right">
                  <Menu.Item>
                    <Button
                      basic
                      inverted
                      icon
                      toggle
                    >
                      <Icon name="content" />
                    </Button>
                  </Menu.Item>
                </Menu.Menu>
                <Menu
                  borderless
                  fluid
                  inverted
                  vertical
                >
                  <Menu.Item as="a">Calendar</Menu.Item>
                </Menu>
              </Menu>
            </Grid>
    
            <Grid padded>
              <Grid.Column
                tablet={3}
                computer={3}
                only="tablet computer"
                id="sidebar"
              >
                <Menu vertical borderless fluid text>
                  <Menu.Item active as={Link} to='/calendar'>
                    Calendar
                  </Menu.Item>
                </Menu>
              </Grid.Column>
    
              <Grid.Column
                mobile={16}
                tablet={13}
                computer={13}
                floated="right"
                id="content"
              >
                <Grid padded>
                  <Grid.Row>
                    <Header dividing size="huge" as="h1">
                      {props.title}
                    </Header>
                  </Grid.Row>
                  <Grid.Row textAlign="center"> 
                    {props.children}
                  </Grid.Row>
                </Grid>
              </Grid.Column>
            </Grid>
          </div>
    )

  }

  export default Sidebar;