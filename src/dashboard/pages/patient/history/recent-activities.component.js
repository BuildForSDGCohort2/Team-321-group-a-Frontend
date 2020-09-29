import React from "react";
import { List } from "semantic-ui-react";
const activites =["Last Activity", "Second To Last", "Activity Three"];

const RecentActivities = () => (
    <div>
        {["October 2nd 2:30 PM", "Sep 12 3:00 am", "Sep 1 1:00 pm"].map((item,index) => (
            <List>
                <List.Item>
                    <List.Content>
                        <List.Header as="a">{activites[index]}</List.Header>
                        <List.Description>
                            <b>{item}.</b>
                        </List.Description>
                    </List.Content>
                </List.Item>
            </List>
        ))}
    </div>
)

export default RecentActivities;