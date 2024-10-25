

const Footer = () => {
    return (
        <div className="bg-[#06091A] z-10">
            <div className="flex flex-col justify-center items-center pt-60 gap-8 pb-12">
                <div>
                <img src="../../dist/assets/image/logo-footer.png" alt="" />
                </div>
                <div className="flex justify-between items-center gap-8">
                <div>
                    <h1>About Us</h1>
                    <p className="w-52">We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>
                <div>
                    <p>Quick Links</p>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact</li>
                </div>
                <div>
                    <h1>Subscribe</h1>
                    <p className="w-52">Subscribe to our newsletter for the latest updates.</p>
                    <input type="email" placeholder="Enter your email" name="" id="" />
                    <input type="submit" value="Subscribe" />
                </div>
                </div>
                <hr />
                <div>@2024 Your Company All Rights Reserved.</div>
            </div>
        </div>
    );
};

export default Footer;
