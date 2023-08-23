import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
import "./UserManage.css";
import _ from 'lodash'

class ModalEditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        };
    }


    componentDidMount() {
        let user = this.props.currentUser;
        console.log('user',user)
        if(user &&  !_.isEmpty(user)) {
            this.setState ({
                id: user.id,
                email: user.email,
                password: "hardcode",
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address,
            })  
        }
        console.log('didmount edit modal',this.props.currentUser)
    }
    toggle = () => {
        this.props.toogleFromparent();
    }

    handleOnChangeInput = (event, id) => {
        // BEST CODE 
        // copy state and give in copyState 
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState,
        })
    }

    checkValideInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address']
        for (let i = 0; i < arrInput.length; i++) {
            //console.log('check inside in the loop : ',this.state[arrInput[i]],arrInput[i])
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert("Missing parameter : " + arrInput[i]);
                break;
            }
        }
        return isValid
    }

    handleSaveUser = () => {
        let isValid = this.checkValideInput();
        if (isValid === true) {
            // call API edit User 
            this.props.editUser(this.state);
        }
    }

    render() {
        console.log('check props from parent :', this.props)
        return (
            <div>
                <Modal isOpen={this.props.isOpen} toggle={() => { this.toggle() }} className={'modal-user-container'} size='lg' centered>
                    <ModalHeader toggle={() => { this.toggle() }}>Edit New User </ModalHeader>
                    <ModalBody>
                        <div className='row'>
                            <div class="form-group col-md-6 mt-3">
                                <label for="inputEmail4">Email</label>
                                <input type="email" class="form-control" placeholder="Email" name="email" value={this.state.email} onChange={(event) => { this.handleOnChangeInput(event, "email") }} disabled />
                            </div>
                            <div class="form-group col-md-6 mt-3">
                                <label for="inputPassword4">Password</label>
                                <input type="password" class="form-control" placeholder='Password' name="password" value={this.state.password} onChange={(event) => { this.handleOnChangeInput(event, "password") }} disabled/>
                            </div>
                        </div>
                        <div className='row'>
                            <div class="form-group col-md-6 mt-3">
                                <label for="inputEmail4">FirstName</label>
                                <input type="text" class="form-control" placeholder="FirstName" name="firstname" value={this.state.firstName} onChange={(event) => { this.handleOnChangeInput(event, "firstName") }} />
                            </div>
                            <div class="form-group col-md-6 mt-3">
                                <label for="inputEmail4">LastName</label>
                                <input type="text" class="form-control" placeholder="LastName" name="lastname" value={this.state.lastName} onChange={(event) => { this.handleOnChangeInput(event, "lastName") }} />
                            </div>
                        </div>
                        <div className='row'>
                            <div class="form-group  mt-3">
                                <label for="exampleInputEmail1">Address</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Address" value={this.state.address} onChange={(event) => { this.handleOnChangeInput(event, "address") }} />
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" className="btn btn-secondary px-3" onClick={() => { this.handleSaveUser() }}>Save User</Button>
                        <Button color="primary" className="btn btn-secondary px-3" onClick={() => { this.toggle() }}>Close</Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
