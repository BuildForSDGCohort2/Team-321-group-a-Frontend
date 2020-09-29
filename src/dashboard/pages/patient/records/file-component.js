import React, { useState } from 'react'
import FilePreviewer from 'react-file-previewer';
import { Button, Grid, Header, Modal } from 'semantic-ui-react'

const FileComponent = () => {
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
                    <Grid.Column mobile={8} tablet={8} computer={8}>
                        <Header as="h4">Document</Header>
                    </Grid.Column>
                    <Grid.Column mobile={8} tablet={8} computer={8}>
                        <Button floated="right">View</Button>
                    </Grid.Column>
                </Grid>}
            >
                <Modal.Content>
                    <FilePreviewer file={{
                        url: "https://cors-anywhere.herokuapp.com/http://www.fao.org/3/i3261e/i3261e07.pdf"
                    }}
                    />
                </Modal.Content>
            </Modal>
        </div>
    )
}

export default FileComponent;