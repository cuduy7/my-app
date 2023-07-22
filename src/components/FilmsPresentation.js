import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CardTitle, Row, Col, Card, Container } from 'react-materialize'
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';
import { useEffect } from "react";
import axios from "axios";
export default function Film({  }) {
  const [film, setFilm] = useState([]);
  const [films, setFilms] = useState([]);
  const { theme, toggle, dark } = useContext(ThemeContext);
  useEffect(() => {
    const getAccountInfo = async () => {
      axios({
        method: "GET",
        url: "https://641285f0f9fe8122ae25ccec.mockapi.io/api/v1/db",
      })
        .then((res) => {
          setFilms(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAccountInfo();
    // eslint-disable-next-line
  }, []);
  return (
    <Container className="center">
      <Row>
        {films.map((film) => (
          <div className="card">
            <Col s={12} m={6} l={3} key={film.id}>
              <Card className="filmcard" style={{ border: '2px solid #a03b3b', backgroundColor: theme.backgroundColor, color: theme.color }}>
                <a className="FilmImg" href='#popup1' id='openPopup' onClick={() => { setFilm(film) }}>
                  <CardTitle image={film.img} ></CardTitle>
                </a>
                <h5>{film.title}</h5>
                <p>Year: {film.year}</p>
                <p>Nation: {film.nation}</p>
                <p>
                  <button className="button">
                    <Link style={{ color: 'white' }} to={`/detail/${film.id}`}>Detail</Link>
                  </button>
                </p>
              </Card>
            </Col>
          </div>
        ))}
        <div id="popup1" className="overlay">
          <div className="popup">
            <img src={film.img} />
            <h2>{film.title}</h2>
            <a className="close" href="#/">
              &times;
            </a>
            <div className="content">{film.info}</div>
          </div>
        </div>
      </Row>
    </Container>
  );
}