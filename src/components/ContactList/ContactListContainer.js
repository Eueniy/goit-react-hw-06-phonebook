import { connect } from "react-redux";
import * as phonebookActions from "../../redux/phonebook/phonebookActions";
import { filterContacts } from "../../redux/phonebook/phonebookSelectors";
import ContactList from "./ContactList";

const mapStateToProps = (state) => ({
  contacts: filterContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(phonebookActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
