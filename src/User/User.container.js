import User from "./User";
import { connect } from "react-redux";
import { getListUser, getListUserSuccess } from "./User.action";

const mapStateToProps = (state) => {
    console.log(state.userReducer, ' ahihi')

    return{
        stateUserAction: state.userReducer.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getListUserAction: () => dispatch(getListUser())
    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User)

export default UserContainer;