import React from "react";
import { connect } from "react-redux";
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
import { signInSuccess } from "../../redux/user/user.actions";

const SignIn = (props) => {

  const { handleSubmit, data:{ error, isLoading } , signInSuccess, history } = props;

  const onSubmit = ({username, password}) => {
    signInSuccess({username, password, history})
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
                name="username"
                component={LabelInputField}
                label={{
                  content: <Icon id="custom-icon" name="user" />,
                }}
                labelPosition="left"
                placeholder="username"
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
              <Button id="custom-btn" loading={false ||isLoading} fluid size="large">
                Signin
              </Button>
            </Form>
          </Segment>
          {error ? (
            <Message error style={{textAlign:"center"}}>
              {error}
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

const mapStateToProps = ({ user }) => ({
  data: user,
});

const mapDispatchToProps = dispatch => ({
  signInSuccess: userCredentials => dispatch(signInSuccess(userCredentials))
})

const SignInFormPage = reduxForm({
  form: "signInForm", // a unique identifier for this form
  validate,
})(SignIn);

export default connect(mapStateToProps, mapDispatchToProps)(SignInFormPage);