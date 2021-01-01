import React from 'react';
import Repo from "./Repo";

const Repos = ({repos}) => {
    if (repos.length > 0) {
        return (
            <React.Fragment>
                <hr/>
                <h3>Kullanıcının Repoları</h3>
                {
                    repos.map(repo => <Repo repo={repo} key={repo.id} />)
                }
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment></React.Fragment>
        )
    }
}

export default Repos;
