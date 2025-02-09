"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
    Target,
    Eye,
    Flag,
    Users,
    Calendar,
    Trophy
} from "lucide-react";
import ContactForm from '@/components/ContactForm';

interface FormData {
    name: string;
    email: string;
    year: string;
    branch: string;
    whyJoin: string;
}

export default function JoinUs() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        year: '',
        branch: '',
        whyJoin: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <div className="py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-7xl text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">
                        Join The Tech Society
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Empowering students through technology, innovation, and collaboration since 2018
                    </p>
                </div>
            </div>

            {/* Society Info Cards */}
            <div className="py-12 px-6 lg:px-8">
                <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="bg-white">
                        <CardContent className="p-6">
                            <Target className="h-8 w-8 text-blue-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Our Aim</h3>
                            <p className="text-gray-600">
                                To foster technical excellence and innovation among students through hands-on learning and real-world projects.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white">
                        <CardContent className="p-6">
                            <Eye className="h-8 w-8 text-blue-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                            <p className="text-gray-600">
                                To become the leading student technical community, creating future technology leaders and innovators.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white">
                        <CardContent className="p-6">
                            <Flag className="h-8 w-8 text-blue-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                            <p className="text-gray-600">
                                To provide a platform for learning, collaboration, and growth in technology through events, workshops, and projects.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-12 px-6 lg:px-8 bg-white">
                <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <Calendar className="h-8 w-8 text-blue-500 mx-auto mb-4" />
                        <h4 className="text-2xl font-bold text-gray-900">Est. 2018</h4>
                        <p className="text-gray-600">Year Established</p>
                    </div>
                    <div>
                        <Users className="h-8 w-8 text-blue-500 mx-auto mb-4" />
                        <h4 className="text-2xl font-bold text-gray-900">500+</h4>
                        <p className="text-gray-600">Active Members</p>
                    </div>
                    <div>
                        <Trophy className="h-8 w-8 text-blue-500 mx-auto mb-4" />
                        <h4 className="text-2xl font-bold text-gray-900">50+</h4>
                        <p className="text-gray-600">Events Organized</p>
                    </div>
                </div>
            </div>
            <ContactForm />

            {/* Join Form */}

        </div>
    );
}