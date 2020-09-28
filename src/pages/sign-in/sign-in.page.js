import React, { useState } from "react";

import { Field, reduxForm } from "redux-form";

import {
  Form,
  Icon,
  Button,
  Grid,
  Segment,
  Message,
  Header,
} from "semantic-ui-react";

import { LabelInputField, CheckboxField } from "react-semantic-redux-form";

import { validate } from "../../components/validator/validator";

import { Link } from "react-router-dom";
import HeaderComponent from "../../components/header/header.component";

const SignIn = (props) => {
  const [error, setError] = useState(null);

  const { handleSubmit, submitting, history } = props;

  const onSubmit = (props) => {
    history.push('/dashboard/patient');
  };

  return (
    <div>
      <HeaderComponent />
      <Grid padded stacked="true" centered>
        <Grid.Column mobile={16} tablet={8} computer={5}>
          <Header as="h2">Sign in </Header>
          <label>Securely login to your account </label>
          <Segment>
            <Form size="large" onSubmit={handleSubmit(onSubmit)}>
              <Field
                fluid
                name="email"
                component={LabelInputField}
                label={{
                  content: <Icon id="custom-icon" name="mail" />,
                }}
                labelPosition="left"
                placeholder="Email"
              />

              <Link to="/forgotpass" style={{ float: "right" }}>
                Forgot password?
              </Link>
              <Field
                fluid
                name="password"
                component={LabelInputField}
                type="password"
                label={{
                  content: <Icon id="custom-icon" name="lock" />,
                }}
                labelPosition="left"
                placeholder="Password"
              />
              <Form.Group>
                <Field
                  name="remember"
                  component={CheckboxField}
                  label="Stay sign in"
                />
              </Form.Group>
              <Button  id="custom-btn" submitting={submitting} fluid size="large">
                Signin
              </Button>
            </Form>
          </Segment>
          {error ? (
            <Message>
              Forgot Password?<Link to="/signup">Sign Up</Link>
            </Message>
          ) : (
            <Message>
              Not registered yet?<Link to="/signup">Sign Up</Link>
            </Message>
          )}
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default reduxForm({
  form: "signInForm", // a unique identifier for this form
  validate,
})(SignIn);
