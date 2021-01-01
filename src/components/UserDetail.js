import React, {Component} from 'react';
import Repos from "./Repos";

class UserDetail extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUser(this.props.match.params.username)
        this.props.getUserRepos(this.props.match.params.username)
    }

    render() {
        const {
            name,
            avatar_url,
            location,
            html_url,
            bio,
            blog,
            followers,
            following,
            public_repos
        } = this.props.user


        return (
            <div className={"container my-3"}>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <img className={"card-img-top"} src={avatar_url} alt={name}/>
                            <div className="card-body">
                                <p className="card-text">{name}</p>
                                <hr/>
                                <p><i className={"fas fa-map-marker-alt"}></i> {location}</p>
                                <p>
                                    <a href={html_url} className={"btn btn-sm btn-block btn-primary"} target={"_blank"}>Github
                                        Profili</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                            {
                                bio &&
                                <>
                                    <h3>Hakkında</h3>
                                    <p>{bio}</p>
                                </>
                            }
                            {
                                blog &&
                                <>
                                    <h3>Blog</h3>
                                    <p>{blog}</p>
                                </>
                            }
                            <div>
                                <span className={"badge badge-primary m-1"}>Takipçiler: {followers}</span>
                                <span className={"badge badge-danger m-1"}>Takip Edilenler: {following}</span>
                                <span className={"badge badge-success m-1"}>Repo Sayısı: {public_repos}</span>
                            </div>
                        </div>
                        <ul className={"list-group list-group-flush"}>
                            <Repos repos={this.props.repos}/>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserDetail;
