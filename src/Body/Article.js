import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
// import CarouselPage from 'CarouselPage';

const Article = (props) => {
  return (
    <>
    <div>

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