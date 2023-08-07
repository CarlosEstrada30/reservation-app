import React, { useState } from 'react';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Button, TextField, Typography, Divider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function ModalForm(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        onClose={() => props.setOpen(false)}
        onOpen={() => props.setOpen(true)}
        open={props.open}
        aria-labelledby="responsive-dialog-title"
        fullWidth maxWidth="md"
      >
        <DialogTitle id="responsive-dialog-title">
        <Typography gutterBottom variant="h4" align="center">
              Nueva Reservacion {props.start}
            </Typography>
            <Divider />
        </DialogTitle>
        <form onSubmit={e => props.handleEventSubmit(e)}>
          <DialogContent>
            <div>
              <Typography variant="h6">Nombre</Typography>
              <TextField
                placeholder="First Name"
                onChange={(event) => props.setTitle(event.target.value)}
                value={props.title}
                variant="outlined"
                margin="normal"
                fullWidth
              />
            </div>
            <div>
              <Typography variant="h6">Telefono</Typography>
              <TextField
                placeholder="Last Name"
                onChange={(event) => props.setPhone(event.target.value)}
                value={props.phone}
                variant="outlined"
                margin="normal"
                fullWidth
              />
            </div>
          </DialogContent>
          <DialogActions>
          {props.token && (
              <Button
                color="secondary"
                onClick={() => props.handleDeleteEvent()}
              >
                Eliminar
              </Button>
            )}
            <Button color="secondary" onClick={() => props.setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit" variant="outlined">
              {props.token ? "Actualizar" : "Reservar"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

// import React from 'react'
// import { Button, Header, Image, Modal,  Checkbox, Form, Label } from 'semantic-ui-react'

// function ModalExampleModal(props) {

//   return (
//     <Modal
//       as={Form}
//       onSubmit={e => props.handleEventSubmit(e)}
//       onClose={() => props.setOpen(false)}
//       onOpen={() => props.setOpen(true)}
//       open={props.open}
//     >
//       <Modal.Header>Reservar<Label size='medium'>{props.start}</Label></Modal.Header>
//       <Modal.Content>
//                 <Form.Field>
//                 <label>Nombre</label>
//                 <input placeholder='First Name' onChange={(event) => props.setTitle(event.target.value)} value={props.title} />
//                 </Form.Field>
//                 <Form.Field>
//                 <label>Telefono</label>
//                 <input placeholder='Last Name' onChange={(event) => props.setPhone(event.target.value)} value={props.phone}/>
//                 </Form.Field>
//       </Modal.Content>
//       <Modal.Actions>
//       {props.token &&
//       <Button color='red' onClick={() => props.handleDeleteEvent()}>
//           Eliminar
//         </Button>
//         }
//         <Button color='black' onClick={() => props.setOpen(false)}>
//           Cerrar
//         </Button>
//         <Button
//             type='submit'
//           content={props.token ? "Actualizar": "Reservar"}
//           labelPosition='right'
//           icon='checkmark'
//           positive
//         />
//       </Modal.Actions>
//     </Modal>
//   )
// }

// export default ModalExampleModal
