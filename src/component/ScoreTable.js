import Table from 'react-bootstrap/Table';
import React from 'react'

function ScoreTable({scorecard1, matchInfo, matchScore}) {
   
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Batting</th>
          <th></th>
          <th>R</th>
          <th>B</th>
          <th>4s</th>
          <th>6s</th>
          <th>SR</th>


        </tr>
      </thead>
      <tbody>
      {
        scorecard1.batsman.map(({name, outDec, runs, balls, fours, sixes, strkRate}) => (
            <tr>
                <td>{name}</td>
                <td>{outDec}</td>
                <td>{runs}</td>
                <td>{balls}</td>
                <td>{fours}</td>
                <td>{sixes}</td>
                <td>{strkRate}</td>
            </tr>
        ))
      }
      <tr>
        <td>Total</td>
        <td>({matchInfo.over} ov)</td>
        <td><strong>{matchScore.team1Score.inngs1.runs} / {matchScore.team1Score.inngs1.wickets}</strong></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      </tbody>   
    </Table>
  )
}

export default ScoreTable;
