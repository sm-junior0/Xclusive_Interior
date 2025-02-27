import React from 'react';

// components
import AppLayout from '../layouts/AppLayout';
import HeroSlider from '../components/HeroSlider';
import ServiceCards from '../components/ServiceCards';
import ServiceDetailsCard from '../components/ServiceDetailsCard';
import ExclusiveGallary from '../components/ExclusiveGallary';

const Home = () => {
    return (
        <AppLayout>
            <HeroSlider/>
            <ServiceCards/>
            <ServiceDetailsCard type="construction"/>
            <ServiceDetailsCard type="interior"/>
            <ExclusiveGallary/>
        </AppLayout>
    );
}

export default Home;