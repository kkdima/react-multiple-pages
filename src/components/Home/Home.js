import React, { Component, Fragment } from 'react';
import { BrowserRouter} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import 'normalize.css/normalize.css';
import '../../styles/styles.scss'


import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import CarouselNew from './CarouselNew';
import TestCarousel from './TestCarousel';
import reset from '../../constants/css/reset';

const GlobalStyle = createGlobalStyle`${reset}`;

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users : []
        };
    };
    
    // eslint-disable-next-line react/sort-comp
    loadUsers = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    users: json
                });
            });
    }
    
    componentDidMount() {
        this.loadUsers();
    }

    render () {
        return (
            <BrowserRouter>
                <Fragment>
                    {/* <TestCarousel /> */}
                    <FirstSection />
                    <SecondSection />
                    <ThirdSection />
                    <CarouselNew users={this.state.users}/>
                    <GlobalStyle />
                </Fragment>
            </BrowserRouter>
        );
    }
}

export default Layout;