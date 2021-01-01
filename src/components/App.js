import React, {Component, Fragment} from 'react';
import Navbar from "./Navbar";
import Users from "./Users";
import Search from "./Search";
import Alerts from "./Alerts";
import axios from "axios";
import {
    BrowserRouter,
    Route,
    NavLink,
    Switch
} from "react-router-dom";
import About from "./About";
import UserDetail from "./UserDetail";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            users: [],
            user: {},
            repos: [],
            alert: {
                message: '',
                type: ''
            }
        }
        this.searchUsers = this.searchUsers.bind(this)
        this.clearUsers = this.clearUsers.bind(this)
        this.setAlert = this.setAlert.bind(this)
        this.getUser = this.getUser.bind(this)
        this.getUserRepos = this.getUserRepos.bind(this)
    }

    searchUsers(username) {
        this.setState({
            loading: true
        })
        axios.get(`https://api.github.com/search/users?q=${username}`)
            .then(response => response.data.items)
            .then(items => this.setState({
                users: items,
                loading: false
            }))
            .catch(error => console.error(error))
    }

    getUser(username) {
        this.setState({
            loading:true,
        });
        axios.get(`https://api.github.com/users/${username}`)
            .then(response => this.setState({
                user: response.data
            }))
            .catch(error => console.error(error));
    }

    getUserRepos(username) {
        this.setState({
            loading:true,
        });
        axios.get(`https://api.github.com/users/${username}/repos`)
            .then(response => this.setState({
                repos: response.data
            }))
            .catch(error => console.error(error));
    }


    clearUsers() {
        this.setState({
            users: [],
            alert: null
        })
    }

    setAlert(message, type) {
        this.setState({
            alert: {
                message: message,
                type: type
            }
        })
    }

    render() {
        return (
            <BrowserRouter>
                <Navbar/>
                <Alerts
                    alert={this.state.alert}
                />

                <Switch>
                    <Route path={"/"} exact render={
                        props => (
                            <Fragment>
                                <Search
                                    setAlert={this.setAlert}
                                    usersCount={this.state.users.length}
                                    searchUsers={this.searchUsers}
                                    clearUsers={this.clearUsers}
                                />
                                <Users
                                    users={this.state.users}
                                    loading={this.state.loading}
                                />
                            </Fragment>
                        )
                    }/>
                    <Route path="/about" component={About} />
                    <Route path="/user/detail/:username" render={props => (
                        <UserDetail
                            getUser={this.getUser}
                            getUserRepos={this.getUserRepos}
                            {...props}
                            user={this.state.user}
                            repos={this.state.repos}
                        />
                    )} />
                </Switch>



            </BrowserRouter>
        );
    }
}

export default App;
