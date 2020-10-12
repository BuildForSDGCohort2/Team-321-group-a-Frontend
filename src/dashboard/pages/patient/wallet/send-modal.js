import React, { useState } from "react";
import { Button, Header, Image, Modal, Icon, Grid, Form, Input } from "semantic-ui-react";

function SendModal() {
  const [open, setOpen] = useState(false);
  const [walletID, setWalletID] = useState('');
  const [pin, setPin] = useState('');

  const handleSubmit = () => {

  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="tiny"
      trigger={
        <Button color="purple">
          <Icon name="arrow alternate circle right" />
        </Button>
      }
    >
      <Modal.Header>Credit Details</Modal.Header>
      <Modal.Content image>
        <Image
          size="medium"
          src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
          wrapped
        />
        <Modal.Description>
          <Header>User Transfer Details</Header>
          <Form onSubmit={handleSubmit}>
                <Grid>
                    <Grid.Column mobile={16} tablet={16} computer={16}>
                        <Input name="walletID" placeholder="wallet id" required onChange={(e) => setWalletID(e.target.value)}/>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={16} computer={16}>
                        <Input name="pin" placeholder="pin" required onChange={(e) => setWalletID(e.target.value)}/>
                    </Grid.Column>
                </Grid>
            </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Ok"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default SendModal;
