import {connect} from "react-redux";
import List from "../components/List";
function mapStateToProps(state) {
    const {goods} = state;
    return {goods: goods};

}
export default connect(
    mapStateToProps,
    null
)(List); 