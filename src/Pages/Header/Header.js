import React from 'react';
import Banner from './Banner/Banner';
import Navibar from './NaviBar/Navibar';

const Header = () => {
    return (
        <div>
            <Navibar></Navibar>
            <Banner></Banner>
        </div>
    );
};

export default Header;