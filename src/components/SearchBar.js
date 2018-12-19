import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  //binds context of this to the form
  onFormSubmit = (e) => {
    e.preventDefault();

    // after onFormSubmit is triggered, it passes this.state.term
    // into this.props.onSubmit to pass it to the parent component
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form
          className="ui form"
          onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
