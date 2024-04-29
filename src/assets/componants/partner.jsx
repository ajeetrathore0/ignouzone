import React from 'react';
import partner from '../images/partner.png'

const BecomePartnerPage = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
            <h1 style={{ fontSize: '2.5rem', margin: '30px 0', color: '#333' }}>Become a Partner</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '40px' }}>
                <img src={partner} alt="Partner Program" style={{ width: '300px', borderRadius: '10px' }} />
            </div>
            <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto 20px' }}>
                Join our partner program and gain access to a vast student audience eager to purchase assignments, books, notes, and more. Whether you're an individual creator, a publishing house, or an educational service provider, partnering with us opens up new avenues for revenue and exposure.
            </p>
            <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto 20px' }}>
                By becoming our partner, you'll benefit from a seamless platform for showcasing your offerings, targeted marketing campaigns, and dedicated support to help you maximize your sales potential. Join our community of educators, authors, and content creators, and together, let's empower students to excel academically.
            </p>
            <button style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '15px 30px', fontSize: '1.2rem', borderRadius: '5px', cursor: 'pointer' }}>
                Apply Now
            </button>
        </div>
    );
}

export default BecomePartnerPage;
