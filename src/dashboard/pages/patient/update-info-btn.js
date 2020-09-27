import React from "react";
import { LabelInputField } from "react-semantic-redux-form";
import { Field, reduxForm } from "redux-form";

import { Form, Icon, Button, Header } from "semantic-ui-react";

import { validate } from "../../../components/validator/validator";

const UpdateInfoBtn = (props) => {
  const { handleSubmit, submitting } = props;

  const onSubmit = (props) => {};

  return (
    <div>
      <Header style={{ justifyContent: "center" }} as="h4">
        Update Info{" "}
      </Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="fullname"
          component={LabelInputField}
          label={{
            content: <Icon id="custom-icon" name="user" />,
          }}
          labelPosition="left"
          placeholder="Fullname"
        />
        <Field
          name="email"
          component={LabelInputField}
          label={{
            content: <Icon id="custom-icon" name="mail" />,
          }}
          labelPosition="left"
          placeholder="Email"
        />
        <Field
          name="phone"
          component={LabelInputField}
          type="text"
          label={{
            content: <Icon id="custom-icon" name="phone" />,
          }}
          labelPosition="left"
          placeholder="Phone number"
        />
        <Button id="custom-btn" submitting={submitting} fluid size="large">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default reduxForm({
  form: "UpdateInfoBtnForm", // a unique identifier for this form
  validate,
})(UpdateInfoBtn);
