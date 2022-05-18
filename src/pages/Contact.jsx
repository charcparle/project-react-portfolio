import { useState, useEffect, useRef } from "react"
import Loader from "react-loaders"
import AnimatedLetters from "../components/AnimatedLetters"
import "../App.scss"
import emailjs from "@emailjs/browser"
import {
  MapContainer,
  TileLayer,
  SVGOverlay,
  Marker,
  Popup,
} from "react-leaflet"
function Contact() {
  const [letterClass, setLetterClass] = useState("")
  useEffect(() => {
    setLetterClass("text-animate")
    return setTimeout(() => setLetterClass("text-animate-hover"), 5000)
  }, [])
  const refForm = useRef()
  const bounds = [
    [49.3, -122.79],
    [49.33, -122.72],
  ]
  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        "gmail_personal",
        "contact_form",
        refForm.current,
        process.env.REACT_APP_EMAILJS_KEY
      )
      .then(
        () => {
          alert("Message successfully sent!")
          window.location.reload(false)
        },
        (error) => {
          alert("Failed to send the message, please try again")
          console.log(error)
        }
      )
  }
  return (
    <>
      <div className="contact-page h-full">
        <div className="absolute w-4/5 m-20 mt-36">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              str={"Contact me"}
              idx={15}
            />
          </h1>
          <p className="w-1/2">
            Feel free to contact me - I am constantly looking for exciting
            projects to work on.
          </p>
          <div className="contact-form">
            <form onSubmit={handleSubmit} ref={refForm}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="message" name="message" />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="fixed bg-black w-auto opacity-50 text-white text-2xl font-bold bottom-0 left-0">
          Charles Cheng,
          <br />
          Coquitlam, British Columbia <br />
          Canada <br />
          <br />
          <span>charles.yhcheng@gmail.com</span>
        </div>
        <div className="map-wrap grayscale-[50%]">
          <MapContainer
            center={[49.29, -122.79]}
            zoom={12}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[49.29, -122.79]}>
              <Popup>
                Charles Cheng. <br /> Let's hang out!
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="line-scale-pulse-out-rapid" />
    </>
  )
}

export default Contact
