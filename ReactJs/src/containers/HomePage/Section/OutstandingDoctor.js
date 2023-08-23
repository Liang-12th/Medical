import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import specialtyImg from "../../../assets/outstanding-doctor/doctor-check.jpg"
import * as actions from '../../../store/actions'
import { LANGUAGES } from '../../../utils';
import './OutstandingDoctor.scss'
import { FormattedMessage } from 'react-intl';
class OutstandingDoctor extends Component {

    constructor(props) {
        super(props) 
            this.state = {
                arrDoctors: [ ]
            }
        }
    
        componentDidUpdate(prevProps,prevState,snapshot) {
            if(prevProps.topDoctorsRedux !== this.props.topDoctorsRedux) {
                this.setState({
                    arrDoctors: this.props.topDoctorsRedux
                })
            }
        }

    componentDidMount( ){
        this.props.loadTopDoctors()
    }
    render() {
        let arrDoctors = this.state.arrDoctors;
        let { language} = this.props;
        // arrDoctors = arrDoctors.concat(arrDoctors).concat(arrDoctors);
        console.log("check array doctors from outstangding ",arrDoctors);
        return (
            <div className='section-share section-specialty'>
                <div className='section-container'>
                    <div className='section-content'>
                        <span className='text-content'>
                            <FormattedMessage id='homepage.outstanding-doctor'/>
                            </span>
                        <button> 
                            <FormattedMessage id='homepage.more-infor'/>
                        </button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            {arrDoctors && arrDoctors.length > 0 && arrDoctors.map((item, index) => {
                                let imageBase64 = ' ';
                                if (item.image) {
                                    imageBase64 = new Buffer(item.image, 'base64').toString('binary');
                                }
                                let nameVi = `${item.positionData.valueVi}, ${item.lastName} ${item.firstName} `;
                                let nameEn = `${item.positionData.valueEn}, ${item.firstName} ${item.lastName} `;

                                return (
                                <div className='img-customize outstanding-doctor' key={index}>
                                    <img style={{ backgroundImage: `url(${imageBase64})`}}/>
                                    <h3> {language===LANGUAGES.VI ? nameVi : nameEn}</h3>
                                </div>
                                )
                            })} 
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        topDoctorsRedux: state.admin.topDoctors,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTopDoctors: () => dispatch(actions.fetchTopDoctor( ))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);