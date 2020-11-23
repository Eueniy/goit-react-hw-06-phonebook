import { connect } from "react-redux";
import * as phonebookActions from "../../redux/phonebook/phonebookActions";
import Filter from "./Filter";

const mapStateToProps = (state) => ({
  value: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter: (e) =>
    dispatch(phonebookActions.filterContacts(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
