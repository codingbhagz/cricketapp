import React,{useState,useEffect} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import CricketData from './data.json';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DisplayCard from './component/DisplayCard';
import ScoreTable from './component/ScoreTable';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import PieChart from './component/PieChart';
import PieChart1 from './component/PieChart1';
import LineChart from './component/LineChart';



function App() {
  
  
    
  return (
    <>
     <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#livescore">Cricket</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#livescore">LiveScore</Nav.Link>
            <Nav.Link href="#series">Series</Nav.Link>
            <Nav.Link href="#teams">Teams</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <div className='app'>
      
    <Accordion defaultActiveKey="1">
      {
        CricketData && CricketData.map(({matchInfo, matchScore, scorecard1, scorecard2}) => (
          <Accordion.Item className='item' eventKey={matchInfo.matchId} key={matchInfo.matchId}>

          <Accordion.Header>
          <DisplayCard matchInfo={matchInfo} matchScore={matchScore}/>
          </Accordion.Header>
          <Accordion.Body>
            <Accordion defaultActiveKey="1">
            <Accordion.Item className='item' eventKey='2'>
              <Accordion.Header>
                <Button>Statistics</Button>
              
              </Accordion.Header>
              <Accordion.Body>
              <div className='chartCard'>
              <PieChart scorecard1={scorecard1}/>
          
              <PieChart1 scorecard2={scorecard2}/>
              </div>
              <div className='lineCard'>
                <LineChart  scorecard1={scorecard1} scorecard2={scorecard2}/>
              </div>
              
              </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            
            <ScoreTable scorecard1={scorecard1} matchInfo={matchInfo} matchScore={matchScore} />
          </Accordion.Body>
        </Accordion.Item>
        
        ))
      }
      
    </Accordion>
    </div>
    </>
    
  );
}

export default App;