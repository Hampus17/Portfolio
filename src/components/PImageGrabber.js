import React, { useState } from 'react'

import firebase from '../firebase';
import { useSpring, animated } from 'react-spring';


const calc = (x, y) => [-(y - window.innerHeight / 2) / 100, (x - window.innerWidth / 2) / 100, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const PImageGrabber = ({ imgName }) => {
    const [url, setUrl] = useState('');
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 100 } }))
  
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
        <animated.img
            src={url}
            alt="Project Thumbnail"
            className="project__thumb"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
        />
    );
}

export default PImageGrabber;