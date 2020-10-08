import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Icon, Button, Grid, Header } from "semantic-ui-react";
import { LabelInputField } from "react-semantic-redux-form";


import { validate } from "../../../../components/validator/validator";
import { RenderFieldSelect, renderField } from "../../../../pages/helper/render-field-select";
import './book-appointment.styles.css';

const BookAppiontment = (props) => {
  const { handleSubmit, submitting } = props;

  const onSubmit = (props) => {

  };

  const venueType = [
    { text: "Hospital", value: "hospitl" },
    { text: "Home", value: "home" },
    { text: "Online", value: "online" },
  ];

  return (
    <div id="appointment-container">
      <Grid centered>
        <Grid.Column mobile={16} tablet={8} computer={6}>
            <Header as="h2" id="appointment-header">
              Schedule Appointment
            </Header>
            <Form  onSubmit={handleSubmit(onSubmit)}>
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
                name="startTime"
                component={LabelInputField}
                type="time"
                label="Start Time"
                labelPosition="left"
              />
              <Field
                fluid
                name="endTime"
                component={LabelInputField}
                type="time"
                label="End Time"
                labelPosition="left"
                placeholder="End Time"
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
