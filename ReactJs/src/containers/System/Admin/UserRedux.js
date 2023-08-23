import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userService';
import { LANGUAGES,CRUD_ACTION ,CommonUtils} from '../../../utils';
import * as actions from "../../../store/actions"
import './UserRedux.scss'
import './TableManagerUser'
import 'boxicons'
import TableManagerUser from './TableManagerUser';

class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArray: [],
            positonArray: [],
            roleArray: [],
            previewImgURL: '',
            isOpen: false,
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            gender: '',
            position: '',
            role: '',
            avatar: '',
            action: ' ',
            userEditId:' ',
        }
    }

    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();
        //this.props.dispatch(actions.getGenderStart())
        // try {
        //     let res = await getAllCodeService('gender');
        //     if(res && res.errCode === 0){
        //         this.setState({
        //             genderArray: res.data
        //         })
        //     }
        // } catch (error) {
        //     console.log(error) 
        // }
    }

    // component DId Update using !!!
    componentDidUpdate(prevProps, prevState, snapshot) {
        // render => didupdate 
        // 
        if (prevProps.genderRedux !== this.props.genderRedux) {
            let arrGender = this.props.genderRedux;
            this.setState({
                genderArray: arrGender,
                gender: arrGender && arrGender.length > 0 ? arrGender[0].keyMap : ' ',
            })
        }
        if (prevProps.positionRedux !== this.props.positionRedux) {
            let arrPosition = this.props.positionRedux
            this.setState({
                positonArray: arrPosition,
                position: arrPosition && arrPosition.length > 0 ? arrPosition[0].keyMap : ' ',
            })
        }
        if (prevProps.roleRedux !== this.props.roleRedux) {
            let arrRole = this.props.roleRedux
            this.setState({
                roleArray: arrRole,
                role: arrRole && arrRole.length > 0 ? arrRole[0].keyMap : ' ',
            })
        }
        // when listUser changed => state will update value is null
        if(prevProps.listUsers !== this.props.listUsers){
            let arrGender = this.props.genderRedux;
            let arrPosition = this.props.positionRedux;
            let arrRole = this.props.roleRedux;
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                phoneNumber: '',
                address: '',
                gender: arrGender && arrGender.length > 0 ? arrGender[0].keyMap : ' ',
                position: arrPosition && arrPosition.length > 0 ? arrPosition[0].keyMap : ' ',
                role: arrRole && arrRole.length > 0 ? arrRole[0].keyMap : ' ',
                avatar: '',
                action: CRUD_ACTION.CREATE,
                previewImgUrl: '',
            })
        }
    }
    handleOnChangeImage = async(event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file);
            //console.log('check base when create image',base64)
            let objectUrl = URL.createObjectURL(file);
            this.setState({
                previewImgURL: objectUrl,
                avatar: base64,
            })
        }
    }
    openOverViewImage = () => {
        if (!this.state.previewImgURL) return;
        this.setState({
            isOpen: true,
        })
    }

    onChangeInput = (event, id) => {
        let copyState = { ...this.state }
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
    }
    checkValidateInput = ( ) => {
        let isVali = true;
        let  arrCheck =['email','password','firstName','lastName','phoneNumber','address',]
        for(let i=0;i < arrCheck.length;i++){
            if(!this.state[arrCheck[i]]) {
                isVali = false;
                alert('Missing input is required :'+arrCheck[i])
                break;
            }
        }
        return  isVali;
    }

    handleSaveUser = () => {
        let isValid = this.checkValidateInput();
        if(isValid === false) return;
        let {action} = this.state;

        if(action === CRUD_ACTION.CREATE){
            // fire action redux create user
        this.props.createNewUser({
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            gender: this.state.gender,
            roleId: this.state.role,
            positionId: this.state.position,
            phonenumber: this.state.phoneNumber,
            avatar: this.state.avatar,
        })
        }
        if(action === CRUD_ACTION.EDIT){
            // fire redux edit user
            this.props.editUserRedux ({
                id: this.state.userEditId,
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                gender: this.state.gender,
                roleId: this.state.role,
                positionId: this.state.position,
                phonenumber: this.state.phoneNumber,
                avatar: this.state.avatar,
            })
        }

        // set timeout because db  don't save use when  create its
        // setTimeout(()=>{
        //     this.props.fetchUserRedux( );
        // },1000)
        
    }
    hanhdleEditUserFromParent =(user) =>{
        //console.log('check user hanlde edit user ',user)
        let imageBase64 =' ';
        if(user.image ){
            imageBase64 = new Buffer(user.image,'base64').toString('binary');
        }
        this.setState({
            email: user.email,
            password: 'HARD CODE',
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phonenumber,
            address: user.address,
            gender: user.gender,
            position: user.positionId,
            role:   user.roleId,
            avatar: ' ',
            previewImgURL: imageBase64,
            action: CRUD_ACTION.EDIT,
            userEditId: user.id,
        })
    }


    render() {
        //console.log('check setState Array',this.state)
        let genders = this.state.genderArray;
        let roles = this.state.roleArray;
        let positions = this.state.positonArray;
        let language = this.props.language;
        let isGetGender = this.props.isLoadingGender;
        let { email, password, firstName, lastName, phoneNumber, address, gender, position, role, avatar } = this.state;

        return (
            <div className='user-redux-container'>
                <div className='title'>
                    User Redux Manager
                </div>
                <div className="user-redux-body" >
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12 my-3'>
                                <FormattedMessage id='manage-user.add'></FormattedMessage>
                            </div>
                            <div className=' col-md-12'>
                                {isGetGender === true ? 'loading gender' : ' '}
                            </div>
                            <div className='form-group col-md-3'>
                                <label>
                                    <FormattedMessage id='manage-user.email'></FormattedMessage>
                                </label>
                                <input className='form-control' type='text'
                                    value={email}
                                    onChange={(event) => { this.onChangeInput(event, 'email') }}
                                    disabled = {this.state.action === CRUD_ACTION.EDIT ? true : false}
                                />
                            </div>
                            <div className='form-group col-md-3'>
                                <label>
                                    <FormattedMessage id='manage-user.password'></FormattedMessage>
                                </label>
                                <input className='form-control' type='password'
                                    value={password}
                                    onChange={(event) => { this.onChangeInput(event, 'password') }}
                                    disabled = {this.state.action === CRUD_ACTION.EDIT ? true : false}
                                />
                            </div>
                            <div className='form-group col-md-3'>
                                <label>
                                    <FormattedMessage id='manage-user.first-name'></FormattedMessage>
                                </label>
                                <input className='form-control' type='text'
                                    value={firstName}
                                    onChange={(event) => { this.onChangeInput(event, 'firstName') }}
                                />
                            </div>
                            <div className='form-group col-md-3'>
                                <label>
                                    <FormattedMessage id='manage-user.last-name'></FormattedMessage>
                                </label>
                                <input className='form-control' type='text'
                                    value={lastName}
                                    onChange={(event) => { this.onChangeInput(event, 'lastName') }}
                                />
                            </div>
                            <div className='form-group col-md-3'>
                                <label>
                                    <FormattedMessage id='manage-user.phone-number'></FormattedMessage>
                                </label>
                                <input className='form-control' type='number'
                                    value={phoneNumber}
                                    onChange={(event) => { this.onChangeInput(event, 'phoneNumber') }}
                                />
                            </div>
                            <div className='form-group col-md-9'>
                                <label>
                                    <FormattedMessage id='manage-user.address'></FormattedMessage>
                                </label>
                                <input className='form-control' type='text'
                                    value={address}
                                    onChange={(event) => { this.onChangeInput(event, 'address') }}
                                />
                            </div>
                            <div className='form-group col-md-3'>
                                <label>
                                    <FormattedMessage id='manage-user.gender'></FormattedMessage>
                                </label>
                                <select className="form-control"
                                    onChange={(event) => { this.onChangeInput(event, 'gender') }}
                                    value={gender}
                                >
                                    {genders && genders.length > 0 &&
                                        genders.map((item, index) => {
                                            return (
                                                <option key={index} value={item.keyMap} >{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className='form-group col-md-3'>
                                <label>
                                    <FormattedMessage id='manage-user.position'></FormattedMessage>
                                </label>
                                <select className="form-control"
                                    onChange={(event) => { this.onChangeInput(event, 'position') }}
                                    value={position}
                                >
                                    {positions && positions.length > 0 &&
                                        positions.map((item, index) => {
                                            return (
                                                <option key={index} value={item.keyMap}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className='form-group col-md-3'>
                                <label>
                                    <FormattedMessage id='manage-user.role'></FormattedMessage>
                                </label>
                                <select className="form-control"
                                    onChange={(event) => { this.onChangeInput(event, 'role') }}
                                    value={role}
                                >
                                    {roles && roles.length > 0 &&
                                        roles.map((item, index) => {
                                            return (
                                                <option key={index} value={item.keyMap}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className='form-group col-md-3'>
                                <label>
                                    <FormattedMessage id='manage-user.image'></FormattedMessage>
                                </label>
                                <div className='preview-img-container'>
                                    <input id='previewImg' type='file' hidden
                                        onChange={(event) => { this.handleOnChangeImage(event) }}
                                    />
                                    <label className='lable-upload' htmlFor='previewImg'><span>Tai anh</span><box-icon type='solid' name='cloud-upload'></box-icon></label>
                                    <div className='preview-image'
                                        style={{ backgroundImage: `url(${this.state.previewImgURL})` }}
                                        onClick={() => this.openOverViewImage()}
                                    >
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-12 my-3'>
                                <button className={this.state.action === CRUD_ACTION.EDIT ? "btn btn-warning":"btn btn-primary"} onClick={() => { this.handleSaveUser() }}
                                >
                                    {
                                        this.state.action === CRUD_ACTION.EDIT ? 
                                        <FormattedMessage id='manage-user.edit'></FormattedMessage>
                                        :
                                        <FormattedMessage id='manage-user.save'></FormattedMessage>
                                    }
                                </button>
                            </div>
                            <div className='col-12 mb-5'>
                                <TableManagerUser
                                    hanhdleEditUserFromParentKey = {this.hanhdleEditUserFromParent}                 
                                    action={this.state.action}                            
                                />
                            </div>
                        </div>
                    </div>
                    {this.state.isOpen === true &&
                        <Lightbox
                            mainSrc={this.state.previewImgURL}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                        />
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
        roleRedux: state.admin.roles,
        positionRedux: state.admin.position,
        isLoadingGender: state.admin.isLoadingGender,
        //map from tableMangaerUser used check information user and use clear data when you create User in from
        listUsers : state.admin.users,        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        createNewUser: (data) => dispatch(actions.createNewUser(data)),
        fetchUserRedux: ( )=> dispatch(actions.fetchAllUserStart()),
        editUserRedux:(data)=> dispatch(actions.editUser(data)),
        // processLogout: () => dispatch(actions.processLogout()),
        // changeLanguageAppRedux :(language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
