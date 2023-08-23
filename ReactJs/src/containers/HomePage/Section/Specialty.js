import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'boxicons'
import './Specialty.scss'
import Slider from "react-slick";
import specialtyImg from "../../../assets/specialty/cot-song.jpg"

class Specialty extends Component {
    render() {
        return (
            <div className='section-share section-specialty'>
                <div className='section-container'>
                    <div className='section-content'>
                        <span className='text-content'>Chuyên khoa phổ biến</span>
                        <button> Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='img-customize'>
                                <img src={specialtyImg} />
                                <h3>Cơ Xương Khớp</h3>
                            </div>
                            <div className='img-customize'>
                                <img src={specialtyImg} />
                                <h3>Thần kinh</h3>
                            </div>
                            <div className='img-customize'>
                                <img src={specialtyImg} />
                                <h3>Tiêu hoá</h3>
                            </div>
                            <div className='img-customize'>
                                <img src={specialtyImg} />
                                <h3>Tim mạch</h3>
                            </div>
                            <div className='img-customize'>
                                <img src={specialtyImg} />
                                <h3>Tai Mũi Họng</h3>
                            </div>
                            <div className='img-customize'>
                                <img src={specialtyImg} />
                                <h3>Cột sống</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
