import React, { Component } from 'react';
import Table from '../../Components/Table/Table'
import Header from '../../Layout/Header/Header'
import Axios from 'axios'
import Button from '../../Components/Button/Button'
import AddPage from '../../Components/AddPage/AddPage'
import isEqual from 'react-fast-compare'
import Login from '../Login/Login'
import NavBar from '../../Layout/NavigationBar/NavigationBar'
import Firebase from "firebase";
import Popup from '../../Layout/PopupModal/PopupModal'
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB8wHa2o_WyiF5Kawkn64DrDHhSHMZDKYo",
    authDomain: "bwish-926d0.firebaseapp.com",
    databaseURL: "https://bwish-926d0.firebaseio.com",
    projectId: "bwish-926d0",
    storageBucket: "bwish-926d0.appspot.com",
    messagingSenderId: "120094261556",
    appId: "1:120094261556:web:a62412640ec1e849"
};

class MainPage extends Component {
    state = {
        data: null,
        page: "main",
        input: {
            firstName: '',
            lastName: '',
            email: ''

        },
        updating: null,
        initial: true,
        deleted: false,
        Autherror: false,
        addedCustomer: false,
        errorMessage: null
    }
    constructor() {
        super()
        try {
            Firebase.initializeApp(config);
            this.auth = Firebase.auth();
        } catch (error) {

            console.log(error)
        }

    }
    componentWillMount() {
        Axios.get("http://localhost:8080/api/customer")
            .then(response => {
                console.log(response)
                this.setState({
                    data: response.data
                })
            })
    }


    addButtonHandler = () => {
        this.setState({
            page: 'add'
        })

    }

    backButtonHandler = () => {
        this.setState({
            page: 'main',

        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.page !== this.state.page) {
            console.log("page changed, returning true")
            return true;
        } else if (this.state.initial) {
            console.log("first Load, returning true")
            this.setState({
                initial: false
            })
            return true
        } else if (this.state.deleted) {
            console.log("deleted, returning true")
            return true;
        } else if (!isEqual(this.state.data, nextState.data)) {

            return true;
        } else if (this.state.errorMessage != nextState.errorMessage) {
            return true
        } else {
            return false;
        }

        return false;
    }
    componentDidUpdate() {
        if (this.state.page === 'main') {
            Axios.get("http://localhost:8080/api/customer")
                .then(response => {
                    console.log(response)
                    this.setState({
                        data: response.data,
                        deleted: false
                    })
                })
        }

    }

    saveButtonHandler = () => {
        Axios.post("http://localhost:8080/api/customer", this.state.input).then(response => {
            console.log(response)
            this.setState({
                page: 'main',
                addedCustomer: true
            })
            this.getCustomerList()
        })
    }
    firstNameHandler = (event) => {

        this.setState({
            ...this.state,
            input: {
                firstName: event.target.value,
                lastName: this.state.input.lastName,
                email: this.state.input.email
            }
        })

    }

    lastNameHandler = (event) => {
        this.setState({
            ...this.state,
            input: {
                firstName: this.state.input.firstName,
                lastName: event.target.value,
                email: this.state.input.email
            }
        })

    }

    emailHandler = (event) => {
        this.setState({
            ...this.state,
            input: {
                firstName: this.state.input.firstName,
                lastName: this.state.input.lastName,
                email: event.target.value
            }
        })

    }

    loginNavBarHandler = () => {
        this.setState({
            page: 'login'
        })
    }

    homeNavBarHandler = () => {
        this.setState({
            page: 'main'
        })
    }
    getCustomerList = () => {
        Axios.get("http://localhost:8080/api/customer")
            .then(response => {
                console.log(response)
                this.setState({
                    data: response.data
                })
            })
    }

    deleteHandler = (id) => {
        Axios.delete("http://localhost:8080/api/customer/" + id).then(response => {
            console.log(response)
            this.setState({
                deleted: true,
            })
            this.getCustomerList();
        })

    }

    updateHandler = (index) => {
        this.setState({
            page: 'update',
            updating: index
        })
    }

    sendUpdateToDatabase = () => {
        Axios.put("http://localhost:8080/api/customer/" + this.state.data[this.state.updating].id, this.state.input).then(response => {
            console.log(response)
            this.setState({
                page: 'main',
                updating: null
            })
        })
    }

    signInHanlder = (email, password) => {
        this.auth.signInWithEmailAndPassword(email, password)
            .then(response => {
                console.log(response)

            })
            .catch(error => {
                this.setState({
                    errorMessage: error.message,
                    Autherror: true
                })
                console.log(error)
            })
    }

    removePopup = () => {
        this.setState({
            Autherror: false,
            errorMessage: null

        })

    }

    render() {
        let page = null;
        if (this.state.page === 'main') {
            page = <div>
                <Header />
                <Button type='add'
                    data='Add Customer'
                    action={this.addButtonHandler}
                />

                <Table
                    data={this.state.data}
                    delete={(id) => this.deleteHandler(id)}
                    update={(index) => this.updateHandler(index)} />
            </div>
        } else if (this.state.page === 'add') {
            page = <div>
                <Header />
                <AddPage
                    back={this.backButtonHandler}
                    save={this.saveButtonHandler}
                    firstName={(event) => this.firstNameHandler(event)}
                    lastName={(event) => this.lastNameHandler(event)}
                    email={(event) => this.emailHandler(event)}
                />
            </div>
        } else if (this.state.page === 'update') {
            page = <div>
                <Header />
                <AddPage
                    back={this.backButtonHandler}
                    update={this.sendUpdateToDatabase}
                    firstName={(event) => this.firstNameHandler(event)}
                    lastName={(event) => this.lastNameHandler(event)}
                    email={(event) => this.emailHandler(event)}
                />
            </div>
        } else if (this.state.page === 'login') {
            const popup = this.state.Autherror ? <Popup
                remove={this.removePopup}
                message = {this.state.errorMessage}
            /> : null
            page = <div>
                {popup}
                <Login submit={(email, password) => this.signInHanlder(email, password)}
                    error={this.state.errorMessage}
                />
            </div>



        }

        return (
            <div >
                <NavBar
                    login={this.loginNavBarHandler}
                    home={this.homeNavBarHandler} />
                <div style={{
                    paddingTop: '24px'
                }}>
                    {page}
                </div>

                {/* <Login/> */}
            </div>
        )
    }

}

export default MainPage;