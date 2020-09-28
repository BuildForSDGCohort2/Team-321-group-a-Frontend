import React, { useState } from 'react'
import { Button, Divider, Grid, Header, Image, Transition, Modal } from 'semantic-ui-react'

const ImageComponent = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <Modal
                basic
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                size='small'
                trigger={<Grid>
                    <Grid.Column computer={8}>
                        <Header as="h3">Image document</Header>
                    </Grid.Column>
                    <Grid.Column computer={8}>
                        <Button floated="right">View Image</Button>
                    </Grid.Column>
                </Grid>}
            >
                <Modal.Content>
                    <Image
                        src="https://homepages.cae.wisc.edu/~ece533/images/boy.bmp"
                        as="a"
                        size="big"
                        href="https://homepages.cae.wisc.edu/~ece533/images/boy.bmp"
                        target="_blank"
                    />
                </Modal.Content>
            </Modal>
        </div>
    )
}

export default ImageComponent;