import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import BootstrapCarousel from '../Body/CarouselPage';


const Article = (props) => {
  return (
    <>
    <div>
    <BootstrapCarousel />
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Que as batalhas comecem!</h1>
          <p className="lead">Eu escolho você!</p>
        </Container>
      </Jumbotron>
    </div>
      
    </>
  );
};

export default Article;