import categories from "../../data/CategoriesTable";

const CategoriesTable = () => {
    return (
        <section className="container-r">
            <div className="wraper bg-white lg:flex-row lg:pr-4 gap-5 rounded-xl px-2">
                <div className="lg:w-[22.9375rem] lg:h-[32.5rem] rounded-tl-xl rounded-bl-xl overflow-hidden">
                    <img src="./image 65.png" alt="" className="w-full" />
                </div>

                <div className="flex-col flex-1 flex justify-center">
                    <div className="container--heading pl-8 lg:px-0 justify-start mb-2 text-2xl">
                        Popular Categories
                    </div>
                    <table
                        className="border border-[#DFDFDF] text-center border-collapse"
                        border={"1px solid #DFDFDF"}
                    >
                        <tbody>
                            {categories?.map(
                                ({ id, col1, col2, col3, col4 }) => {
                                    return (
                                        <tr key={id}>
                                            <td>{col1}</td>
                                            <td>{col2}</td>
                                            <td>{col3}</td>
                                            <td>{col4}</td>
                                        </tr>
                                    );
                                }
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default CategoriesTable;
