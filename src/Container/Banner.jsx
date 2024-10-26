import PropTypes from "prop-types";

const Banner = ({saveAmount}) => {
    const amount = 5000000;
    return (
        <div>
            <div className="flex flex-col justify-center items-center bg-slate-900 rounded-3xl py-12 mb-12 gap-5 bg-[url(https://i.ibb.co.com/zNYRq2Z/bg-shadow.png)] bg-no-repeat bg-fixed">
                <img src="https://i.ibb.co.com/3TWx0X6/banner-main.png" alt="" />
                <h1 className="text-4xl font-bold text-white">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className="text-2xl font-medium text-[#FFFFFFB3]">Beyond Boundaries Beyond Limits</p>
                <div className="p-2 border rounded-xl">
                <button onClick={()=>saveAmount(amount)} className="p-2 bg-[#E7FE29] text-[#131313] rounded-xl">Claim Free Credit</button>
                </div>
            </div>
            
        </div>
    );
};
Banner.propTypes={
    saveAmount: PropTypes.func
}
export default Banner;