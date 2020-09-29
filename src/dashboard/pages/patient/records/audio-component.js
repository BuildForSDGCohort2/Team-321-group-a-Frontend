import React, { useState } from "react";
import ReactAudioPlayer from 'react-audio-player';
import { Button, Grid, Header, Modal } from "semantic-ui-react";

const AudioComponent = () => {

    const [open, setOpen] = useState(false)
    return (
        <div>
            <Modal
                basic
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                size="small"
                trigger={<Grid>
                    <Grid.Column mobile={8} tablet={8} computer={8}>
                        <Header as="h4">Audio File</Header>
                    </Grid.Column>
                    <Grid.Column mobile={8} tablet={8} computer={8}>
                        <Button floated="right">View</Button>
                    </Grid.Column>
                </Grid>}
            >
                <Modal.Content>
                    <ReactAudioPlayer
                        src="http://www.modernmanna.org/wp-content/uploads/2016/08/79-Health-Immunity-Danny-Vierra.mp3"
                        autoPlay
                        controls
                    />
                </Modal.Content>
            </Modal>
        </div>
    )
}

export default AudioComponent;