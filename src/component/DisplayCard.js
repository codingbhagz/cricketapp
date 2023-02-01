import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactCountryFlag from "react-country-flag";

function DisplayCard({matchInfo, matchScore}) {
  return (
    <Container>
      <Row>
        <Col>{matchInfo.startDate}</Col>
        <Col xs={6}> 
        <h6>Result</h6>
        <p>{matchInfo.matchDesc} {matchInfo.venueInfo.ground} {matchInfo.venueInfo.city}</p>

        <p><ReactCountryFlag countryCode={matchInfo.team1.teamSName} svg /> {matchInfo.team1.teamName}</p>
        <p><ReactCountryFlag countryCode={matchInfo.team2.teamSName} svg /> {matchInfo.team2.teamName}</p>
        <p>{matchInfo.status}</p>
        </Col>
        <Col>
        <p><strong>{matchScore.team1Score.inngs1.runs} / {matchScore.team1Score.inngs1.wickets}</strong></p>
        <p>({matchScore.team1Score.inngs1.overs} ov) {matchScore.team2Score.inngs1.runs} / {matchScore.team2Score.inngs1.wickets} </p>
        </Col>
      </Row>
      </Container>
  )
}

export default DisplayCard;