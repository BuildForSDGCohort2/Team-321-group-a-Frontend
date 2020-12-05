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

import { LabelInputField } from "react-semantic-redux-form";

import { validate } from "../../components/validator/validator";

import { Link, Redirect } from "react-router-dom";

import { RenderFieldSelect } from "../helper/render-field-select";
import HeaderComponent from "../../components/header/header.component";

const SignUp = (props) => {
  const { handleSubmit, history, data:{error, isLoading}, signUpSuccess } = props;

  const onSubmit = (props) => {
    signUpSuccess({props, history});
  };

  const accountOptions = [
    { text: "Patient", value: "patient" },
    { text: "Health Organization", value: "healthorg" },
    { text: "Company", value: "company" },
    { text: "Specialist", value: "specialist" },
  ];

  return (
    <div>
      <HeaderComponent />
      <Grid padded stacked textAlign="center">
        <Grid.Column mobile={16} tablet={8} computer={5}>
          <Header as="h2">Create a Secure Account</Header>
          <label>Welcome to the future of Wealth & Health </label>
          <Segment>
            <Form size="large" onSubmit={handleSubmit(onSubmit)}>
              <Field
                fluid
                name="username"
                component={LabelInputField}
                type="text"
                label={{
                  content: <Icon id="custom-icon" name="user" />,
                }}
                labelPosition="left"
                placeholder="Username"
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
                name="user_type"
                component={RenderFieldSelect}
                type="select"
                label="User Type"
                options={accountOptions}
              />

              <Button loading={false ||isLoading} id="custom-btn" fluid size="large">
                Sign up
              </Button>
            </Form>
          </Segment>
          {error ? (
            <Message error style={{textAlign:"center"}}>
              {error[0]}
            </Message>
          ) : (
            <Message>
              Already registered?<Link to="/sigin">Sign In</Link>
            </Message>
          )}
        </Grid.Column>
      </Grid>

    </div>
  );
};


const mapStateToProps = ({ user }) => ({
  data: user,
});

const mapDispatchToProps = dispatch => ({
  signUpSuccess: userCredentials => dispatch(signUpSuccess(userCredentials))
});

const SignUpForm = reduxForm({
  form: "signUpForm", // a unique identifier for this form
  validate,
})(SignUp);

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
