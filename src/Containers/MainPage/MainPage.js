import React, {Component} from 'react';
import Table from '../../Components/Table/Table'
import Header from '../../Layout/Header/Header'
import Axios from 'axios'
import Button from '../../Components/Button/Button'

class MainPage extends Component {
    state = {
        data : null

    }
    componentWillMount() {
        Axios.get("http://localhost:8080/customer/all")
        .then(response => {
            console.log(response)
            this.setState({
                data : response.data
            })
        })
    }
    
    render() {
        return (
            <div >
                <Header/>

                <Button type='add'  
                data='Add Customer'/>
               
                <Table 
                data = {this.state.data}/>

            </div>
        )
    }

}

export default MainPage;