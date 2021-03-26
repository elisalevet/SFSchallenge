import React from 'react';

export class NewBank extends React.Component {
  constructor(props) {
    super();
    this.state = {
      creditorName: '',
      firstName: '',
      lastName: '',
      minPaymentPercentage: 0,
      balance: 0,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addDebt(
      this.state.creditorName,
      this.state.firstName,
      this.state.lastName,
      this.state.minPaymentPercentage,
      this.state.balance
    );
    this.setState({
      creditorName: '',
      firstName: '',
      lastName: '',
      minPaymentPercentage: 0,
      balance: 0,
    });
  }

  render() {
    return (
      <div>
        <form id='bankform' onSubmit={this.handleSubmit}>
          <label htmlFor='creditorName'>Creditor Name</label>
          <input
            type='text'
            name='creditorName'
            value={this.state.creditorName}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor='firstName'>First Name </label>
          <input
            type='text'
            name='firstName'
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor='lastName'>Last Name{'    '}</label>
          <input
            type='text'
            name='lastName'
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br /> <label htmlFor='minPaymentPercentage'>Min Payment%</label>
          <input
            type='number'
            name='minPaymentPercentage'
            value={this.state.minPaymentPercentage}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor='balance'>Balance</label>
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
