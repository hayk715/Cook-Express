import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import axios from "axios";
import FaveButt from "../FaveButt/FaveButt";

// RecipeListItem renders a bootstrap list item containing data from the recipe api call

class RecipeListItem extends React.Component{

  constructor(props) {
    super(props);
    this.showRecipe = this.showRecipe.bind(this);
    
  }
  state = {
    loading: false,
    recipeData: null
  }

  showRecipe(evt) {
    evt.preventDefault();
    this.setState({loading: true}, () => {
      axios.get(`/api/recipes/${this.props.id}`)
      .then(resp => {
        this.setState({recipeData: resp.data, loading: false})
      }).catch(err => {
        alert(err);
      })
    })
  }

  addFave(evt) {
    evt.preventDefault();
    const id = this.props.id;
    axios.post('/auth/profile/:userId', id)

  }

  renderShowRecipe() {
    if (this.state.loading) {
      return <p>Loading...</p>
    }

    if (this.state.recipeData === null) {
      return <a rel="noreferrer noopener" href='javascript:;' target="_blank" onClick={this.showRecipe}>
            Show recipe!
          </a>
    } 

    return (
      <div>
        <Col size="sm-6">
        <h4>Intructions:</h4>
        {this.state.recipeData.instructions}
        </Col>
        <Col size="sm-4">
        <h4>Ingredients: </h4>
        {this.state.recipeData.extendedIngredients.map((ingredient) => {
          return <p 
            key={ingredient.name + ingredient.id}>{ingredient.original}</p>
        })}
        </Col>
      </div>
    )
  }

  render() {
    const props=this.props
    return (
      <li className="list-group-item">
        <Container>
          <Row>
            <h2>{props.title}</h2>
          </Row>
          <Row>
            <Col size="sm-2">
              <Thumbnail src={props.image || "https://placehold.it/300x300"} />
              <FaveButt onClick={this.addFave}/>
            </Col>
            <Col size="sm-9">
              {this.renderShowRecipe()}
              
            </Col>
          </Row>
        </Container>
      </li>
    )
    
  }
}

export { RecipeListItem }