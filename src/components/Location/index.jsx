import React from 'react';

const Location = () => {
    return (
        <div className = "location_wrapper">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.432175074734!2d106.69972731533417!3d10.778174262107422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4877d5a885%3A0x4e8892a197b6a3d1!2zNzAtNzIgTMOqIFRow6FuaCBUw7RuLCBC4bq_biBOZ2jDqSwgUXXhuq1uIDEsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1585892862911!5m2!1svi!2s" 
            width="100%" 
            height="500px" 
            frameBorder="0" 
            allowFullScreen="" 
            aria-hidden="false" 
            tabindex="0"
            title="map"
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;