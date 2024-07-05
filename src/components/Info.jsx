import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { a } from "../redux/Cart";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardHeader,
  CardText,
  Col,
  Row,
  CardTitle,
} from "reactstrap";
export default function Info({ movies }) {
  const movieSearch = useParams().id;
  const movie = movies.filter((m) => m.id == movieSearch);
  console.log(movie);
  const dispatch = useDispatch();

  return (
    <div>
      {movie.map((m) => (
        <div className="container" key={m.id}>
          <Row>
            <Col sm="12" md="4">
              <Card className="my-4">
                <CardImg
                  src={"https://image.tmdb.org/t/p/w500/" + m.poster_path}
                  top
                  width="75%"
                  alt={m.overview}
                />
                <CardBody>
                  <CardTitle>Description</CardTitle>
                  <CardText>{m.overview}</CardText>
                </CardBody>
              </Card>
            </Col>

            <Col sm="12" md={{ size: 4, offset: 2 }}>
              <Card className="my-4">
                <CardHeader>
                  <h2 className="text-center test-yellow">{m.name}</h2>
                </CardHeader>

                <CardBody>
                  <div className="d-flex justify-content-center">
                    <Button
                      outline
                      className="btn-perso1"
                      onClick={()=>dispatch(a.AddOne(m))}
                    >
                      Ajouter aux favoris
                    </Button>
                    <Link to="/">
                      <Button outline className=" ms-5 btn-perso1">
                        Retourner
                      </Button>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
}
