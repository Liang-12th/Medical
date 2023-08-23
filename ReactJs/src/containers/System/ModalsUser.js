import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
import "./UserManage.css";
import { emitter } from '../../utils/emitter';


class ModalsUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password: '',
      firstName: '',
      lastName: '',
      address: '',
    };
    this.listenToEmitter ( );
  }


  listenToEmitter( ) {
    emitter.on("EVENT_CLEAR_MODAL_DATA", ( ) =>{
      // reset state
      this.setState({
        email:'',
        password: '',
        firstName: '',
        lastName: '',
        address: '',
      })
    })
  }


  componentDidMount() {
  }
  toggle = () => {
    this.props.toogleFromparent();
  }

  handleOnChangeInput = ( event,id)=>{

    /** BAD CODE 
     * this.state[id] = event.tagert.value 
     * this.setState({
     *  ... this.state
     * }), () =>{
     *  console.log(this.state)
     * }
     */



    // BEST CODE 
      // copy state and give in copyState 
    let copyState = {...this.state};
    copyState[id] = event.target.value;
    this.setState ({
      ...copyState,
    })
  }

  checkValideInput = ( ) => {
    let isValid = true;
    let arrInput = ['email','password','firstName','lastName','address']
    for(let i = 0 ;i< arrInput.length;i++){
      //console.log('check inside in the loop : ',this.state[arrInput[i]],arrInput[i])
      if(!this.state[arrInput[i]]){
        isValid = false;
        alert("Missing parameter : " + arrInput[i]);
        break;
      }
    }
    return isValid
  }

  handleAddNewUser = ( ) =>{
    let isValid=  this.checkValideInput( );
    if(isValid === true) {
      // call API create User 
      this.props.createNewUser(this.state);
    }
  }


  render() {
    return (
      <div>
        <Modal isOpen={this.props.isOpen} toggle={() => { this.toggle() }} className={'modal-user-container'} size='lg' centered>
          <ModalHeader toggle={() => { this.toggle() }}>Create New User </ModalHeader>
          <ModalBody>
            <div className='row'>
              <div class="form-group col-md-6 mt-3">
                <label for="inputEmail4">Email</label>
                <input type="email" class="form-control" placeholder="Email" name="email" value={this.state.email} onChange={(event)=> {this.handleOnChangeInput(event,"email")}}/>
              </div>
              <div class="form-group col-md-6 mt-3">
                <label for="inputPassword4">Password</label>
                <input type="password" class="form-control" placeholder='Password' name="password" value={this.state.password} onChange={(event)=> {this.handleOnChangeInput(event,"password")}}/>
              </div>
            </div>
            <div className='row'>
              <div class="form-group col-md-6 mt-3">
                <label for="inputEmail4">FirstName</label>
                <input type="text" class="form-control" placeholder="FirstName" name="firstname" value={this.state.firstName} onChange={(event)=> {this.handleOnChangeInput(event,"firstName")}}/>
              </div>
              <div class="form-group col-md-6 mt-3">
                <label for="inputEmail4">LastName</label>
                <input type="text" class="form-control" placeholder="LastName" name="lastname" value={this.state.lastName} onChange={(event)=> {this.handleOnChangeInput(event,"lastName")}} />
              </div>
            </div>
            <div className='row'>
            <div class="form-group  mt-3">
              <label for="exampleInputEmail1">Address</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Address" value={this.state.address} onChange={(event)=> {this.handleOnChangeInput(event,"address")}}/>
            </div>              
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" className="btn btn-secondary px-3" onClick={() => { this.handleAddNewUser() }}>Add new</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalsUser);
