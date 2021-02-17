import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";

class Searchbar extends Component {

    handleFormSubmit = function({query}) {
        this.props.onSubmit(query);
    }

    renderInput(field)  {
        return <input type="text" placeholder="&#xf002; Search DailySmarty" {...field.input} />
    }

    render() {

        const { handleSubmit } = this.props;
        return (
            <form className="search-bar" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <div className="search-bar-wrapper">
                <Field name="query" component={this.renderInput} />
                <p>Press Return to Search</p>
                </div>
            </form>
        )
    }
}

Searchbar = reduxForm({
    form: 'searchBar'
})(Searchbar);

Searchbar = withRouter(Searchbar);

export default Searchbar;