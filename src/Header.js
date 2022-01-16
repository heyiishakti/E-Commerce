import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import  ShoppingCartIcon  from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom';
import { useStateValue} from './StateProvider';
function Header() {
    const [{cart}, dispatch] = useStateValue();
    return (
        <div className = 'header'>
            <Link to='/'>
            <img className='header_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </Link>
            <div className='header_search'>
                <input className='header_searchInput' type='text'/>
                <SearchIcon className='header_searchicon'/>
            </div>
            <div className='header_nav'>
                <Link to='/login'>
                <div className='header_option'>
                    <span className='header_option1'>Hello User</span>
                    <span className='header_option2'>Sign In</span>
                </div>
                </Link>
                <div className='header_option'>
                <span className='header_option1'>Return</span>
                    <span className='header_option2'>& orders</span>
                </div>
                <div className='header_option'>
                <span className='header_option1'>Your</span>
                    <span className='header_option2'>Prime</span>
                </div>
                <Link to='/checkout'>
                <div className='header_optionBasket'>
                    <ShoppingCartIcon />
                    <span className='header_option2 header_basketCount'>{cart?.length}</span>   
                </div>
                </Link>
            </div>
        </div>
         

        

    )
}

export default Header;
