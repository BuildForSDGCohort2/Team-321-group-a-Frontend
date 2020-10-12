import React from "react"
import { Button, Header, Icon, Modal } from "semantic-ui-react"

function DeleteAppointment() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      closeIcon
      size="mini"
      open={open}
      trigger={<Button color="red">Delete</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon="archive" content="Delete Appointment" />
      <Modal.Content>
        <p>
          Are you sure you wnat to delete appointment?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={() => setOpen(false)}>
          <Icon name="remove" /> No
        </Button>
        <Button color="green" onClick={() => setOpen(false)}>
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default DeleteAppointment