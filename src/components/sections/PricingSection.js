import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { CheckIcon } from '../icons';

export default function PricingSection() {
    return (
        <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">Pricing</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <PricingCard
                        title="Starter"
                        description="Perfect for small businesses"
                        price="$99"
                        features={[
                            "IT infrastructure setup",
                            "Software development",
                            "Basic cybersecurity",
                            "Data management",
                        ]}
                    />
                    <PricingCard
                        title="Professional"
                        description="For growing businesses"
                        price="$199"
                        features={[
                            "Advanced IT infrastructure",
                            "Customized software solutions",
                            "Comprehensive cybersecurity",
                            "Advanced data management",
                        ]}
                    />
                    <PricingCard
                        title="Enterprise"
                        description="For large-scale businesses"
                        price="$399"
                        features={[
                            "Fully managed IT infrastructure",
                            "Enterprise-level software solutions",
                            "Advanced cybersecurity and compliance",
                            "Comprehensive data management and analytics",
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}

function PricingCard({ title, description, price, features }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="text-4xl font-bold mb-2">{price}</div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">per month</p>
                <ul className="space-y-2 mb-8">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <CheckIcon className="h-4 w-4 text-green-500" />
                            {feature}
                        </li>
                    ))}
                </ul>
                <Button variant="primary" className="w-full">
                    Get Started
                </Button>
            </CardContent>
        </Card>
    );
}
