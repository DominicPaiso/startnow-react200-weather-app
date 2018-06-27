import React from 'react';

export default class CityData extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        const degreeConversion = f => {
            return (f * (9 / 5) - 459.67).toFixed(1);
        }

        // const { city } = this.props;
        // console.log('anything', city);
        return (
            <div className='card border-info mb-3'>
                <div className='card-header text-white bg-info'>City Information</div>
                <div className='card-body'>
                    <div className='form-group'>
                        <h1 className='text-center'>{this.props.name ? this.props.name : 'Please insert a city'}</h1>
                        <br />
                        <h6 className='text-center small'>Lat/Long: {this.props.lat ? this.props.lat : 0} , {this.props.lon ? this.props.lon: 0}</h6>
                        <hr></hr>
                        <div className='row'>
                            <div className='col'>
                                <p><strong>Temperature (F)</strong></p>
                                <p className='text-success'><strong>{this.props.temp ? degreeConversion(this.props.temp) : 0}F</strong></p>
                            </div>
                            <div className='col'>
                                <p><strong>Pressure</strong></p>
                                <p className='text-success'><strong>{this.props.pressure ? this.props.pressure : 0}</strong></p>
                            </div>
                            <div className='col'>
                                <p><strong>Humidity</strong></p>
                                <p className='text-success'><strong>{this.props.humidity ? this.props.humidity : 0}%</strong></p>
                            </div>
                        </div>
                        <br />
                        <div className='row'>
                            <div className='col'>
                                <p><strong>Lowest Temp (F)</strong></p>
                                <p className='text-success'><strong>{this.props.temp_min ? degreeConversion(this.props.temp_min) : 0} F</strong></p>
                            </div>
                            <div className='col'>
                                <p><strong>Highest Temp (F)</strong></p>
                                <p className='text-success'><strong>{this.props.temp_min ? degreeConversion(this.props.temp_max) : 0} F</strong></p>
                            </div>
                            <div className='col'>
                                <p><strong>Wind Speed</strong></p>
                                <p className='text-success'><strong>{this.props.wind_speed? this.props.wind_speed : 0} mph</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


{/* <img src={'http://openweathermap.org/img/w/' + this.props.icon + '.png'} /> */}
