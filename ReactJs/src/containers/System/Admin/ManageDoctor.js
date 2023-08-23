import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../../../store/actions'
import "./ManageDoctor.scss";
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentMarkdown : ' ',
            contentHTML : ' ',
        };
    }
    componentDidMount() {

    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    handleEditorChange({ html, text }) {
        console.log('handleEditorChange', html, text);
    }
    render() {
        console.log('check user ', this.props.listUsers);
        console.log('check state user', this.state.userRedux);
        let arrUser = this.state.userRedux;
        return (
            <div className="manage-doctor-container">
                <div className="tiitle-manage-doctor">
                    <p>Thêm thông tin bác sĩ </p>
                </div>
                <div className="content-manage-doctor">
                    <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={this.handleEditorChange} />
                </div>
                <div className="button-doctor">
                    <button className="save-content-markdown"><p>Luu thong tin</p></button>                    
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
