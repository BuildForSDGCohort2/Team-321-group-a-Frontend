import React, { useState } from "react";
import { Button, Embed, Grid, Header, Modal } from "semantic-ui-react";

const VideoComponent = () => {
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
                        <Header as="h4">Video File</Header>
                    </Grid.Column>
                    <Grid.Column mobile={8} tablet={8} computer={8}>
                        <Button floated="right">View</Button>
                    </Grid.Column>
                </Grid>}
            >
                <Modal.Content>
                    <Embed
                        id="jwWpTAXu-Sg"
                        placeholder="https://de.betator.com/media/news/YouTube_Video_Thumbnail13_31995A3E0A56A.png"
                        source="youtube"
                    />
                </Modal.Content>
            </Modal>
        </div>
    )
}

export default VideoComponent;