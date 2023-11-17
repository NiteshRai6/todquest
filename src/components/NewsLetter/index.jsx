import Button from "../Button";

const NewsLetter = () => {
    return (
        <section className="container-r gradient-container">
            <div className="wraper bg-white rounded-lg lg:flex-row p-4">
                <div className="lg:w-[22.8rem] lg:h-[22.8rem]">
                    <img src="newsletter.png" alt="" />
                </div>

                <div className="ml-4 flex-col flex-1 flex justify-center">
                    <h2 className="text-dark text-[2rem] font-bold">
                        Subscribe to our <br /> Newsletter!
                    </h2>
                    <p className="text-[#908F8F] mt-4">
                        Be the first to get exclusive offers <br /> and the
                        latest news
                    </p>

                    <input
                        type="text"
                        placeholder="Enter your email address"
                        className="py-2 px-5 gap-2 border border-[#D3D3D3] rounded-lg my-4 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />

                    <div>
                        <Button>SUBSCRIBE</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;
