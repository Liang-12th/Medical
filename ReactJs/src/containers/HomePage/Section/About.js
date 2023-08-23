import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'boxicons'

class About extends Component {
    render() {
        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                Truyền thông nói về ME
                </div>
                <div className='content'>
                    <div className='content-left'>
                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/McHTdmRSCkI" title="Lừa đảo dịch vụ lấy lại tiền bị lừa | VTV24" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div className='content-right'>
                        <p>Nhiều người tìm đến dịch vụ nhờ lấy lại tiền lừa đảo,không ngờ lại tiếp tục dính phải bẫy lừa đảo lần 2.</p>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
