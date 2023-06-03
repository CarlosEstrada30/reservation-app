import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import LoginGoogle from './Login.google'
import styles from './Login.module.css'

const LoginForm = () => (
  <Grid centered style={{ height: '100vh' }}>
    <Grid.Row verticalAlign='middle'>
    <Grid.Column width={4}>
      <Header as='h2' color='teal' textAlign='center'>
      <i class="calendar alternate outline icon"></i>Reservation Log-in
      </Header>
      <Segment stacked className={styles.segmentLogin}>
        <LoginGoogle size='large'/>
      </Segment>
    </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default LoginForm