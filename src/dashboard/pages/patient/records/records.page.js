import React,{useState} from "react";
import { Grid, Form, Divider, Header, Icon, Image } from "semantic-ui-react";

import Sidebar from "../../../sidebar/Sidebar";
import ImageComponent from "./image-component";

const RecordsPage = () => {

    return (
        <div>
            <Sidebar />
            <Grid container centered style={{ marginTop: "2%" }}>
                <Grid.Column computer={8}>
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
                </Grid.Column>
            </Grid>
        </div>
    )
}


export default RecordsPage;