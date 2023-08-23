import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import 'boxicons'
import './HomeHeader.scss'
import { languages } from '../../utils';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils/constant';
import { changeLanguageApp } from '../../store/actions/appActions';

class HomeHeader extends Component {
    changeLanguage = (language) => {
        // fire redux event : action
        this.props.changeLanguageAppRedux(language)
    }
    render() {
        let language = this.props.language;
        //console.log('check userInfor',this.props.userInfor)
        return (
            <React.Fragment>

                <div className="nav-header">
                    <div className="nav-header-left">
                        <div className="logo">
                            <svg width="85" height="27" className="_32ANSIZormifc9Vc6VVwrx" viewBox="0 0 587.93 165"><title>mainLogoRiotFist21</title><path d="M98.77.33L0 46.07l24.61 93.66 18.73-2.3-5.15-58.89 6.15-2.74L54.96 136l32.01-3.93-5.69-65 6.09-2.71 11.68 66.23 32.38-3.98-6.23-71.25 6.16-2.74 12.77 72.43 32.01-3.93V19.71L98.77.33zm2.32 142.05l1.63 9.22 73.42 12.24v-30.68l-75.01 9.22h-.04zm144.49-19.22v12.63h15.57a14.84 14.84 0 01-1.92 7.31 13 13 0 01-5.6 5.11 20 20 0 01-8.9 1.8 17.53 17.53 0 01-10-2.8 17.87 17.87 0 01-6.44-8.14 33.06 33.06 0 01-2.27-12.93 31.81 31.81 0 012.32-12.81 18.14 18.14 0 016.5-8 17.27 17.27 0 019.82-2.78 19.31 19.31 0 015.36.71 14.15 14.15 0 014.33 2.09 12.92 12.92 0 013.18 3.29 15.61 15.61 0 012 4.44h17.27a27.22 27.22 0 00-3.46-10.28 28.84 28.84 0 00-7.05-8.1 32.6 32.6 0 00-9.91-5.29 37.91 37.91 0 00-12.06-1.86 37.32 37.32 0 00-14 2.6 32.6 32.6 0 00-11.36 7.61 35 35 0 00-7.61 12.21 46.15 46.15 0 00-2.73 16.44q0 11.94 4.54 20.59a32.4 32.4 0 0012.69 13.27 39.84 39.84 0 0035.84.84 28.39 28.39 0 0011.67-11q4.25-7.19 4.24-17.2v-9.76zm215.03 40.81V88.53h51.67v13.96h-34.62v16.76h27.99v13.96h-27.99v16.8h34.7v13.96h-51.75zm101.83-53.3a9 9 0 00-3.54-6.64c-2.09-1.59-5-2.38-8.69-2.38a16.63 16.63 0 00-6.26 1 8.62 8.62 0 00-3.83 2.78 6.74 6.74 0 00-1.33 4 6.2 6.2 0 00.79 3.29 7.27 7.27 0 002.4 2.45 16.54 16.54 0 003.7 1.79 40.14 40.14 0 004.64 1.31l6.63 1.54a47.19 47.19 0 019.45 3.08 27.46 27.46 0 017.2 4.68 18.84 18.84 0 014.58 6.39 20.37 20.37 0 011.61 8.29 20.65 20.65 0 01-3.54 12.11 22.56 22.56 0 01-10.15 7.85 41.31 41.31 0 01-15.93 2.76 42.69 42.69 0 01-16.17-2.81 23.22 23.22 0 01-10.72-8.48q-3.83-5.66-4-14.12h16.43a10.68 10.68 0 007.05 9.94 19.37 19.37 0 007.24 1.26 18.44 18.44 0 006.66-1.09 10 10 0 004.33-3 7.22 7.22 0 001.57-4.48 6.16 6.16 0 00-1.42-4 10.86 10.86 0 00-4.14-2.81 42.07 42.07 0 00-6.89-2.14l-8.07-1.95q-9.65-2.3-15.23-7.26t-5.54-13.44a19.86 19.86 0 013.72-12.12 24.74 24.74 0 0110.33-8.11 36.74 36.74 0 0115-2.91 35.62 35.62 0 0114.92 2.91 23.43 23.43 0 019.91 8.14 21.54 21.54 0 013.6 12.12zm-113.99 53.3h-16.87v-57.35l-1.73-.02-17.04 57.37h-16.86l-16.58-57.37-2.15.02v57.35h-16.87V88.53h28.67l14.48 50.56h1.75l14.48-50.56h28.72v75.44zm-114.66 0h18.27l-25.33-75.43h-23.15l-25.37 75.43h18.3l4.93-16.54h27.42zm-28.43-29.7l8.22-27.65h3.1l8.26 27.65zm278.58-37.76a4 4 0 01-3.67-2.44 4 4 0 010-3.1 4 4 0 01.85-1.27 4.25 4.25 0 011.27-.86 4.15 4.15 0 013.1 0 4.13 4.13 0 011.27.86 4.08 4.08 0 01.86 1.27 4 4 0 010 3.1 4.08 4.08 0 01-.86 1.27 4 4 0 01-1.27.86 4 4 0 01-1.55.31zm0-1.09a2.84 2.84 0 001.47-.39 2.94 2.94 0 001.05-1 2.93 2.93 0 000-2.92 3 3 0 00-1.06-1 2.93 2.93 0 00-2.92 0 3 3 0 00-1 1 2.86 2.86 0 000 2.92 3 3 0 001 1 2.83 2.83 0 001.46.39zm-1.46-1.15V90.6h1.78a1.52 1.52 0 01.69.15 1.13 1.13 0 01.47.42 1.24 1.24 0 01.17.66 1.16 1.16 0 01-.18.66 1 1 0 01-.48.41 1.56 1.56 0 01-.7.14h-1.2v-.72h1a.52.52 0 00.36-.12.5.5 0 00.14-.37.47.47 0 00-.14-.37.52.52 0 00-.36-.12h-.55v2.93zm2.39-1.68l.82 1.68h-1.11l-.75-1.68zM282.41 1.03h17.05v75.44h-17.05zm98.02 37.72q0 12.42-4.71 21a32.67 32.67 0 01-12.79 13.17 38.57 38.57 0 01-36.31 0 32.75 32.75 0 01-12.79-13.2q-4.71-8.66-4.71-21t4.71-21.05a32.67 32.67 0 0112.75-13.14 38.65 38.65 0 0136.31 0 32.67 32.67 0 0112.79 13.17q4.71 8.64 4.71 21.05m-17.35 0a33.35 33.35 0 00-2.23-13 17.47 17.47 0 00-6.33-8 18.57 18.57 0 00-19.45 0 17.57 17.57 0 00-6.35 8 38.59 38.59 0 000 26 17.49 17.49 0 006.35 8 18.57 18.57 0 0019.45 0 17.39 17.39 0 006.33-8 33.4 33.4 0 002.23-13M246.58 50.17l8.76 26.3h18.71l-9.74-28.33h-13.23l-.79-2.44c2.52-.49 6.83-1.25 10.65-3.85a20 20 0 008.75-16.39 24.15 24.15 0 00-3.26-12.75 21.9 21.9 0 00-9.36-8.64 32.56 32.56 0 00-14.64-3H212v75.4h17.06v-26.3zm-.32-15.61a19.35 19.35 0 01-7.26 1.18h-9.94V14.88h9.91a18.68 18.68 0 017.25 1.24 9.12 9.12 0 014.4 3.7 10 10 0 011.5 5.64 9.65 9.65 0 01-1.48 5.55 8.86 8.86 0 01-4.38 3.55M382.04 1.03v14h29.3l.8 2.45c-2.48.48-6.67 1.22-10.43 3.7v55.31h16.87v-61.5h19.62v-14z"></path></svg>
                        </div>
                        <div className="dropdown">
                            <svg className="" viewBox="0 0 8 5"><title>mainMenuDownNonHover</title><path d="M.707 1.707l2.586 2.586a1 1 0 001.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707z"></path></svg>
                        </div>
                    </div>

                    <div className="nav-header-center">
                        <div className="logo">
                            <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 100 100" width="30"><path d="M99.25 48.66V10.28c0-.59-.75-.86-1.12-.39l-41.92 52.4a.627.627 0 00.49 1.02h30.29c.82 0 1.59-.37 2.1-1.01l9.57-11.96c.38-.48.59-1.07.59-1.68zM1.17 50.34L32.66 89.7c.51.64 1.28 1.01 2.1 1.01h30.29c.53 0 .82-.61.49-1.02L1.7 9.89c-.37-.46-1.12-.2-1.12.39v38.38c0 .61.21 1.2.59 1.68z" fill="#fff"></path></svg>
                        </div>
                        <div className="center-content">
                            <p><FormattedMessage id='home-header.specialist-information' /></p>
                            <span className="dropdown">
                                <svg className="" viewBox="0 0 8 5"><title>mainMenuDownNonHover</title><path d="M.707 1.707l2.586 2.586a1 1 0 001.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707z"></path></svg>
                            </span>
                        </div>
                        <div className="center-content">
                            <p>
                                <FormattedMessage id='home-header.media' />
                            </p>
                        </div>
                        <div className="center-content">
                            <p>
                                <FormattedMessage id='home-header.news' />

                            </p>
                        </div>
                        <div className="center-content">
                            <p>
                                <FormattedMessage id='home-header.health-checkup-package' />

                            </p>
                        </div>
                        <div className="center-content">
                            <p>
                                <FormattedMessage id='home-header.health-facilities' />

                            </p>
                        </div>
                        <div className="center-content">
                            <p>
                                <FormattedMessage id='home-header.our-socials' />

                            </p>
                        </div>
                        <div className="center-content">
                            <p>
                                <FormattedMessage id='home-header.support' />

                            </p>
                        </div>
                    </div>

                    <div className="nav-header-right">
                        <div className="dropdown">
                            <button className="dropbtn">
                                <div className="logo">
                                    <svg viewBox="0 0 24 24" className="_wt-icon_bxtje _m_aq1fd _icon_1dh718a_569"><path d="m11.62965 16.61452c-1.13922-.692-3.111-2.36313-3.153-2.32718a28.32942 28.32942 0 0 1 -3.30095 2.26177c-.68823.39708-1.38892.49615-1.82064-.09139a.992.992 0 0 1 .26656-1.40406c.00852-.00391 2.44665-1.594 3.25973-2.29678a11.64387 11.64387 0 0 1 -2.23281-3.53521 1.07774 1.07774 0 0 1 .52716-1.36835c.52715-.22205 1.049-.12664 1.48663.61989a10.33341 10.33341 0 0 0 1.8143 2.89517 10.853 10.853 0 0 0 2.1563-4.3469l-7.63293-.02148v-2.00685h4.8124v-.99406a.98574.98574 0 1 1 1.9713 0v.99406h5.1703v2.00685h-2.08646a17.03869 17.03869 0 0 1 -2.64065 5.75689 15.88157 15.88157 0 0 0 2.30149 1.66068l2.3092-5.66617a1.162 1.162 0 0 1 2.1802.01591l3.01041 7.389 1.85638 4.385h-2.47393l-1.08252-2.53924h-4.84082l-.888 2.53924h-2.5993l.287-.69166zm4.31307-5.16715-1.67531 4.55419h3.35059z"></path></svg>
                                </div>                            
                            </button>
                            <div className="dropdown-content">
                                <span className={language === LANGUAGES.VI ? 'language-vi active':'language-vi'} onClick={ ( ) => this.changeLanguage(LANGUAGES.VI)} >VN</span>
                                <span className={language === LANGUAGES.EN ? 'language-en active':'language-en'} onClick={ ( ) => this.changeLanguage(LANGUAGES.EN)}>EN</span>
                            </div>
                        </div>


                        <div className="content" >
                            <p>HELP</p>
                        </div>
                    </div>

                </div>

                <div className='home-container'>
                    <div className='home-content'>
                        <div className='titlle-content'>
                            <div className='text-content'>
                                <p>
                                    <FormattedMessage id='home-header.medical-foundation' />

                                </p>
                            </div>
                            <div className='text-content'>
                                <p>
                                    <FormattedMessage id='home-header.comprehensive' />

                                </p>
                            </div>
                        </div>
                        <div className='search'>
                            <div className='titlle-content-search'>
                                <div className='logo-search'>
                                    <box-icon name='search' size='mg'></box-icon>
                                </div>
                                <div className='text-input'>
                                    <input type='text' placeholder='Tim bac si'></input>
                                </div>
                            </div>
                        </div>
                        <div className='titlle-content-option'>
                            <div className='titlle-bottom-option'>
                                <ul>
                                    <li>
                                        <span>
                                            <div className='logo-content'>
                                                <box-icon type='solid' name='home-heart' size='lg'></box-icon>
                                            </div>
                                            <p>
                                                <FormattedMessage id='home-header.examination' />

                                            </p>
                                            <br />
                                            <p>
                                                <FormattedMessage id='home-header.specialist' />
                                            </p>
                                        </span>
                                    </li>

                                    <li>
                                        <span>
                                            <div className='logo-content'>
                                                <box-icon name='phone-call' type='solid' size='lg' ></box-icon>
                                            </div>
                                            <p>
                                                <FormattedMessage id='home-header.examination' />
                                            </p>
                                            <br />
                                            <p>
                                                <FormattedMessage id='home-header.remote' />

                                            </p>
                                        </span>
                                    </li>

                                    <li>
                                        <span>
                                            <div className='logo-content'>
                                                <box-icon name='notepad' size='lg'></box-icon>
                                            </div>
                                            <p>
                                                <FormattedMessage id='home-header.examination' />
                                            </p>
                                            <br />
                                            <p>
                                                <FormattedMessage id='home-header.general' />

                                            </p>
                                        </span>
                                    </li>

                                    <li>
                                        <span>
                                            <div className='logo-content'>
                                                <box-icon name='test-tube' size='lg' ></box-icon>
                                            </div>
                                            <p>
                                                <FormattedMessage id='home-header.analysis' />
                                            </p>
                                            <br />
                                            <p>
                                                <FormattedMessage id='home-header.medicine' />

                                            </p>
                                        </span>
                                    </li>

                                    <li>
                                        <span>
                                            <div className='logo-content'>
                                                <box-icon name='user' size='lg'></box-icon>
                                            </div>
                                            <p>
                                                <FormattedMessage id='home-header.health' />
                                            </p>
                                            <br />
                                            <p>
                                                <FormattedMessage id='home-header.spirit' />

                                            </p>
                                        </span>
                                    </li>

                                    <li>
                                        <span>
                                            <div className='logo-content'>
                                                <box-icon name='happy' size='lg' ></box-icon>
                                            </div>
                                            <p>
                                                <FormattedMessage id='home-header.examination' />
                                            </p>
                                            <br />
                                            <p>
                                                <FormattedMessage id='home-header.dentistry' />

                                            </p>
                                        </span>
                                    </li>

                                    <li>
                                        <span>
                                            <div className='logo-content'>
                                                <box-icon name='bed' size='lg'></box-icon>
                                            </div>
                                            <p>
                                                <FormattedMessage id='home-header.package' />
                                            </p>
                                            <br />
                                            <p>
                                                <FormattedMessage id='home-header.surgery' />

                                            </p>
                                        </span>
                                    </li>

                                    <li>
                                        <span>
                                            <div className='logo-content'>
                                                <box-icon name='cart-add' size='lg' ></box-icon>
                                            </div>
                                            <p>
                                                <FormattedMessage id='home-header.product' />

                                            </p>
                                            <br />
                                            <p>
                                                <FormattedMessage id='home-header.medicine' />
                                            </p>
                                        </span>
                                    </li>

                                    <li>
                                        <span>
                                            <div className='logo-content'>
                                                <box-icon name='check-shield' size='lg'></box-icon>
                                            </div>
                                            <p>
                                                <FormattedMessage id='home-header.checkup' />

                                            </p>
                                            <br />
                                            <p>
                                                <FormattedMessage id='home-header.health' />
                                            </p>
                                        </span>
                                    </li>

                                    <li>
                                        <span>
                                            <div className='logo-content'>
                                                <box-icon name='map' size='lg' ></box-icon>
                                            </div>
                                            <p>
                                                <FormattedMessage id='home-header.medicine' />
                                            </p>
                                            <br />
                                            <p>
                                                <FormattedMessage id='home-header.near' />
                                            </p>
                                        </span>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        userInfor: state.user.userInfor,
        // inject redux
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux :(language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
