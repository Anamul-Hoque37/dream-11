

const Email = () => {
    return (
        <div className="py-16 mx-24 z-30">
            <div className=" flex flex-col justify-center gap-4 items-center py-16 bg-amber-100 border rounded-3xl">
                <h1 className="text-3xl font-semibold text-[#131313] ">Subscribe to our Newsletter</h1>
                <p className="text-xl font-medium text-[#131313B3]">Get the latest updates and news right in your inbox!</p>
                <div className="flex gap-2 justify-between items-center">
                    <input className="border-2" type="email" placeholder=" Enter your email" name="" id="" />
                    <input className="border-2 border-zinc-400 bg-red-200" type="submit" value="Subscribe" />
                </div>
            </div>
            
        </div>
    );
};

export default Email;