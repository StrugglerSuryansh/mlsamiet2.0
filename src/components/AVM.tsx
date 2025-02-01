import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Compass } from 'lucide-react';

const MissionCards = () => {
    const cards = [
        {
            title: "Our Aim",
            icon: <Target className="w-12 h-12 text-indigo-600" />,
            content: "To revolutionize industry standards by delivering innovative solutions that exceed expectations and create lasting value for our stakeholders."
        },
        {
            title: "Our Vision",
            icon: <Eye className="w-12 h-12 text-emerald-600" />,
            content: "To be the global leader in transformative solutions, inspiring positive change and shaping a future where technology and human potential converge."
        },
        {
            title: "Our Mission",
            icon: <Compass className="w-12 h-12 text-rose-600" />,
            content: "To empower organizations through cutting-edge solutions while maintaining unwavering commitment to excellence, sustainability, and continuous innovation."
        }
    ];

    return (
        <div className="w-full p-6 bg-gray-50">
            <div className="flex flex-row space-x-6">
                {cards.map((card, index) => (
                    <Card key={index} className="flex-1 group hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="text-center pb-2">
                            <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                {card.icon}
                            </div>
                            <CardTitle className="text-xl font-bold text-gray-800">
                                {card.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-center text-gray-600">
                            {card.content}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default MissionCards;