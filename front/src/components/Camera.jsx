import React from "react"
import Webcam from 'react-webcam'
import { useEffect } from "react";

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };
  
const Camera = ({ ready, sendMessage }) => {
    const webcamRef = React.useRef(null)

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot()
            sendMessage(imageSrc)
        },
        [webcamRef]
    )

    useEffect(() => {
        const interval = setInterval(() => capture(), 1000 / 30);

        return () => clearInterval(interval)
    }, [])


    return (
        <Webcam
            audio={false}
            height={720}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={1280}
            videoConstraints={videoConstraints}
        />
    )
}

export default Camera