import React from 'react';

import { CpuIcon, CodeIcon, ShieldIcon, DatabaseIcon } from '../icons';

export default function ServicesSection() {
    return (
        <section className="bg-gray-100 dark:bg-gray-800 py-10 md:py-52 bg-image">
            <div className="container mx-auto px-10 md:px-6">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 ">Unlock Your IT Potential</h1>
                        <p className="text-black-600 dark:text-gray-400 mb-6">
                            Our IT consulting services help businesses of all sizes optimize their technology and drive growth.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <ServiceItem
                                icon={<CpuIcon className="h-10 w-12 text-blue-500" />}
                                title="Infrastructure"
                                description="Streamline your IT infrastructure for maximum efficiency."
                            />
                            <ServiceItem
                                icon={<CodeIcon className="h-10 w-12  text-blue-500" />}
                                title="Software Development"
                                description="Build custom software solutions to meet your unique needs."
                            />
                            <ServiceItem
                                icon={<ShieldIcon className="hh-10 w-12  text-blue-500" />}
                                title="Cybersecurity"
                                description="Protect your business from cyber threats with our security solutions."
                            />
                            <ServiceItem
                                icon={<DatabaseIcon className="h-10 w-12  text-blue-500" />}
                                title="Data Management"
                                description="Optimize your data infrastructure for better insights and decision-making."
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

function ServiceItem({ icon, title, description }) {
    return (
        <div className="flex items-start gap-4">
            {icon}
            <div>
                <h3 className="text-lg mb-2 font-bold">{title}</h3>
                <p className="text-white-600 dark:text-white-400">{description}</p>
            </div>
        </div>
    );
}
function ServiceItems({ icon, title, description }) {
    return (
        <div className="flex items-start gap-4">
            {icon}
            <div>
                <h3 className="text-lg mb-2 font-bold">{title}</h3>
                <p className="text-white-600 dark:text-white-400">{description}</p>
            </div>
        </div>
    );
}
