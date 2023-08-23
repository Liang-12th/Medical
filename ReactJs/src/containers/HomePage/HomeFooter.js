import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'boxicons'

class HomeFooter extends Component {
    render() {
        return (
            <div className='home-footer'>
                    <p>&copy; 2023 luongnguyensdptit@gmail.com <a href='#'>More information , pls connect email luongnguyensdptit@gmail.com</a></p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
