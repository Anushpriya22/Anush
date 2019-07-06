import React from "react";
import SuperSelectField from "material-ui-superselectfield";
import data from "./data.js";

class DDSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      search: "",
      selection: [],
      ids: ""
    };
  }
  componentDidMount() {
    this.setState({ data: data });
  }

  handleSearchChange = e => {
    const search = e.target.value;
    this.setState({ search });
  };

  handleSelection = (values, name) => {
    console.log("values", values);
    console.log("name", name);
    this.setState({ selection: values });
  };

  handleAutoCompleteTyping = searchText =>
    console.debug("You typed in AutoComplete :", searchText); // eslint-disable-line no-console

  render() {
    const { data, search, selection } = this.state;
    const dataDisplay = data.map(item => {
      return (
        <option
          key={item.DocumentId}
          value={item.DocumentId}
          label={item.Title}
        >
          {item.Title}
        </option>
      );
    });
    const customHintTextAutocomplete = <span>Search</span>;
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>

        <SuperSelectField
          name="selection"
          floatingLabel="Searchable Dropdown"
          value={selection}
          hintTextAutocomplete={customHintTextAutocomplete}
          onChange={this.handleSelection}
          autocompleteStyle={{ fontStyle: "italic", fontSize: "1.1rem" }}
          autocompleteUnderlineFocusStyle={{ borderColor: "grey" }}
          style={{ width: 300, textAlign: "left" }}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          showAutocompleteThreshold={1}
          multiple
          checkPosition="left"
        >
          {dataDisplay}
        </SuperSelectField>
      </div>
    );
  }
}

export default DDSearch;
