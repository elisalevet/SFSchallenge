import React from 'react';

export class NewBank extends React.Component {
  constructor() {
    super();
    this.state = {
      creditorName: '',
      firstName: '',
      lastName: '',
      minPaymentPercentage: '',
      balance: '',
    };

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
    );
  }
}

export default NewBank;
