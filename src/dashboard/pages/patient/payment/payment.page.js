import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import { Field, reduxForm } from "redux-form";

import { Form, Icon, Grid, Segment, Header } from "semantic-ui-react";

import { LabelInputField } from "react-semantic-redux-form";

import { validate } from "../../../../components/validator/validator";
import Sidebar from "../../../sidebar/Sidebar";

const Payment = (props) => {
  const [myamount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const publicKey = "pk_test_66d5d11d78a37ebc3b7aeaac264628166d94988d";
  const amount = myamount*100;
  const onSuccess = () => alert("Payment successful!!");
  const onClose = () => alert("have a nice day");

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess,
    onClose,
  }

  const { handleSubmit } = props;
  const onSubmit = () => {

  };

  return (
    <div>
      <Sidebar />
        <Grid padded stacked="true" centered>
          <Grid.Column mobile={16} tablet={8} computer={6}>
            <Segment>
            <Header as="h3" style={{justifyContent:"center"}}>Securely Make Payment</Header>
            <Form size="large" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group widths='equal'>
              <Field
                fluid
                name="fullname"
                component={LabelInputField}
                label={{
                  content: <Icon id="custom-icon" name="user" />,
                }}
                labelPosition="left"
                placeholder="Fullname"
                onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
              />
              </Form.Group>
              <Field
                fluid
                name="phone"
                component={LabelInputField}
                label={{
                  content: <Icon id="custom-icon" name="phone" />,
                }}
                labelPosition="left"
                placeholder="Phone"
                onChange={(e) => setPhone(e.target.value)}
              />
               <Field
                fluid
                name="amount"
                component={LabelInputField}
                label={{
                  content: <Icon id="custom-icon" name="money" />,
                }}
                labelPosition="left"
                placeholder="Enter Amount in Naira"
                onChange={(e) => setAmount(e.target.value)}
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
