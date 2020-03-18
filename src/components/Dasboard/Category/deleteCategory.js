import React, { Component } from "react";
import { Form } from "react-bootstrap";

import { connect } from "react-redux";
import { deleteCategory } from "../../redux/actions/category";

class DeleteCategoryModal extends Component {
  onSubmitHandler = event => {
    event.preventDefault();

    const propsId = this.props.idCategory;
    console.log(propsId);

    this.props.dispatch(deleteCategory(propsId));
  };

  render() {
    return (
      <div
        className="modal fade"
        id="deleteCategoryModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="deleteCategoryModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteCategoryModalLabel">
                Alert!!
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Do you really want to delete this category?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                style={{backgroundColor:'#f1a98c', border: 'transparent'}}
              >
                Cancel
              </button>
              <Form>
                <button
                  onClick={this.onSubmitHandler}
                  data-dismiss="modal"
                  type="submit"
                  class="btn btn-danger"
                  style={{backgroundColor:'#a5a6a8', border: 'transparent'}}
                >
                  Delete
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(DeleteCategoryModal);
