import React, { Component } from "react";
import { connect } from "react-redux";
import "./UserManage.css";
import { getAllUser, createNewUserService, deleteUserService,editUserService } from '../../services/userService'
import { bind } from "lodash";
import ModalsUser from "./ModalsUser";
import ModalEditUser from "./ModalEditUser";
import { emitter } from "../../utils/emitter";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUser: [],
      isOpenModalUser: false,
      isOpenModalEditUser: false,
      userEdit: { },
    };
  }
  async componentDidMount() {
    await this.getAllUserFromReact();
  }

  getAllUserFromReact = async () => {
    let resporn = await getAllUser(`ALL`);
    if (resporn && resporn.errCode === 0) {
      this.setState({
        arrUser: resporn.users
      })
    }
  }

  handleAddNewUser = () => {
    this.setState({
      isOpenModalUser: true,
    })
  }

  toogleUserModal = () => {
    this.setState({
      isOpenModalUser: !this.state.isOpenModalUser,
    })
  }

  toogleUserEditModal= (user) => {
    this.setState({
      isOpenModalEditUser: !this.state.isOpenModalEditUser,
      userEdit: user,
    })
  }


  createNewUser = async (data) => {
    try {
      let resporn = await createNewUserService(data)
      if (resporn && resporn.errCode !== 0) {
        alert(resporn.errMessage)
      } else {
        await this.getAllUserFromReact();
        this.setState({
          isOpenModalUser: false
        })
        emitter.emit('EVENT_CLEAR_MODAL_DATA');
      }
      //    console.log('resporn from UserManager :',resporn)
    } catch (error) {
      console.log(error)
    }
    //    console.log('check data from UserManager: ' ,data)
  }
  handleEditUser = async (user) => {
    console.log('check edit user',user)
    this.setState({
      isOpenModalEditUser: true,
      userEdit: user,
    })
  }

  doEditUser = async (user) => {
    try {
    let res = await editUserService(user)
      if(res && res.errCode === 0 ){
        this.setState({
          isOpenModalEditUser: false,
        })
        this.getAllUserFromReact( );
      } else{
        alert(res.errMessage);
      }
    } catch (error) {
      console.log(error)
    }
  }

  handleDeleteUser = async (user) => {
    // console.log('check id when delete ',user)
    try {
      let res = await deleteUserService(user.id);
      if (res && res.errCode !== 0) {
        alert(res.errMessage)
      } else {
        await this.getAllUserFromReact();
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
   // console.log('check state ', this.state)
    let arrUser = this.state.arrUser;
    return (
      <div className="table-content">

        <ModalsUser
          isOpen={this.state.isOpenModalUser}
          toogleFromparent={this.toogleUserModal}
          createNewUser={this.createNewUser}
        />

{
  this.state.isOpenModalEditUser &&
          <ModalEditUser
          isOpen={this.state.isOpenModalEditUser}
          toogleFromparent={this.toogleUserEditModal}
          currentUser = {this.state.userEdit}
          editUser={this.doEditUser}
      />

}

        <div className="button-update">
          <button className="button-type"
            onClick={() => this.handleAddNewUser(bind, this)}
          >
            Create New User
          </button>
        </div>
        <div className="fillter">
        </div>
          <table id="customer-table">
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Action</th>
            </tr>

            {
              arrUser && arrUser.map((item, index) => {
                console.log(item, index)
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                    <td >
                      <button className="button-type" onClick={ () => this.handleEditUser(item)}>Edit</button>
                      <button className="button-type" onClick={() => this.handleDeleteUser(item)}>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
