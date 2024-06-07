
import { GoogleMap } from "./google-map";
import footerImage from "../../assets/images/footer.jpg"


export function Footer(){
    return(
        <div className="footer">
        <div className="footer-content">
          <div className="footer-content-image">
            <img src={footerImage} alt="img" />
          </div>
          <div className="footer-content-contact">
            <h3>İletişim</h3>
            <p className="contact-address">
              Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka
              Merkezi D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul
            </p>
            <p>
              <b>Email: bilgi@tesodev.com</b>
            </p>
          </div>
          <GoogleMap/>
        </div>
      </div>
    )
}