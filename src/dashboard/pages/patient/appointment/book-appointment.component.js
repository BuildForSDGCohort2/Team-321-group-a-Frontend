import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Icon, Button, Grid, Header } from "semantic-ui-react";
import { LabelInputField } from "react-semantic-redux-form";


import { validate } from "../../../../components/validator/validator";
import { RenderFieldSelect, renderField } from "../../../../pages/helper/render-field-select";
import './book-appointment.styles.css';
import { connect } from "react-redux";
import { addAppointment } from "../../../../redux/appointment/appointment.action";

const BookAppointment = (props) => {
  const { handleSubmit, submitting, addAppointment } = props;

  const onSubmit = (props) => {
    addAppointment(props);
    // console.log(props);
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
                name="day"
                component={LabelInputField}
                type="date"
                label={{
                  content: <Icon id="custom-icon" name="dna" />
                }}
                labelPosition="left"
                placeholder="Day"
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
                placeholder="End Time"
              />
              <Field
                fluid
                name="Aim"
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

const mapDispatchToProps = dispatch => ({
  addAppointment: data => dispatch(addAppointment(data))
})


const bookAppointmentComponent = reduxForm({
  form: "bookAppointment", // a unique identifier for this form
  validate,
})(BookAppointment);

export default connect(null, mapDispatchToProps)(bookAppointmentComponent);