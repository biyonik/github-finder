import React, {Component} from 'react';
import {Link} from "react-router-dom";

class User extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {login, avatar_url, html_url} = this.props.user
        return (
            <div className="col-md-3 col-sm-6">
                <div className="card my-2">
                    <img src={avatar_url} alt={login} className={"img-fluid"}/>
                    <div className="card-body">
                        <h5 className="card-title">{login}</h5>
                        <Link to={`user/detail/${login}`} className={"btn btn-sm btn-info"}>Detaylar</Link>
                        <a href={html_url} target={"_blank"} className={"btn btn-sm btn-primary"}>Profile Git</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;
