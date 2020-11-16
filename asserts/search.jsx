import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import files from './files.jsx';


console.log(files);
export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { lookFor: 'first'};
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ lookFor: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
  };
  
  handleClick() {
    handleSearch()
  };

  handleSearch() {
    const filtered = files.filter((item) =>{item.contains(this.state.lookFor.value)});
  return filtered ;
  console.log(filtered);
  };
  render() {
    return (
      <form
        onSubmit={this.onFormSubmit}
        className="search-container">
        <input
          className="search"
          id="search"
          type="search"
          placeholder = "search this site"
          onChange={this.onInputChange}
          value={this.state.lookFor} />
          <button type="submit" 
          onClick={this.handleClick} 
          className="search-button">search</button>
        
      </form>
    );
  }
};

const SearchPage = ()=>{
  return (
    <section>
    <h3 className="search-result">search result:{this.state.value}</h3>
    </section>
    )
};
//