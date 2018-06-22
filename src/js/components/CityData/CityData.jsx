import React from 'react';

export default class CityData extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        const { city } = this.props;
        console.log('anything', city.length);
        return (
            <div className='card border-info mb-3'>
                <div className='card-header text-white bg-info'>City Information</div>
                <div className='card-body'>
                    <div className='form-group'>
                        <h1 className='text-center'>{city.name}</h1>
                        <br />
                        <h6 className='text-center small'>Lat/Long: {this.props.lat} , {this.props.lon}</h6>
                        <hr></hr>
                        <div className='row'>
                            <div className='col'>
                                <p><strong>Temperature (F)</strong></p>
                                <p className='text-success'><strong>65.62F</strong></p>
                            </div>
                            <div className='col'>
                                <p><strong>Pressure</strong></p>
                                <p className='text-success'><strong>997</strong></p>
                            </div>
                            <div className='col'>
                                <p><strong>Humidity</strong></p>
                                <p className='text-success'><strong>39%</strong></p>
                            </div>
                        </div>
                        <br />
                        <div className='row'>
                            <div className='col'>
                                <p><strong>Lowest Temp (F)</strong></p>
                                <p className='text-success'><strong>62.01</strong></p>
                            </div>
                            <div className='col'>
                                <p><strong>Highest Temp (F)</strong></p>
                                <p className='text-success'><strong>71.01</strong></p>
                            </div>
                            <div className='col'>
                                <p><strong>Wind Speed</strong></p>
                                <p className='text-success'><strong>24.16mph</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
