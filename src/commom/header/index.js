import React , { Component } from 'react';
import {
    HeaderWrapper,
    Logo
} from './style';
import './index.css';
import './index.scss'

class Header extends Component {
    render () {
        return (
            <div>
               <HeaderWrapper>
                   <Logo></Logo>
               </HeaderWrapper>
               <div className='flex-wrapper'>

               </div>
               <nav></nav>
            </div>
        )

    }
}

export default Header;