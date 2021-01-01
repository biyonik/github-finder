import React, {Component} from 'react';

const Repo = ({repo}) => {
    return (
        repo &&
        <li className="list-group-item">
            <p><i className="far fa-dot-circle"></i> <strong className={"text-danger"}>{repo.name}</strong></p>
            <span className={"text-sm"}>{repo.description}</span>
            <a href={repo.html_url} className={"btn btn-sm btn-outline-info float-right"} target={"_blank"}>Repoya Git</a>
        </li>
    )
}

export default Repo;
