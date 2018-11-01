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
        {this.state.recipeData.instructions}
        <h4>Ingredients: </h4>
        {this.state.recipeData.extendedIngredients.map((ingredient) => {
          return <p 
            key={ingredient.name + ingredient.id}>{ingredient.original}</p>
        })}
        
      </div>
    )
  }
  render() {
    const props=this.props
    return (
      <li className="list-group-item">
        <Container>
          <Row>
            <Col size="xs-4 sm-2">
              <Thumbnail src={props.image || "https://placehold.it/300x300"} />
              <FaveButt />
            </Col>
            <Col size="xs-8 sm-9">
              <h3>{props.title}</h3>
              {this.renderShowRecipe()}
              
            </Col>
          </Row>
        </Container>
      </li>
    )
    
  }
}

export { RecipeListItem }