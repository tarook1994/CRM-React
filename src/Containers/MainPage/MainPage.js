import React, { Component } from 'react';
import Table from '../../Components/Table/Table'
import Header from '../../Layout/Header/Header'
import Axios from 'axios'
import Button from '../../Components/Button/Button'
import AddPage from '../../Components/AddPage/AddPage'
import { thisExpression } from '@babel/types';

class MainPage extends Component {
    state = {
        data: null,
        page: "main",
        input: {
            firstName: '',
            lastName: '',
            email: ''

        },
        initial: true

    }
    componentWillMount() {
        Axios.get("http://localhost:8080/customer/all")
            .then(response => {
                console.log(response)
                this.setState({
                    data: response.data
                })
            })
    }

    componentDidUpdate() {

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
            return true;
        } else if (this.state.initial) {
            this.setState({
                initial: false
            })
            return true
        }

        return false;
    }
    componentDidUpdate() {
        if (this.state.page === 'main') {
            Axios.get("http://localhost:8080/customer/all")
                .then(response => {
                    console.log(response)
                    this.setState({
                        data: response.data
                    })
                })
        }

    }

    saveButtonHandler = () => {
        Axios.post("http://localhost:8080/customer/add", this.state.input).then(response => {
            console.log(response)
            this.setState({
                page: 'main',
            })
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

    render() {
        let page = null;
        if (this.state.page === 'main') {
            page = <div>
                <Button type='add'
                    data='Add Customer'
                    action={this.addButtonHandler}
                />

                <Table
                    data={this.state.data} />
            </div>
        } else if (this.state.page === 'add') {
            page = <div>
                <AddPage
                    back={this.backButtonHandler}
                    save={this.saveButtonHandler}
                    firstName={(event) => this.firstNameHandler(event)}
                    lastName={(event) => this.lastNameHandler(event)}
                    email={(event) => this.emailHandler(event)}
                />
            </div>
        }
        return (
            <div >
                <Header />
                {page}
            </div>
        )
    }

}

export default MainPage;