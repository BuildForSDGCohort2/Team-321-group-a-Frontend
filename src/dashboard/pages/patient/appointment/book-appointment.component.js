import React from "react";
import { Field, reduxForm } from "redux-form";

import { Form, Icon, Button, Grid, Segment, Header } from "semantic-ui-react";

import { LabelInputField } from "react-semantic-redux-form";
import { validate } from "../../../../components/validator/validator";
import { RenderFieldSelect, renderField } from "../../../../pages/helper/render-field-select";

const BookAppiontment = (props) => {
  const { handleSubmit, submitting } = props;

  const onSubmit = (props) => {
      console.log(props);
  };

  const hospitalList = [
    { text: "patient", value: "patient" },
    { text: "hospital", value: "hospital" },
    { text: "specialist", value: "specialist" },
  ];

  const venueType = [
    { text: "Hospital", value: "hospitl" },
    { text: "Home", value: "home" },
    { text: "Online", value: "online" },
  ];

  return (
    <div>
      <Grid padded stacked centered>
        <Grid.Column computer={6}>
            <Header as="h2" style={{justifyContent:"center"}}>
              Schedule Appointment
            </Header>
            <Form size="large" onSubmit={handleSubmit(onSubmit)}>
            <Field
                fluid
                name="specialist"
                component={LabelInputField}
                type="text"
                label={{
                  content: <Icon id="custom-icon" name="user" />
                }}
                labelPosition="left"
                placeholder="Specialist name"
              />
              <Field
                fluid
                name="date"
                component={LabelInputField}
                type="date"
                label={{
                  content: <Icon id="custom-icon" name="dna" />
                }}
                labelPosition="left"
                placeholder="Date"
              />
              <Field
                fluid
                name="start_time"
                component={LabelInputField}
                type="time"
                label="Start Time"
                labelPosition="left"
              />
              <Field
                fluid
                name="end_time"
                component={LabelInputField}
                type="time"
                label="End Time"
                labelPosition="left"
                placeholder="end_time"
              />
              <Field
                fluid
                name="aim"
                type="text"
                component={renderField}
                label="Please enter your aim"
                labelPosition="left"
                placeholder="Aim"
              />
              <Field
                name="venue"
                component={RenderFieldSelect}
                type="select"
                label="Select Venue"
                options={venueType}
              />
              <Button
                id="custom-btn"
                submitting={submitting}
                fluid
                size="large"
              >
                Schedule
              </Button>
            </Form>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default reduxForm({
  form: "bookAppointment", // a unique identifier for this form
  validate,
})(BookAppiontment);
