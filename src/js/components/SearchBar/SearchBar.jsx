import React from 'react'

import {
    apiCallToPayload,
    addCity
} from './searchAction';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleCitySearch = this.handleCitySearch.bind(this);
        this.handleCityData = this.handleCityData.bind(this);
        this.handleClickPreset = this.handleClickPreset.bind(this);
    }

    handleCitySearch(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        console.log(this.props);
        dispatch(addCity(value));
    }

    handleCityData() {
        const { city, dispatch } = this.props;
        console.log(city);
        dispatch(apiCallToPayload(city));
    }

    handleClickPreset(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(apiCallToPayload(value));
    }

    render() {

        // const { city } = this.props;

        return (
            <div>
                <div className='btn-group'>
                    <button type='button' className='btn btn-primary' value='San Diego' onClick={this.handleClickPreset}>San Diego</button>
                    <button type='button' className='btn btn-primary' value='New York' onClick={this.handleClickPreset}>New York</button>
                    <button type='button' className='btn btn-primary' value='Washington' onClick={this.handleClickPreset}>Washington D.C</button>
                    <button type='button' className='btn btn-primary' value={'London'} onClick={this.handleClickPreset}>London</button>
                    <button type='button' className='btn btn-primary' value='Tokyo' onClick={this.handleClickPreset}>Tokyo</button>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-10'>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Search...'
                            onChange={this.handleCitySearch}
                        />
                    </div>
                    <div className='input-group-btn col-12 col-md-2'>
                        <button className='btn btn-danger' type='submit' onClick={this.handleCityData}>Go!</button>
                    </div>
                </div>
            </div>
        );
    }
}