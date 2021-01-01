import React, {Component} from 'react';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:6399222,
            name: 'Ahmet Altun',
            avatar_url: 'https://avatars1.githubusercontent.com/u/6399222?v=4',
            url: 'https://github.com/biyonik',
            followers: 7,
            following: 15
        }
    }
    render() {
        const {login, avatar_url, html_url} = this.props.user
        return (
            <div className="col-md-3 col-sm-6">
                <div className="card my-2">
                    <img src={avatar_url} alt={login} className={"img-fluid"}/>
                    <div className="card-body">
                        <h5 className="card-title">{login}</h5>
                        <a href={html_url} target={"_blank"} className={"btn btn-sm btn-primary"}>Profile Git</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;
