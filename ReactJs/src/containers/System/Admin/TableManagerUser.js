import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../../../store/actions'
import "./TableManagerUser.scss";
import * as ReactDOM from 'react-dom';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

const mdParser = new MarkdownIt(/* Markdown-it options */);
function handleEditorChange({ html, text }) {
    console.log('handleEditorChange', html, text);
}
class TableManagerUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userRedux: [],
        };
    }
    componentDidMount() {
        this.props.fetchUserRedux();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listUsers !== this.props.listUsers) {
            this.setState({
                userRedux: this.props.listUsers
            })
        }
    }
    hanldeDeleteUser = (user) => {
        this.props.deleteUserRedux(user.id)
    }
    handleEditUser = (user) => {
        //console.log('check user from edit ',user)
        this.props.hanhdleEditUserFromParentKey(user)
    }
    render() {
        console.log('check user ', this.props.listUsers);
        console.log('check state user', this.state.userRedux);
        let arrUser = this.state.userRedux;
        return (
            <React.Fragment>

                <div className="design-table">
                    <table id="TableMangerUser">
                        <tr>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                        {arrUser && arrUser.length > 0 &&
                            arrUser.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button className="button-type" onClick={() => this.handleEditUser(item)} >Edit</button>
                                            <button className="button-type" onClick={() => this.hanldeDeleteUser(item)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>

                <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />

            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listUsers: state.admin.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserRedux: () => dispatch(actions.fetchAllUserStart()),
        deleteUserRedux: (id) => dispatch(actions.deleteUser(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManagerUser);
