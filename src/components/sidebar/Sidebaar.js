
import React from 'react'
import './Sidebar.css';
import { Button } from 'semantic-ui-react'

function Sidebar(props) {
    return (
      <div className='demo-app-sidebar'>
        {props.nombre}
        <input onChange={(event) => props.updateNombre(event.target.value)}></input>
        <button onClick={() => props.updateNombre('New data')}>Cambiar</button>
        <Button primary>Primary</Button>
      </div>
    )
  }

  export default Sidebar;