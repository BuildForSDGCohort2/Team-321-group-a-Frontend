import React, { useState } from "react";
import { Radio, Input, Grid, Form } from "semantic-ui-react";

const SearchAtivity = () => {
    const [value, setValue] = useState(null);
    return (
        <div>
            <Grid>
                <Grid.Column mobile={8}>
                    <Form>
                        <Form.Field>
                            <b>{value}</b>
                        </Form.Field>
                        <Form.Field>
                            <Radio
                                label="Search By Name"
                                name="radioGroup"
                                value="name"
                                checked={value === "By Name"}
                                onChange={(e, { value }) => setValue(value)}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Radio
                                label="Or By Date"
                                name="radioGroup"
                                value="date"
                                checked={value === "By Date"}
                                onChange={(e, { value }) => setValue(value)}
                            />
                        </Form.Field>
                        <div style={{ marginBottom: "20px" }}>
                            <Input action="Search" placeholder="Search..." />
                        </div>
                    </Form>
                </Grid.Column>
            </Grid>


        </div>
    )
}

export default SearchAtivity;