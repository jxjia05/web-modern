import React, { useState } from 'react';

function ConditionalStyling() {
    const [status, setStatus] = useState('idle');
    const [isActive, setIsActive] = useState(false);

    // Return classes for a given button state (s). We also add a small
    // visual indicator when the button corresponds to the current `status`.
    const getStatusClasses = (s) => {
        const baseClasses = "px-4 py-2 rounded transition-colors mr-2";
        const activeRing = status === s ? ' ring-2 ring-offset-2 ring-indigo-300' : '';

        switch (s) {
            case 'success':
                return `${baseClasses} bg-green-500 text-white${activeRing}`;
            case 'error':
                return `${baseClasses} bg-red-500 text-white${activeRing}`;
            case 'loading':
                return `${baseClasses} bg-yellow-500 text-white${activeRing}`;
            default:
                return `${baseClasses} bg-gray-500 text-white${activeRing}`;
        }
    };

    const getBoxStyles = () => ({
        padding: '15px',
        borderRadius: '6px',
        border: isActive ? '2px solid #28a745' : '1px solid #dee2e6',
        backgroundColor: isActive ? '#d4edda' : '#f8f9fa',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
    });

    return (
        <div className="space-y-4">
            <div>
                <h3 className="text-lg font-semibold mb-2">Status Buttons:</h3>
                <button className={getStatusClasses('success')} onClick={() => setStatus('success')}>
                    Success
                </button>
                <button className={getStatusClasses('error')} onClick={() => setStatus('error')}>
                    Error
                </button>
                <button className={getStatusClasses('loading')} onClick={() => setStatus('loading')}>
                    Loading
                </button>
            </div>
            
            <div>
                <h3 className="text-lg font-semibold mb-2">Toggle Box:</h3>
                <div
                    style={getBoxStyles()}
                    onClick={() => setIsActive(!isActive)}
                >
                    <p>Click me to toggle active state</p>
                    <p>Current: {isActive ? 'Active' : 'Inactive'}</p>
                </div>
            
            </div>
        </div>
    );

}

export default ConditionalStyling;