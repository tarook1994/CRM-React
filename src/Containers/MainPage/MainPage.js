import React, { Component } from 'react';
import Table from '../../Components/Table/Table'
import Header from '../../Layout/Header/Header'
import Axios from 'axios'
import Button from '../../Components/Button/Button'
import AddPage from '../../Components/AddPage/AddPage'

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
        addedCustomer: false

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
        } else if (this.state.addedCustomer) {
            this.setState({
                addedCustomer: false
            })
            return true;
        }
        console.log(this.state.deleted + nextState.page + this.state.page + " ,returning false")


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

    render() {
        let page = null;
        if (this.state.page === 'main') {
            page = <div>
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
                <AddPage
                    back={this.backButtonHandler}
                    save={(type) => this.saveButtonHandler(type)}
                    firstName={(event) => this.firstNameHandler(event)}
                    lastName={(event) => this.lastNameHandler(event)}
                    email={(event) => this.emailHandler(event)}
                />
            </div>
        } else {
            page = <div>
                <Button type='add'
                    data='Add Customer'
                    action={this.addButtonHandler}
                />

                <Table
                    data={this.state.data}
                    delete={(id) => this.deleteHandler(id)}
                    update={(index) => this.updateHandler(index)} />
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