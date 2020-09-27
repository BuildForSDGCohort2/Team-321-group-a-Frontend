import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Header, Table, Button, Grid, Icon } from "semantic-ui-react";
import BookAppointmentComponent from "./book-appointment.component";

const ListAppointment = ({ history }) => {
  const [viewform, setForm] = useState(false);
  return (
    <div style={{ marginTop: "20px" }}>
      <Button fluid color="green" onClick={() => setForm(!viewform)}>
        {viewform ? <div><Icon name="list alternate outline" /> View Appointments </div>: <div><Icon name="plus" />  Add New</div>}
      </Button>
      {viewform ? (
        <BookAppointmentComponent />
      ) : (
        <Grid centered>
          <Grid.Column mobile={16} tablet={8} computer={16}>
            <Table
              celled
              selectable
              stackable={true}
              padded
              style={{ marginTop: "5px" }}
              id="table-style"
            >
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell singleLine>Specialist</Table.HeaderCell>
                  <Table.HeaderCell>Health Organization</Table.HeaderCell>
                  <Table.HeaderCell>Wallet</Table.HeaderCell>
                  <Table.HeaderCell>Actions</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                  <Table.HeaderCell>Payment</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Header as="h4" textAlign="center">
                      Dr. James Okechukwu
                    </Header>
                  </Table.Cell>
                  <Table.Cell singleLine>maternity hospital Enugu</Table.Cell>
                  <Table.Cell singleLine>33dd73833399494949gh77</Table.Cell>
                  <Table.Cell>
                    <Button.Group>
                      <Button color="blue">Edit</Button>
                      <Button color="red">Delete</Button>
                    </Button.Group>
                  </Table.Cell>
                  <Table.Cell singleLine>Not Approved</Table.Cell>
                  <Table.Cell>
                    <Button
                      id="custom-btn"
                      onClick={() =>
                        history.push("/dashboard/patient/appointment/pay")
                      }
                    >
                      {" "}
                      Make Payment
                    </Button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>

              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan="6"></Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </Grid.Column>
        </Grid>
      )}
    </div>
  );
};

export default withRouter(ListAppointment);
