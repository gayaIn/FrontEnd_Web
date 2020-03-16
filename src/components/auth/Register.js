import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { postUser } from '../redux/actions/user';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      username: '',
      password: '',
      alamat: '',
      provinsi: '',
      kota: '',
    };
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.history.push('/');
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async e => {
    e.preventDefault();
    await this.props.dispatch(postUser(this.state));
    this.props.history.push('./Login.js');
  };

  render() {
    return (
      <div
        className='container'
        style={{ marginTop: '150px', backgroundColor: 'aqua' }}
      >
        <div className='card'>
          <div className='row justify-content-md-center'>
            <div className='col-md-8 my-4'>
              <form>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter name'
                    name='name'
                    onChange={this.onChange}
                    id='validationDefault02'
                    required
                  />
                  <div class='invalid-feedback'>Please choose a username.</div>
                </div>
                <div className='form-group'>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Enter email'
                    name='email'
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter username'
                    name='username'
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    className='form-control'
                    placeholder='Enter password'
                    name='password'
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter address'
                    name='alamat'
                    onChange={this.onChange}
                    required
                  />
                </div>
                <Form.Group controlId='exampleForm.ControlSelect1'>
                  <Form.Label>Provinsi</Form.Label>
                  <Form.Control
                    as='select'
                    name='category_id'
                    onChange={this.onChange}
                  >
                    <option value={'jakarta'}>Jakarta</option>
                    <option value={'jawa_barat'}>Jawa Barat</option>
                    <option value={'jawa_tengah'}>Jawa Tengah</option>
                    <option value={'jawa_tengah'}>Sulawesi</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId='exampleForm.ControlSelect1'>
                  <Form.Label>Kota</Form.Label>
                  <Form.Control
                    as='select'
                    name='category_id'
                    onChange={this.onChange}
                  >
                    <option value={'jakarta'}>Jakarta</option>
                    <option value={'bogor'}>Bogor</option>
                    <option value={'tangerang'}>Tangerang</option>
                    <option value={'bekasi'}>Bekasi</option>
                  </Form.Control>
                </Form.Group>
                <button
                  onClick={this.onSubmit}
                  type='submit'
                  className='btn btn-primary'
                >
                  Register
                </button>
                ||
                <Link className='btn btn-warning' to={'/login'}>
                  Login
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Register);
