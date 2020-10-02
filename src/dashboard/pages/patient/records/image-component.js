import React, { useState } from "react";
import { Button, Grid, Header, Image, Modal } from "semantic-ui-react";

const ImageComponent = () => {
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
                        <Header as="h4">Image</Header>
                    </Grid.Column>
                    <Grid.Column mobile={8} tablet={8} computer={8}>
                        <Button floated="right">View</Button>
                    </Grid.Column>
                </Grid>}
            >
                <Modal.Content>
                    <Image
                        src="https://knect365.imgix.net/article/images/cacheable/bd64cf28-498e-44df-be77-3e74cd079783-featured-49f3a3c3ecd5bdb5a10037c1b80de2ff.jpg?fit=max&or=0&compress=true"
                        as="a"
                        size="big"
                        href="https://knect365.imgix.net/article/images/cacheable/bd64cf28-498e-44df-be77-3e74cd079783-featured-49f3a3c3ecd5bdb5a10037c1b80de2ff.jpg?fit=max&or=0&compress=true"
                        target="_blank"
                    />
                </Modal.Content>
            </Modal>
        </div>
    );
}

export default ImageComponent;