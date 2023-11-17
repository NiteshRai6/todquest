import { FaSpinner } from 'react-icons/fa';

const Loading = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="center flex-col">
                <FaSpinner className="text-4xl animate-spin text-blue-500" />
                <p className="mt-4 text-lg text-gray-600 translate-x-2 font-semibold tracking-widest">Loading...</p>
            </div>
        </div>
    );
};

export default Loading;
