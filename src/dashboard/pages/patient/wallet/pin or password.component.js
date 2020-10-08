import React, { useState } from "react";
import {
  Container,
  Button,
  Divider,
  Form,
  Grid,
  Segment,
  Icon,
} from "semantic-ui-react";
import { LabelInputField } from "react-semantic-redux-form";
import { Field, reduxForm } from "redux-form";

import { validate } from "../../../../components/validator/validator";
// import "./pin-or-pass.styles.css";

const PinOrPass = (props) => {
  const [degit, setdegit] = useState(false);

  const onSubmit = ({ Pin, Password }) => {
    degit ? console.log(Password) : console.log(Pin);
  };

  const { submitting, handleSubmit } = props;
  return (
    <div>
      <Container style={{ marginTop: "2%" }}>
        <Grid textAlign="center">
          <Grid.Column mobile={16} computer={8}>
            <Segment placeholder>
              <Grid columns={2} relaxed="very" stackable>
                <Grid.Column mobile={4} desktop={8} computer={8}>
                  <Form size="large" onSubmit={handleSubmit(onSubmit)}>
                    <Field
                      fluid
                      name={degit ? "Password" : "Pin"}
                      component={LabelInputField}
                      label={{
                        content: <Icon id="custom-icon" name="mail" />,
                      }}
                      labelPosition="left"
                      placeholder={degit ? "Password" : "Pin"}
                      type="password"
                    />
                    <Button
                      id="custom-btn"
                      submitting={submitting}
                      size="large"
                    >
                      Submit
                    </Button>
                  </Form>
                </Grid.Column>

                <Grid.Column
                  verticalAlign="middle"
                  mobile={4}
                  desktop={8}
                  computer={8}
                >
                  <Button
                    content={degit ? "Use Pin" : "Use Password"}
                    icon="signup"
                    size="big"
                    onClick={() => setdegit(!degit)}
                  />
                </Grid.Column>
              </Grid>

              <span className="control-divider">
                {" "}
                <Divider vertical>Or</Divider>{" "}
              </span>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

export default reduxForm({
  form: "PinOrPassForm", // a unique identifier for this form
  validate,
})(PinOrPass);
