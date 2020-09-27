import React from "react";

import { Field, reduxForm } from "redux-form";

import { Form, Icon, Button, Grid, Segment, Header } from "semantic-ui-react";

import { LabelInputField } from "react-semantic-redux-form";

import { validate } from "../../components/validator/validator";
import HeaderComponent from "../../components/header/header.component";

const ForgotPassword = (props) => {
  const { handleSubmit, submitting } = props;

  const onSubmit = (props) => {
    console.log(props);
  };

  return (
    <div>
      <HeaderComponent />
      <Grid padded stacked centered>
        <Grid.Column mobile={16} tablet={8} computer={5}>
          <Segment style={{ marginTop: "100px" }}>
            <Header as="h2">
              Forgot Password?
            </Header>
            <Form size="large" onSubmit={handleSubmit(onSubmit)}>
              <Field
                fluid
                name="email"
                component={LabelInputField}
                label={{
                  content: <Icon id="custom-icon" name="mail" />,
                }}
                labelPosition="left"
                placeholder="Enter Email Here"
              />
              <Button id="custom-btn" submitting={submitting} fluid size="large">
                Recover Password
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default reduxForm({
  form: "forgotPasswordForm", // a unique identifier for this form
  validate,
})(ForgotPassword);
