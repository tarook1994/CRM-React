import React, { Component } from 'react';
import Table from '../../Components/Table/Table'
import Header from '../../Layout/Header/Header'
import Axios from 'axios'
import Button from '../../Components/Button/Button'
import AddPage from '../../Components/AddPage/AddPage'

class MainPage extends Component {
    state = {
        data: null,
        page: "main"

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

    addButtonHandler = () => {
        this.setState({
            page: 'add'
        })

    }

    render() {
        let page = null;
        if (this.state.page === 'main') {
            page = <div>
                <Button type='add'
                    data='Add Customer'
                    action={this.addButtonHandler} />

                <Table
                    data={this.state.data} />
            </div>
        } else if (this.state.page === 'add') {
            page = <div>
                <AddPage/>
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