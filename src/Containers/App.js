import React, { useState, useEffect } from "react";
import CardList from "../Components/CardList";
import SearchBox from '../Components/SearchBox';
import Navbar from "../Components/Navbar";
import Scroll from '../Components/Scroll';
import ErrorBoundry from "../Components/ErrorBoundry";
import './App.css';
function App() {
    // constructor() {
    //     super();
    //     this.state = {
    //         robots: [],
    //         searchfield: ''
    //     }

    // }

    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(users => {
    //             this.setState({ robots: users });
    //         });
    // }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                setRobots(users);
            });
    }, [])
    // useEffect takes two arguments first one is function and second one is array.

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }



    const filterRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    if (robots.length === 0) {
        return <h1 className="green">Loading</h1>
    } else {

        return (
            <div className="tc">
                <Navbar />
                <h1 className="f2 br3 ba bw-1 bg-orange dib" >RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filterRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }

}

export default App;