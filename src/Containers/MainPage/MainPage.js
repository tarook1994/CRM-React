import React, {Component} from 'react';
import Table from '../../Components/Table/Table'
import Axios from 'axios'

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
                <Table 
                data = {this.state.data}/>

            </div>
        )
    }

}

export default MainPage;