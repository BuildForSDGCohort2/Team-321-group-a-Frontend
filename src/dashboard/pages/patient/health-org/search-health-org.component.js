import React from "react";
import { Input } from "semantic-ui-react";

const SearchHealthOrg = () => (
  <Input
  inverted
  fluid
    icon={{ name: "search", circular: true, link: true }}
    placeholder="Search Hospital..."
  />
);

export default SearchHealthOrg;
