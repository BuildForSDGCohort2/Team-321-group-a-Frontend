import React from "react";
import { Grid, Segment, Header, List, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const NotificationPage = () => {
  return (
    <div>
      <Grid container >
        <Grid.Column mobile={16} tablet={8} computer={4}>
          <Segment.Group compact floated="left">
            <Segment textAlign="center" padded>
              <Header as="h4">Notifications</Header>
              <p>You have new notifications</p>
            </Segment>
            <Segment secondary textAlign="center">
              Improve your notifications
              <Header as="h4">
                <Link>View Settings</Link>
              </Header>
            </Segment>
          </Segment.Group>
        </Grid.Column>

        <Grid.Column mobile={16} tablet={8} computer={10}>
          <Segment.Group>
            <Segment>
              <p secondary>Recent</p>
            </Segment>
           {[1,2,3].map(item => (
                <Segment secondary>
                <List divided verticalAlign="middle">
                  <List.Item>
                    <List.Content>
                      <Grid>
                        <Grid.Column computer={2}>
                          <Image avatar src="/images/avatar/small/lena.png" />
                        </Grid.Column>
                        <Grid.Column computer={13}>
                          Lena shared a post: Dear Entrepreneur, Have you heard of
                          the term "big assumptions"? Well, I hadn't until I
                          joined Acumen as a Fellow. They are simply deeply rooted
                          beliefs that we have about ourselves and the world
                          around us, and sometimes, they
                        </Grid.Column>
                        <Grid.Column computer={1}>
                          <Icon name="rss" fitted link />
                          2:40 PM
                        </Grid.Column>
                      </Grid>
                    </List.Content>
                  </List.Item>
                </List>
              </Segment>
           ))}
          </Segment.Group>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={2}>
          <div style={{position:"relative", top:"80%"}}>Docbook Corporation © 2020</div>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default NotificationPage;
