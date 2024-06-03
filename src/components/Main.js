import React from 'react';
import ServicesSection from './sections/ServicesSection';
import Nosentres from './sections/Nosentres';
import Azholding from './sections/Azholding';
// import Icon from './sections/Icon';
import Card from './sections/Card';
import PricingSection from './sections/PricingSection';
import ContactSection from './sections/ContactSection';

export default function Main() {
    return (
        <main className="flex-1">
            <ServicesSection />
            <Nosentres/>
            <Azholding/>
            {/* <Icon/> */}
            <Card/>
            <PricingSection />
            <ContactSection />
        </main>
    );
}
