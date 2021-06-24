import React, { Component } from 'react';
import firebase from 'firebase';
import './../styles/subjects.css';


// // Import the main component
// import { Viewer } from '@react-pdf-viewer/core'; // install this library
// // Plugins
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// // Import the styles
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// // Worker
// import { Worker } from '@react-pdf-viewer/core'; // install this library

class Physics extends Component{

    constructor(props){
        super(props);
        this.state= {
            files : null
        }
    }

    handleChange = (files) => {
        this.setState({
            files : files
        })
    }

    handleSave = () => {
        let bucketName = "images";
        let file = this.state.files[0];
        let storageRef = firebase.storage().ref(`${bucketName}/${file.name}`);
        let uplaodTask = storageRef.put(file);
        uplaodTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            () => {
                let downloadURL = uplaodTask.snapshot.downloadURL
                alert('Upload Successfully')
            }    
        );
    } 

    // let defaultLayoutPluginInstance = defaultLayoutPlugin();

    showDocument = () => {
        let storageRef = firebase.storage().ref();
        let spaceRef = storageRef.child('images/'+this.state.files[0].name);
        storageRef.child('images/'+this.state.files[0].name).getDownloadURL().then( (url) => {
            console.log(url);
            document.getElementById('img').src = url;
        })
    }

    render(){
        return (
            <>

                <h2 id="subject-name">Physics</h2>

                <h3 id="note">You can upload Only Images Initially : </h3>
            
                <div className='document-submit'>
                    <input type="file" onChange={(e) => {this.handleChange(e.target.files)}}/>
                    <button id='btn' onClick={this.handleSave} >Submit</button>
                    {/* <button onClick={this.showDocument} >Show Document</button> */}
                    <br />
                    <br />
                    <img id="img" />
                    {/* <div className="pdf-container">
                        {viewPdf&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                            <Viewer fileUrl={viewPdf}
                            plugins={[defaultLayoutPluginInstance]} />
                            </Worker></>}
                    </div> */}
                </div>
            </>
        )
    }
}

export default Physics;
