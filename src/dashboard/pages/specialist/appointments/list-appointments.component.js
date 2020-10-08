import React from "react";
import { withRouter } from "react-router-dom";
import { Header, Table, Button, Grid, Icon } from "semantic-ui-react";

const ListAppointment = ({ history }) => {
  return (
    <div>
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
                  <Table.HeaderCell singleLine>Patient</Table.HeaderCell>
                  <Table.HeaderCell>Date</Table.HeaderCell>
                  <Table.HeaderCell>Start Time</Table.HeaderCell>
                  <Table.HeaderCell>End Time</Table.HeaderCell>
                  <Table.HeaderCell>Venue</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                  <Table.HeaderCell>Action</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Header as="h4" textAlign="center">
                      Miss Jane Okechukwu
                    </Header>
                  </Table.Cell>
                  <Table.Cell singleLine>22 November 2020</Table.Cell>
                  <Table.Cell singleLine>2:00 PM</Table.Cell>
                  <Table.Cell>
                    3:00 PM
                  </Table.Cell>
                  <Table.Cell singleLine>Online</Table.Cell>
                  <Table.Cell>
                    Not Approved
                  </Table.Cell>
                  <Table.Cell>
                    <Button.Group>
                        <Button color="blue">Accept</Button>
                        <Button color="red" onClick={() => {history.push("/dashboard/specialist/appointments/edit")}}>Reschedule</Button>
                      </Button.Group>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>

              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan="7"></Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </Grid.Column>
        </Grid>
    </div>
  );
};

export default withRouter(ListAppointment);
