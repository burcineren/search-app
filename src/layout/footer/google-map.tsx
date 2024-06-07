import React from "react";

export function GoogleMap(){
    return(
        <div className="footer-content-map">
            <iframe
              src="https://maps.google.com/maps?width=600&amp;height=300&amp;hl=en&amp;q=tesodev&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="480"
              height="250"
              title="title"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
    );
};