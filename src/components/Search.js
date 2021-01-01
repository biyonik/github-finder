import React, {Component} from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({
            keyword: e.target.value
        })
    }

    setAlert(message, type) {
        this.props.setAlert(message, type)
    }

    onSubmit(e) {
        e.preventDefault()
        if (this.state.keyword === '') {
            this.setAlert("Lütfen bir kullanıcı adı giriniz!", "danger")
        } else {
            this.props.searchUsers(this.state.keyword)
            this.setState({
                keyword: ''
            })
            this.setAlert(null, null)
        }
    }

    render() {
        return (
            <div className="container my-3">
                <form onSubmit={this.onSubmit}>
                    <div className="input-group">
                        <input
                            placeholder={"Lütfen bir kullanıcı ismi ile kullanıcı arayın"}
                            value={this.state.keyword}
                            type="text"
                            onChange={this.onChange}
                            className="form-control"/>

                        <div className="input-group-append">
                            <button
                                type={"submit"}
                                className={"btn btn-sm btn-outline-secondary"}>
                                Ara
                            </button>
                        </div>
                    </div>
                </form>
                {
                    this.props.usersCount > 0
                        ?   <button onClick={this.props.clearUsers}
                                  className={"btn btn-secondary btn-sm btn-block mt-2"}>
                                Sonuçları Temizle
                            </button>
                        : null
                }
            </div>
        );
    }
}

export default Search;
