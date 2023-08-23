import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import specialtyImg from "../../../assets/medical/viet-duc.jpg"

class MedicalFacility extends Component {

    render() {
        return (
            <div className='section-share section-medical'>
                <div className='section-container'>
                    <div className='section-content'>
                        <span className='text-content'>Cơ sở y tế nổi bật</span>
                        <button> Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='img-customize'>
                                <img src={specialtyImg} />
                                <h3>Bệnh viện Hữu nghị Việt Đức</h3>
                            </div>
                            <div className='img-customize'>
                                <img src={specialtyImg} />
                                <h3>Bệnh viện Hữu nghị Việt Đức</h3>
                            </div>
                            <div className='img-customize'>
                                <img src={specialtyImg} />
                                <h3>Bệnh viện Hữu nghị Việt Đức</h3>
                            </div>
                            <div className='img-customize'>
                                <img src={specialtyImg} />
                                <h3>Bệnh viện Hữu nghị Việt Đức</h3>
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
