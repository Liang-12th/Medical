import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'boxicons'
import Slider from "react-slick";
import specialtyImg from "../../../assets/handbook/cam-nang-1.png"

class HandBook extends Component {
    render() {
        return (
            <div className='section-share'>
                <div className='section-container'>
                    <div className='section-content'>
                        <span className='text-content'>Cẩm nang</span>
                        <button className='button-handbook'>Tat ca bai viet</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='img-customize'>
                                <img src={specialtyImg} />
                            </div>
                            <div className='img-customize'>
                                <img src={specialtyImg} />
                            </div>
                            <div className='img-customize'>
                                <img src={specialtyImg} />
                            </div>
                            <div className='img-customize'>
                                <img src={specialtyImg} />
                            </div>
                            <div className='img-customize'>
                                <img src={specialtyImg} />
                            </div>
                            <div className='img-customize'>
                                <img src={specialtyImg} />
                            </div>
                        </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
