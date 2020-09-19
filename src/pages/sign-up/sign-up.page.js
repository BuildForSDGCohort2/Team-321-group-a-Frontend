import React from "react";

import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { signUpSuccess } from "../../redux/user/user.actions";

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

import { RenderFieldSelect } from "../helper/render-field-select";
import HeaderComponent from "../../components/header/header.component";

const SignUp = (props) => {
  const { handleSubmit, submitting, history, signUpSuccess } = props;

  const onSubmit = (props) => {
    signUpSuccess(props);
    history.push(props.role);
  };

  const userRole = [
    { text: "patient", value: "patient" },
    { text: "hospital", value: "hospital" },
    { text: "specialist", value: "specialist" },
  ];

  return (
    <div>
      <HeaderComponent />
      <Grid padded stacked centered>
        <Grid.Column mobile={16} tablet={8} computer={5}>
          <Header as="h2">Create a Secure Account</Header>
          <label>Welcome to the future of Wealth & Health </label>
          <Segment>
            <Form size="large" onSubmit={handleSubmit(onSubmit)}>
              <Field
                fluid
                name="fullname"
                component={LabelInputField}
                label={{
                  content: <Icon id="custom-icon" name="user" />,
                }}
                labelPosition="left"
                placeholder="Fullname"
              />
              <Field
                fluid
                name="phone"
                component={LabelInputField}
                type="text"
                label={{
                  content: <Icon id="custom-icon" name="phone" />,
                }}
                labelPosition="left"
                placeholder="Phone number"
              />
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
              <Field
                name="role"
                component={RenderFieldSelect}
                type="select"
                label="Role"
                options={userRole}
              />

              <Form.Group>
                <Field
                  name="remember"
                  component={CheckboxField}
                  label="Stay sign in"
                />
              </Form.Group>
              <Button id="custom-btn" submitting={submitting} fluid size="large">
                Sign up
              </Button>
            </Form>
          </Segment>
          <Message>
            Already registered?<Link to="/signin">Sign In</Link>
          </Message>
        </Grid.Column>
      </Grid>

    </div>
  );
};


const mapDispatchToProps = dispatch => ({
  signUpSuccess: userCredentials => dispatch(signUpSuccess(userCredentials))
});

const SignUpForm = reduxForm({
  form: "signInForm", // a unique identifier for this form
  validate,
})(SignUp);

export default connect(null, mapDispatchToProps)(SignUpForm)
