"use client";
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const ResetPassword = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [token, setToken] = useState<string | null>(null);
    const [newPassword, setNewPassword] = useState('');

    useEffect(() => {
        const retrievedToken = searchParams.get('token');
        if (retrievedToken) {
            setToken(retrievedToken);
        } else {
            alert("Token is missing or invalid.");
            router.push('/forgot-password');
        }
    }, [searchParams, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!token) {
            alert("Token is missing or invalid.");
            return;
        }

        const res = await fetch('/api/auth/reset-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token, password: newPassword }),
        });

        if (res.ok) {
            alert('Password reset successful!');
            router.push('/signin');
        } else {
            const data = await res.json();
            alert(data.message || 'Failed to reset password. Please try again.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center p-6 gap-4 bg-gray-300 rounded-md shadow-md w-96">
                <h2 className="text-lg font-bold mb-4">Reset Password</h2>
                <input 
                    type="password" 
                    value={newPassword} 
                    onChange={(e) => setNewPassword(e.target.value)} 
                    placeholder="New Password" 
                    required 
                    className="p-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                    type="submit" 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                >
                    Reset Password
                </button>
            </form>
        </div>
    );
};

export default ResetPassword;
