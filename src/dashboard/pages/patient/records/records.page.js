import React, { useState } from "react";
import { Grid, Form, Divider, Header, Icon, Image } from "semantic-ui-react";

import AudioComponent from "./audio-component";
import FileComponent from "./file-component";
import ImageComponent from "./image-component";
import VideoComponent from "./video-component";

const RecordsPage = () => {

    return (
        <div>
            <Grid container centered >
                <Grid.Column mobile={16} tablet={8} computer={8}>
                    <Form>
                        <Form.Field>
                            <label>Enter Record Code</label>
                            <input placeholder="optional" />
                        </Form.Field>
                    </Form>
                    <Divider section horizontal>
                        <Header as="h4">
                            <Icon name="folder" />
                            Uploads
                        </Header>
                    </Divider>
                    <ImageComponent />
                    <FileComponent />
                    <VideoComponent />
                    <AudioComponent />
                </Grid.Column>
            </Grid>
        </div>
    )
}


export default RecordsPage;