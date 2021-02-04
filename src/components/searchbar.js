import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";

class Searchbar extends Component {

    handleFormSubmit = function({query}) {
        this.props.history.push('/results');
    }

    renderInput(field)  {
        return <input type="text" placeholder="Search DailySmarty" {...field.input} />
    }

    render() {

        const { handleSubmit } = this.props;
        return (
            <form className="search-bar" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field name="query" component={this.renderInput} />
            </form>
        )
    }
}

Searchbar = reduxForm({
    form: 'searchBar'
})(Searchbar);

Searchbar = withRouter(Searchbar);

export default Searchbar;