import dashboardActionTypes from './dashboard.types'

const INITIAL_STATE = {
    section: 'home'
}

const dashboardReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case dashboardActionTypes.SET_SECTION:
            return {
                ...state,
                section: action.payload,
            }

        default: 
        return state;
    }

}

export default dashboardReducer;