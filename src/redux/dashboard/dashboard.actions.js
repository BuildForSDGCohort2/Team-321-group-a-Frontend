import dashboardActionTypes from "./dashboard.types";

export const setSection = section => ({
    type: dashboardActionTypes.SET_SECTION,
    payload: section,
});