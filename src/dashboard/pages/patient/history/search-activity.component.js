import React from "react";
import { Button, Select, Input } from "semantic-ui-react";

const options = [
    { key: "all", text: "All", value: "all" },
    { key: "date", text: "Date", value: "date" },
    { key: "name", text: "Name", value: "name" },
]

const SearchAtivity = () => (
    <div>
        <Input type="text" placeholder="Search..." action>
            <input />
            <Select compact options={options} defaultValue="date" />
            <Button type="submit">Search</Button>
        </Input>


    </div>
)

export default SearchAtivity;