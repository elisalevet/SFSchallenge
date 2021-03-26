import '../App.css';
import React from 'react';
import NewBank from './NewBank';

export class Table extends React.Component {
  constructor() {
    super();
    this.state = { data: [], checkedAll: false };
    this.addDebt = this.addDebt.bind(this);
    this.handleCheckAll = this.handleCheckAll.bind(this);
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        'https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json'
      );
      const data = await response.json();
      data.forEach((element) => (element.isChecked = false));
      this.setState({ data: data });
    } catch (error) {
      console.log(error);
    }
  }

  addDebt(creditorName, firstName, lastName, minPaymentPercentage, balance) {
    const newDebt = [
      ...this.state.data,
      {
        creditorName: creditorName,
        firstName: firstName,
        lastName: lastName,
        minPaymentPercentage: minPaymentPercentage,
        balance: balance,
        id: this.state.data[this.state.data.length - 1].id + 1,
      },
    ];
    this.setState({ data: newDebt });
  }

  deleteDebt(id) {
    const newData = this.state.data.filter((row) => row.id !== id);
    this.setState({ data: newData });
  }

  handleCheck(event) {
    let newData = [...this.state.data];
    newData.forEach((element) => {
      if (element.id === event) {
        element.isChecked = !element.isChecked;
      }
    });
    // for (let i = 0; i < newData.length; i++) {
    //   let current = newData[i];
    //   if (current.id === event) {
    //     current.isChecked = !current.isChecked;
    //   }
    // }
    this.setState({ data: newData });
  }

  handleCheckAll() {
    let newData = [...this.state.data];
    let isCheckedAll = !this.state.checkedAll;
    for (let i = 0; i < newData.length; i++) {
      let current = newData[i];
      if (isCheckedAll) {
        current.isChecked = true;
      } else {
        current.isChecked = false;
      }
    }
    this.setState({ data: newData, checkedAll: isCheckedAll });
  }

  render() {
    return (
      <div>
        <div className='table'>
          <table>
            <thead>
              <tr className='headers'>
                <th>
                  <input
                    type='checkbox'
                    checked={this.state.checkedAll}
                    onChange={this.handleCheckAll}
                  ></input>
                </th>
                <th>Creditor</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Min Payment%</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((row) => (
                <tr key={row.id}>
                  <td>
                    <input
                      type='checkbox'
                      checked={row.isChecked}
                      onChange={() => this.handleCheck(row.id)}
                    ></input>
                  </td>
                  <td>{row.creditorName}</td>
                  <td>{row.firstName}</td>
                  <td>{row.lastName}</td>
                  <td>{row.minPaymentPercentage}</td>
                  <td>{row.balance}</td>
                  <button onClick={() => this.deleteDebt(row.id)}>
                    Remove Debt
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
        </div>
        <div className='table'>
          <div>
            <div>
              <h3 className='totalChecked'>
                Total {`$`}
                {this.state.data.reduce(
                  (total, element) =>
                    total + (element.isChecked ? element.balance : 0),
                  0
                )}
              </h3>
            </div>
            <br />
            <NewBank addDebt={this.addDebt} />
            <div className='totals'>
              <h4>Total Row Count: {this.state.data.length}</h4>
              <h4>
                Check Row Count:
                {this.state.data.reduce(
                  (total, element) => total + (element.isChecked ? 1 : 0),
                  0
                )}
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
