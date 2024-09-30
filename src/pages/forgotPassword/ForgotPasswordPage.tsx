import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './ForgotPassword.css';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
    return (
        <div className='card-container'>
            <Container>
                <section className="vh-50 ">
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div className="card bg-dark text-white" >
                                    <div className="card-body p-5 text-center">

                                        <div className="mb-md-5 mt-md-4 pb-5">

                                            <h2 className="fw-bold mb-2 text-uppercase">Password Recovery</h2>
                                            <p className="text-white-50 mb-5">Please enter your email!</p>

                                            <div data-mdb-input-init className="form-outline form-white mb-4">
                                                <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                                                <label className="form-label" >Email</label>
                                            </div>

                                            <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5" type="submit">Password Recovery</button>

                                            <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                                <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                                                <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                                <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                                            </div>

                                        </div>

                                        <div>
                                            <p className="mb-0">Don't have an account? <Link to="/register" className="text-white-50 fw-bold">Sign Up</Link>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </div>

    )
}

export default ForgotPasswordPage
