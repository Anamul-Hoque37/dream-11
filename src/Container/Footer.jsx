

const Footer = () => {
    return (
        <div className="mt-60">
            <div className=" w-3/5 absolute mt-[-160px] ml-32 z-30">
                <div className="border rounded-3xl p-3">
                    <div className=" flex flex-col justify-center gap-4 items-center py-16 bg-emerald-500 border rounded-3xl bg-[url(https://i.ibb.co.com/kMf8NDX/bg-shadow.png)] bg-no-repeat bg-cover">
                        <h1 className="text-3xl font-semibold text-[#131313] ">Subscribe to our Newsletter</h1>
                        <p className="text-xl font-medium text-[#131313B3]">Get the latest updates and news right in your inbox!</p>
                        <div className="flex justify-between items-center">
                            <input className="border-2 w-56 p-2 rounded-sm" type="email" placeholder=" Enter your email" name="" id="" />
                            <input className="border-2 p-2 rounded-sm bg-red-200" type="submit" value="Subscribe" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#06091A] relative z-10">
                <div className="flex flex-col justify-center items-center pt-60 gap-8 pb-6">
                    <div>
                        <img src="https://i.ibb.co.com/Gt1XvpN/logo-footer.png" alt="" />
                    </div>
                    <div className="flex justify-between items-start gap-36">
                        <div className="flex flex-col items-center">
                            <h1 className="text-white">About Us</h1>
                            <p className="w-44 text-center text-stone-400">We are a passionate team dedicated to providing the best services to our customers.</p>
                        </div>
                        <div>
                            <p className="text-white">Quick Links</p>
                            <div className="text-stone-400">
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Contact</li>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-white">Subscribe</h1>
                            <p className="w-44 text-stone-400">Subscribe to our newsletter for the latest updates.</p>
                            <input className="border-2 rounded-sm" type="email" placeholder="Enter your email" name="" id="" />
                            <input className="bg-green-400 border-2 rounded-sm" type="submit" value="Subscribe" />
                        </div>
                    </div>
                    <hr className="bg-white text-2xl text-white " />
                    <div className="text-white">@2024 Your Company All Rights Reserved.</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
