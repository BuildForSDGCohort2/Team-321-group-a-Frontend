import React from "react"
import { Container, Tab } from "semantic-ui-react"
import Sidebar from "../../../sidebar/Sidebar"
import ActivitiesList from "./activities-list.component";
import RecentActivities from "./recent-activities.component";
import SearchAtivity from "./search-activity.component";

const panes = [
    { menuItem: "Recent Activities", render: () => <Tab.Pane> <RecentActivities /> </Tab.Pane> },
    { menuItem: "Activities", render: () => <Tab.Pane> <ActivitiesList /> </Tab.Pane> },
    { menuItem: "Search Activity", render: () => <Tab.Pane> <SearchAtivity /> </Tab.Pane> },
];

const HistoryPage = () => (
    <div>
        <Sidebar />
        <Container>
            <Tab style={{ marginTop: "40px" }} menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
        </Container>
    </div>
)

export default HistoryPage;