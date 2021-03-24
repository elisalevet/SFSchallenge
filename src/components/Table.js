import React from 'react';
import NewBank from './NewBank';

export class Table extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }
  async componentDidMount() {
    const response = await fetch(
      'https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json'
    );
    const data = await response.json();
    this.setState({ data: data });
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr></tr>
            <tr>
              <th>Creditor</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Min Pay %</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((row) => (
              <tr key={row.id}>
                <td>{row.creditorName}</td>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.minPaymentPercentage}</td>
                <td>{row.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <br />
        <NewBank />

        <button>Remove Debt</button>
      </div>
    );
  }
}

export default Table;
