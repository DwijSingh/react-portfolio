import { useEffect, useState} from 'react'
import './index.scss'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
      e.preventDefault()

      emailjs 
        .sendForm(
            'gmail',
            'template_9o3soo8',
            form.current,
            'WZE8iyLF5poPPhaH5tdE-'
        )
        .then(
            () => {
                alert('Message successfully sent.');
                window.location.reload(false);
            }, 
            () => {
                alert('Failed to send the message, please try again.');
            }
        )
  }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially ambitious or
                        large projects. However, if you have other request or question,
                        don't hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="email" 
                                        required 
                                     />
                                </li>
                                <li>
                                    <input 
                                        placeholder="Subject" 
                                        type="text" 
                                        name="subject" 
                                        required 
                                    />
                                </li>
                                <li>
                                    <textarea 
                                        placeholder="Message"
                                        name="message" 
                                        required >
                                    </textarea> 
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Dwij Singh
                    <br />
                    India,
                    <br />
                    Church Road, Kedarpur, <br />
                    Ambikapur <br /> 
                    <br/>
                    <span>dwijsingh786@gmail.com</span>

                </div>
                <div className="map-wrap">
                <MapContainer center={[23.127133, 83.196260]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[23.127133, 83.196260]}>
                        <Popup>Dwij lives here, I will love to meet you!</Popup>
                    </Marker>
                </MapContainer>

                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact