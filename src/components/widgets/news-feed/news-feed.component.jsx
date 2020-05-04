import React from "react";
import { Container, Row, Col, CardDeck } from "react-bootstrap";
import "./news-feed.styles.scss";
import { NewsPost } from "./news-feed-post.component";

const newsPostArray = [
  {
    title: "First Post",
    image: "/img/post-image1.jpg",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolor at assumenda non, dolore eveniet accusamus illum aperiam, perferendis quis, voluptatem nostrum dolorem aut nihil numquam tempora ipsum sint animi?",
  },
  {
    title: "Second Post",
    image: "/img/post-image1.jpg",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolor at assumenda non, dolore eveniet accusamus illum aperiam, perferendis quis, voluptatem nostrum dolorem aut nihil numquam tempora ipsum sint animi?",
  },
  {
    title: "Third Post",
    image: "/img/post-image1.jpg",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolor at assumenda non, dolore eveniet accusamus illum aperiam, perferendis quis, voluptatem nostrum dolorem aut nihil numquam tempora ipsum sint animi?",
  },
];

export const NewsFeed = (props) => {

  const items = [];
  newsPostArray.forEach(item => items.push(
    <NewsPost {...item} />
  ))

  return (
    <Container className="news-feed-container">
      <Row>
        <Col lg={{ span: 4, offset: 4 }}>
          <h2 className="title">Latest News</h2>
        </Col>
      </Row>
      <Row>
        <CardDeck>
          {items}
        </CardDeck>
      </Row>
    </Container>
  );
};

export default NewsFeed;
