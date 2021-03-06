import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { getProducts } from "../redux/actions/product";

class NewNavbar extends Component {
  state = {
    name: "",
    category: "",
    hidden: false,
    activePage: 1,
    searchName: "",
  };

  searchProduct = (event) => {
    this.setState({ searchName: event.target.value });
    this.props.history.push(`?name=${event.target.value}`);
    const data = {
      activePage: 1,
      searchName: event.target.value,
    };
    this.props.dispatch(getProducts(data));
  };

  render() {
    const { onClick, onhidden } = this.props;
    const ValidasiForm = () => {
      return (
        <Fragment>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fa fa-fw fa-cogs"></i>
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <span className="dropdown-item">
                <Link to="/Category" className="nav-item nav-link">
                  Category
                </Link>{" "}
              </span>
              <span className="dropdown-item">
                <Link to="/" className="nav-item nav-link">
                  Product
                </Link>
              </span>
              <span className="dropdown-item">
                <Link to="/history" className="nav-item nav-link">
                  History
                </Link>
              </span>
            </div>
          </li>
        </Fragment>
      );
    };

    return (
      <Fragment>
        <nav
          className="navbarTop navbar sticky-top navbar-expand-lg navbar-light bg-ligh"
          style={{
            width: "100rem",
            height: "50px",
            marginLeft: "1%",
            position: "fixed",
            boxShadow: "0px 5px 10px #2222228c",
          }}
        >
          <span className="navbar-brand">Gaya-In</span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ValidasiForm />

              <span>
                <Link to="/user" className="nav-item nav-link">
                  <i className="fas fa-user-cog"></i>
                </Link>
              </span>
              <span>
                <Link
                  to="/login"
                  className="nav-item nav-link"
                  onClick={onClick}
                >
                  <i className="fas fa-sign-out-alt"></i>
                </Link>
              </span>
              <div className="search form-inline">
                <input
                  onChange={this.searchProduct}
                  hidden={onhidden}
                  value={this.state.searchName}
                  className="search form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
              <div
                className="input-group mb-3"
                style={{
                  marginLeft: "13rem",
                  height: "30px",
                  marginTop: "9px",
                }}
              >
                <div className="input-group-prepend"></div>
              </div>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    auth: state.auth,
  };
};

export default withRouter(connect(mapStateToProps)(NewNavbar));
