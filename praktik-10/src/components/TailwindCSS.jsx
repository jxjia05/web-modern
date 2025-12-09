import REact from   'react';

function TailwindCSS() {    
    return (
        <div className="bg-purple-100 p-6 rounded-lg border border-purple-300">
            <button className="bg-purple-600 text-white px-4 py-2 rounded mr-4 hover:bg-purple-700 transition-colors mr-2">
                Tailwind CSS Button
            </button>
            <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-700 transition-colors">
                Another Tailwind Button
            </button>
            <p className="text-purple-800 font-medium mt-2">
                Styled with Tailwind CSS utility classes
            </p>
        </div>
    );
}

export default TailwindCSS; 