import React, { useState } from "react";
import { Grid, Card, Icon, Button, Statistic } from "semantic-ui-react";

import PinOrPasswordComponent from "./pin or password.component";
import SendModal from "./send-modal";

const ListWalletInfo = () => {
  const [ispin, setPin] = useState(null);

  if (ispin) {
    return <PinOrPasswordComponent />;
  }

  return (
    <div>
      <Grid centered container>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <Card fluid >
            <Card.Content>
                <Grid>
                    <Grid.Row>
                        <Grid.Column mobile={10} tablet={10} computer={10}>
                          <Statistic size="tiny">
                            <Statistic.Label>Total Balance</Statistic.Label>
                            <Statistic.Value>&#x20A6; 40,509</Statistic.Value>
                          </Statistic>
                        </Grid.Column>
                        <Grid.Column mobile={6} tablet={6} computer={6}>
                          <Button floated="right" id="plus-btn"><Icon color="blue" name="plus" fitted /></Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Card.Content>
            <Card.Content extra>
              <Grid>
                  <Grid.Column mobile={4} tablet={4} computer={4}>
                      <Button color="pink">
                        <Icon name="arrow circle down" />
                      </Button>withdraw
                  </Grid.Column>
                  <Grid.Column mobile={4} tablet={4} computer={4}>
                      <SendModal /> 
                      <span>Send</span>
                  </Grid.Column>
                  <Grid.Column mobile={4} tablet={4} computer={4}>
                       <Button color="green">
                        <Icon name="credit card outline" />
                      </Button>
                      <span>Cards</span>
                  </Grid.Column>
                  <Grid.Column mobile={4} tablet={4} computer={4}>
                       <Button color="orange">
                        <Icon name="exchange" />
                      </Button>Exchange
                  </Grid.Column>
              </Grid>
            </Card.Content>
          </Card>
        </Grid.Column>
        
        <Grid.Row>
        <Grid.Column mobile={8} tablet={8} computer={4}>
        <Card fluid>
            <Card.Content>
             Actual Balance
             <div>&#x20A6; 39,509</div>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={8} computer={4}>
        <Card fluid>
            <Card.Content>
             Transfer ID
             <div>0X33e445577cgd2</div>
            </Card.Content>
          </Card>
        </Grid.Column>
        </Grid.Row>

        <Grid.Row>
        <Grid.Column mobile={8} tablet={8} computer={4}>
        <Card fluid>
            <Card.Content>
             Credit 
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={8} computer={4}>
        <Card fluid>
            <Card.Content>
             dmdmkda
            </Card.Content>
          </Card>
        </Grid.Column>
        </Grid.Row>

      </Grid>
    </div>
  );
};

export default ListWalletInfo;
