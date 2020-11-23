import { connect } from "react-redux";
import * as phonebookActions from "../../redux/phonebook/phonebookActions";
import PhoneBook from "./PhoneBook";
import {
  getContacts,
  getFilter,
} from "../../redux/phonebook/phonebookSelectors";

const mapStateToProps = (state) => ({
  contacts: getContacts(state),
  filter: getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: (contacts) =>
    dispatch(phonebookActions.fetchContacts(contacts)),

  onAddContact: (contact) => dispatch(phonebookActions.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
