import "./Find_us.css";

const Find_us = () => {
    return (
        <div className="findUs">
            <div>
                <div className="barcode">
                    <img src={"qrcode-scan.png"} alt="qrcode" className="qrcode" />
                    <div className="more">
                        <h6>FOR MORE INFORMATION ABOUT US </h6>
                    </div>
                </div>
                <div className="infomation">
                    <a href="#">www.creatives.com</a>
                    <p>phone:+44-555-555</p>
                    <a href="#">Email:creative@career.com</a>
                </div>
            </div>
            <div className="handle">
                <div className="Instagram"><img src={"Instagram.png"} alt="instagram" />
                    <p className="socialMedia">creatives23_</p></div>
                <div className="Facebook"><img src={"Facebook.png"} alt="Facebook" />
                    <p className="socialMedia">creatives03_</p></div>
                <div className="LinkedIn"><img src={"LinkedIn.png"} alt="LinkedIn" />
                    <p className="socialMedia">creatives23_</p></div>
            </div>
            <div className="quote">
                <div>
                    <h3>Creativity is the spark that transforms imagination into innovation, unlocking new possibilities with every idea. </h3>
                   
                </div>
                 <div>
                        <img src={"Line.png"} alt="" />
                    </div>
            </div>

        </div>
    );
};

export default Find_us;
