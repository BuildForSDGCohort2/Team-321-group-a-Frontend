import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import { Field, reduxForm } from "redux-form";

import { Form, Icon, Grid, Segment, Header } from "semantic-ui-react";

import { LabelInputField } from "react-semantic-redux-form";

import { validate } from "../../../../components/validator/validator";

const Payment = (props) => {
  const [componentProps, setcomponentProps] = useState({});
  const publicKey = "pk_test_66d5d11d78a37ebc3b7aeaac264628166d94988d";
  const amount = 1000000;

  const onSuccess = () => alert("Payment successful!!");
  const onClose = () => alert("have a nice day");

  const { handleSubmit } = props;

  const onSubmit = ({ email, name, phone }) => {
    setcomponentProps({
      email,
      amount,
      metadata: { name, phone },
      publicKey,
      onSuccess,
      onClose,
    });
    console.log()
  };

  return (
    <div>
        <Grid padded stacked="true" centered>
          <Grid.Column mobile={16} tablet={8} computer={5}>
            <Header as="h3">Securely Make Payment</Header>
            <Segment>
            <Form size="large" onSubmit={handleSubmit(onSubmit)}>
              <Field
                fluid
                name="name"
                component={LabelInputField}
                label={{
                  content: <Icon id="custom-icon" name="user" />,
                }}
                labelPosition="left"
                placeholder="Name"
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
                name="phone"
                component={LabelInputField}
                label={{
                  content: <Icon id="custom-icon" name="phone" />,
                }}
                labelPosition="left"
                placeholder="Phone"
              />

              <PaystackButton
                className="ui big button instagram fluid"
                text="Pay Now"
                {...componentProps}
              />
            </Form>
            </Segment>
          </Grid.Column>
        </Grid>
    </div>
  );
};

export default reduxForm({
  form: "payment", // a unique identifier for this form
  validate,
})(Payment);
