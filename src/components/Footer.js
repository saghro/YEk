import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6 px-4 md:px-6">
            <div className="container mx-auto flex items-center justify-between">
                <p className="text-sm">&copy; 2024 IT Consulting. All rights reserved.</p>
                <div className="flex items-center gap-4">
                    <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                    <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
