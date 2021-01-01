import React, {Component} from 'react';
import PropTypes from 'prop-types';
class Navbar extends Component {
    render() {
        return (
            <nav className={"navbar navbar-dark bg-primary"}>
                <div className="container">
                    <a href="#" className={"navbar-brand"}>
                        <i className={this.props.icon}></i> {this.props.title}
                    </a>
                </div>
            </nav>
        );
    }
}

Navbar.defaultProps = {
    title: 'Github Profil Bulucu',
    icon: 'fab fa-gtihub'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar;
