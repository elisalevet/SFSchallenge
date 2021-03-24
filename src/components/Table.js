import React from 'react';
//import NewBank from './NewBank';

export class Table extends React.Component {
  constructor() {
    super();
    this.state = { data: [], showForm: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  async componentDidMount() {
    const response = await fetch(
      'https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json'
    );
    const data = await response.json();
    this.setState({ data: data });
  }
  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      ...this.state,
      creditor: this.state.creditorName,
      balance: this.state.balance,
    });
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
        {/* <NewBank /> */}
        <div>
          <form id='bankform' className='newField' onSubmit={this.handleSubmit}>
            <label htmlFor='creditorName'>Creditor name</label>
            <input
              type='text'
              name='creditorName'
              value={this.state.creditorName}
              onChange={this.handleChange}
            />

            <label htmlFor='balance'>balance</label>
            <input
              type='number'
              name='balance'
              value={this.state.balance}
              onChange={this.handleChange}
            />
            <button type='submit'>Add Debt</button>
          </form>
        </div>

        <button>Remove Debt</button>
      </div>
    );
  }
}

export default Table;
