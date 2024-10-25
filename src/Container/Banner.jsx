

const Banner = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center bg-slate-900 rounded-3xl py-12 mb-12 gap-5 bg-[url(../../dist/assets/image/bg-shadow.png)]">
                <img src="../../dist/assets/image/banner-main.png" alt="" />
                <h1 className="text-4xl font-bold text-white">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className="text-2xl font-medium text-[#FFFFFFB3]">Beyond Boundaries Beyond Limits</p>
                <div className="p-2 border rounded-xl">
                <button className="p-2 bg-[#E7FE29] text-[#131313] rounded-xl">Claim Free Credit</button>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;