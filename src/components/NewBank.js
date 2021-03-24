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

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    // this.setState({
    //   creditor: this.state.creditorName,
    //   balance: this.state.balance,
    // });
  }
  //delete state => []
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
