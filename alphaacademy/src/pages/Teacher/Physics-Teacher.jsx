import React, { Component } from 'react';
import {storage} from '../../firebase';
import '../../styles/subjects.css';


class Physics extends Component{

    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0
        }
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }
    handleChange = e => {
        if (e.target.files[0]) {
        const image = e.target.files[0];
        this.setState(() => ({image}));
        }
    }

    handleUpload = () => {
        const {image} = this.state;
        const uploadTask = storage.ref(`physics/${image.name}`).put(image);
        uploadTask.on('state_changed', 
        (snapshot) => {
            // progrss function ....
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.setState({progress});
        }, 
        (error) => {
            // error function ....
            console.log(error);
        }, 
        () => {
            // complete function ....
            storage.ref('physics').child(image.name).getDownloadURL().then(url => {
                console.log(url);
                this.setState({url});
            })
            alert("Image uploaded");
        });
    }

    render() {

        return (
        <div className="style">

            <h1>Physics</h1>

            <h2>Here you can upload Assignments for students : </h2>

            <br />

            <progress value={this.state.progress} max="100"/>
            <br/>
            <input type="file" onChange={this.handleChange}/>
            <button id="btn" onClick={this.handleUpload}>Upload</button>
            <br/>
            {/* <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/> */}
        </div>
        )
    }
}

export default Physics;