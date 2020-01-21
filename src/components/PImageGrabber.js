import React, { useState } from 'react'

import firebase from '../firebase';

const PImageGrabber = ({ imgName }) => {
    const [url, setUrl] = useState('');

    const imagesRef = firebase.storage().ref().child('images');
    const filePath = imagesRef.child(imgName + '.jpg');

    filePath.getDownloadURL().then(url => {
        setUrl(url);
        return;
    }).catch(function(error) {
        console.error(error);
        return;
    });


    return (
        <div>
            <img
                src={url}
                alt="Uploaded Images"
                height="200"
                width="300"
             />
        </div>
    );
}

export default PImageGrabber;