import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../actions";

const Footer = () => (
  <div>
    <span> </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>My Tasks</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>In Progress</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </div>
);

export default Footer;
