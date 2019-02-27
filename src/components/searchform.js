import React, { Component } from "react";
import * as useractions from '../redux/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class SearchForm extends Component {
    sorting_flag;
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            user: { fname: 'Ram', age: 10 }
        };
        this.updateModel = this.updateModel.bind(this);
    }
    render() {
        return (
            <div>
                <input name='fname' value={this.state.user.fname} onChange={this.updateModel}></input>
                <input name='age' value={this.state.user.age} onChange={this.updateModel}></input>
                <input name='gender' type='radio' value='Male' onChange={this.updateModel} />Male
                <input name='gender' type='radio' value='FeMale' onChange={this.updateModel} />Female
                <button onClick={() => {
                    this.props.actions.saveAction(this.state.user);
                    this.setState({});
                }}>search</button>
                <button onClick={() => {
                    this.props.users.sort((user1, user2) => this.sorting_flag ? user1.age - user2.age : user2.age - user1.age);
                    this.sorting_flag = !this.sorting_flag;
                }}>Sort</button>
                <ol>
                    {this.props.users.map((user, index) => <li>{user.fname}, {user.age}, {user.gender}
                        <button onClick={() => {
                            this.state.users.splice(index, 1);
                        }}>X</button></li>)}
                </ol>
            </div>
        );
    }
    changeState() {
        this.setState({
            users: this.state.users
        });
    }
    updateModel(event) {
        this.setState({
            user: Object.assign({}, this.state.user, { [event.target.name]: event.target.value })
        });
    }
}
function mapDispatchToProps(dispatch) {
    console.log(useractions);
    return {
        actions: bindActionCreators(useractions, dispatch)
    };
}
function mapReduxStateToProps(reduxState) {
    console.log('mapStateToProps', reduxState);
    return {
        users:reduxState.users
    };
}
export default connect(mapReduxStateToProps, mapDispatchToProps)(SearchForm);