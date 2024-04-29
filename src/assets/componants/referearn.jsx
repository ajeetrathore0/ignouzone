import React from 'react';
import referEarnImage from '../images/image.png'; // Import your image file

const ReferEarnPage = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
            <h1 style={{ fontSize: '2.5rem', margin: '30px 0', color: '#333' }}>Refer & Earn</h1>
            <img src={referEarnImage} alt="Refer & Earn" style={{ width: '300px', borderRadius: '10px', marginBottom: '20px' }} />
            <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto 20px' }}>
                Invite your friends to purchase assignments or notes from our platform, and both of you can earn rewards! When a new user signs up using your referral link and makes their first purchase, you'll receive up to ₹50 as a referral bonus. Share your unique referral link today and start earning!
            </p>
            <button style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '15px 30px', fontSize: '1.2rem', borderRadius: '5px', cursor: 'pointer' }}>
                Share Your Referral Link
            </button>
        </div>
    );
}

export default ReferEarnPage;
