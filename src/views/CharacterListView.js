import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacters } from "../actions/index";


class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // call our action
    this.props.getCharacters()
    
  }

  render() {
    
    if (this.props.fetching) {
      console.log("Data is fetching")
    }
    console.log("Props: ",this.props)
    return (
      <div className="CharactersList_wrapper">
        <h1>Welcome to my StarWars CharacterList</h1>
        {this.props.isFetching && <p>Fetching your characters...</p>}
        <CharacterList characters={this.props.characters} />
        {this.props.error && <p className = "error">{this.props.error}</p>}
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state =>{
  console.log("MAPSTATE2PROPS",state.characters)
  return{
    characters: state.characters,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  {
    getCharacters
  }
)(CharacterListView);
