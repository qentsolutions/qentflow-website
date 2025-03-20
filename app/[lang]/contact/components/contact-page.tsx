"use client";

import { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { ContactForm } from "./contact-form";
import { ContactInfoCard } from "./contact-info-card";

interface FormData {
    firstName: string;
    lastName: string;
    company?: string;
    email: string;
    message: string;
}

interface ContactPageDictionary {
    form: { title: string; firstName: string; lastName: string; company: string; email: string; message: string; privacyPolicy: string; privacyPolicyLink: string; privacyPolicyLinkText: string; submit: string; };
    title: string;
    description: string;
    mail: string;
    mailValue: string;
    mailDescription: string;
    office: string;
    officeValue: string;
    officeDescription: string;
    successMessage: {
        title: string;
        description: string;
        button: string;
    };
}

export function ContactPage({ dictionary }: { dictionary: ContactPageDictionary }) {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = async (formData: FormData) => {
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                toast.success("Message sent successfully!");
                setFormSubmitted(true);
            } else {
                toast.error("Failed to send message.");
            }
        } catch (e) {
            toast.error(`Failed to send message. ${e}`);
        }
    };

    const contactInfo = [
        {
            icon: Mail,
            title: dictionary.mail,
            value: dictionary.mailValue,
            description: dictionary.mailDescription,
        },
        {
            icon: MapPin,
            title: dictionary.office,
            value: dictionary.officeValue,
            description: dictionary.officeDescription,
        },
    ];

    if (formSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="min-h-screen flex items-center justify-center px-4"
            >
                <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{dictionary.successMessage.title}</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        {dictionary.successMessage.description}
                    </p>
                    <button
                        onClick={() => setFormSubmitted(false)}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                    >
                        {dictionary.successMessage.button}
                    </button>
                </div>
            </motion.div>
        );
    }

    return (
        <div className="min-h-screen">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl font-bold mb-6">{dictionary.title}</h1>
                        <p className="text-xl text-gray-100 max-w-2xl mx-auto">
                            {dictionary.description}
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {contactInfo.map((info, index) => (
                        <ContactInfoCard key={info.title} {...info} index={index} />
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-xl mx-auto">
                    <ContactForm onSubmit={handleSubmit} dictionary={{ form: dictionary.form, successMessage: dictionary.successMessage }} />
                </div>
            </div>
        </div>
    );
}
