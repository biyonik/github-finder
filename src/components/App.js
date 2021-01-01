import React, {Component, Fragment} from 'react';
import Navbar from "./Navbar";
import Users from "./Users";
import Search from "./Search";
import Alerts from "./Alerts";
import axios from "axios";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            users: [],
            alert: {
                message: '',
                type: ''
            }
        }
        this.searchUsers = this.searchUsers.bind(this)
        this.clearUsers = this.clearUsers.bind(this)
        this.setAlert = this.setAlert.bind(this)
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
            <Fragment>
                <Navbar/>

                <Alerts
                    alert={this.state.alert}
                />

                <Search
                    setAlert={this.setAlert}
                    usersCount={this.state.users.length}
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}/>

                <Users
                    users={this.state.users}
                    loading={this.state.loading}/>
            </Fragment>
        );
    }
}

export default App;
