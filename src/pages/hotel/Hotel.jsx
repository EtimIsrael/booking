import "./hotel.css"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faLocationDot, faCircleArrowRight, faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [open, setOpen] = useState(false);
  const [slideNumber, setSlideNumber] = useState (0);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/city/square250/822312.webp?k=f0e5aa24884bf61ddc08284c59807fa7d3a66b72fbdcec15488faf45824143b6&o"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/city/square250/822312.webp?k=f0e5aa24884bf61ddc08284c59807fa7d3a66b72fbdcec15488faf45824143b6&o"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/city/square250/822312.webp?k=f0e5aa24884bf61ddc08284c59807fa7d3a66b72fbdcec15488faf45824143b6&o"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/city/square250/822312.webp?k=f0e5aa24884bf61ddc08284c59807fa7d3a66b72fbdcec15488faf45824143b6&o"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/city/square250/822312.webp?k=f0e5aa24884bf61ddc08284c59807fa7d3a66b72fbdcec15488faf45824143b6&o"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/city/square250/822312.webp?k=f0e5aa24884bf61ddc08284c59807fa7d3a66b72fbdcec15488faf45824143b6&o"
    }
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  }

  const handleMove = (direction) => {
    let newSlideNumber;

    if(direction==="l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
    } else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1
    }

    setSlideNumber (newSlideNumber)    
  };
    return (
      <div>
        <Navbar />
        <Header type="list" />
        <div className="hotelContainer">
          {open && <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow"onClick={()=>handleMove("l")}  />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
          </div>}
          <div className="hotelWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="hotelTitle">Grand Hotel</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Elton St 125 New York</span>
            </div>
            <span className="hotelDistance">
              Excellent location - 500m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over $114 at this property and get a free airport taxi
            </span>
            <div className="hotelImages">
              {photos.map((photo, i) => (
                  <div className="hotelImgWrapper">
                    <img 
                      onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                  </div>
                ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
                <p className="hotelDesc">
                  Located a 5minute walk from St. Florian's Gate in Krakow, Tower Street Apartment has accommodation with air conditioning and free WiFi. The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat-screen TV, and a private batroom with shower and a hairdryer. A fridge is also offered, as well as an electric tea pot and a coffee machine. Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hal Tower. The nearest airpoet is John Paul II International Krakow-Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a 9-night stay!</h1>
                <span>
                  Location in the real heart of Krakow, this property has an excellent location score of 9.8!
                </span>
                <h2>
                  <b>$945</b> (9 nights)
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer className="footer" />
        </div>
      </div>
    );
};

export default Hotel;
