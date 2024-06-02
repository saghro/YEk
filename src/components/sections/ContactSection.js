import React from 'react';
import { Label } from '../ui/Label';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Button } from '../ui/Button';

export default function ContactSection() {
    return (
        <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">Contact Us</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Ready to take your business to the next level? Fill out the form below to schedule a consultation with our IT experts.
                        </p>
                        <form className="space-y-4">
                            <div>
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" type="text" />
                            </div>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" />
                            </div>
                            <div>
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" />
                            </div>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </form>
                    </div>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092454!2d144.95373631531593!3d-37.816279742021614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xb69c1bdfd6381b3e!2sYour%20IT%20Consulting%20Office!5e0!3m2!1sen!2sus!4v1615206510016!5m2!1sen!2sus"
                            width="100%"
                            height="450"
                            allowFullScreen=""
                            loading="lazy"
                            className="border-0"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
