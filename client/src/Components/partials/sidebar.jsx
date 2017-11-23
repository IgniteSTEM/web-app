import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, browserHistory } from 'react-router-dom';

// Style sheet
import '../../Styles/sidebar.scss';

class Sidebar extends Component {
    // If active page, custom class
    currentPageClass(path) {
        const currentPath = this.props.location.pathname;
        if (path === currentPath) {
            return 'sidebar-links-selected';
        }
        return ''; // No custom className
    }

    render() {
        const {
            loggedIn,
            user,
        } = this.props;
        return (
            <div className="sidebar">
                <ul className="sidebar-links">
                    <li>
                        <Link className={this.currentPageClass('/')} to={'/'}>DIRECTORY</Link>
                    </li>
                    <li>
                        <Link className={this.currentPageClass('/about')} to={'/about'}>ABOUT</Link>
                    </li>
                    <li>
                        <Link className={this.currentPageClass('/join')} to={'/join'}>JOIN</Link>
                    </li>
                    <li>
                        { loggedIn ?
                            <Link className={this.currentPageClass('/profile')} to={'/profile'}>WELCOME, {user.first_name}</Link>
                        :
                                <Link className={this.currentPageClass('/login')} to={'/login'}>LOGIN</Link>
                        }
                    </li>
                </ul>
            </div>
        );
    }
};

Sidebar.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,

    // Redux/Router window location data
    location: PropTypes.shape({
        hash: PropTypes.string.isRequired,
        pathname: PropTypes.string.isRequired,
        search: PropTypes.string.isRequired,
    }).isRequired,
};

export default Sidebar;
