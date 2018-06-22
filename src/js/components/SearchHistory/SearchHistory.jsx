import React from 'react';

export default class SearchHistory extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

      var d = new Date ('00/00/0000')

        return (
            <div className='card border-info mb-3'>
            <div className='card-header text-white bg-info'>Search History</div>
            <div className='card-body'>
              <div className='form-group'>
                <table className='table table-striped'>
                  <tbody>
                    <tr>
                      <td>San Diego</td>
                      <td>04/28/2016</td>
                      <td>19:04:46</td>
                    </tr>
                    <tr>
                      <td>New York</td>
                      <td>04/28/2016</td>
                      <td>19:04:48</td>
                    </tr>
                    <tr>
                      <td>Washington D.C</td>
                      <td>04/28/2016</td>
                      <td>19:04:49</td>
                    </tr>
                    <tr>
                      <td>London</td>
                      <td>04/28/2016</td>
                      <td>19:04:50</td>
                    </tr>
                    <tr>
                      <td>Tokyo</td>
                      <td>04/28/2016</td>
                      <td>19:04:51</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )
    }
}