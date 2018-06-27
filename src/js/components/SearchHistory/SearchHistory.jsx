import React from 'react';

export default class SearchHistory extends React.Component {
    constructor(props) {
        super(props);

        this.handleDate = this.handleDate.bind(this);
        this.handleTime = this.handleTime.bind(this);
        // this.handleHistory = this.handleHistory.bind(this);
    }

    handleDate() {
      var d = new Date;
      var month = d.getMonth();
      var day = d.getDate();
      var year = d.getFullYear();
      return (month + '/' + day + '/' + year);

    }

    handleTime() {
      var d = new Date;
      var hour = d.getHours();
      var minute = d.getMinutes();
      var second = d.getSeconds();
      return (hour + ':' + minute + ':' + second);
    }

    render() {

        return (
            <div className='card border-info mb-3'>
            <div className='card-header text-white bg-info'>Search History</div>
            <div className='card-body'>
              <div className='form-group'>
                <table className='table table-striped'>
                  <tbody>
                    {this.props.history.map((history, index) => (
                          <tr key={index}>
                          <td>{this.props.name}</td>
                          <td>{this.handleDate}</td>
                          <td>{this.handleTime}</td>
                        </tr>
                    ))}
                    <tr>
                      <td>Tokyo</td>
                      <td>06/25/2018</td>
                      <td>11:12:13</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )
    }
}