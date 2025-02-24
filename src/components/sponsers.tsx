// components/SponsorsSection.js
import React from 'react';

const SponsorsSection = () => {
    const sponsors = [
        {
            name: "Reskill Ecosystem",
            image: "/MLSA_WEBSITE/sponsers_logo/reskill.png" // Update with actual paths
        },
        {
            name: "Bobble Fanstore",
            image: "/MLSA_WEBSITE/sponsers_logo/bobblefanstore.png"
        },
        {
            name: "Microsystem Azure",
            image: "/MLSA_WEBSITE/sponsers_logo/azure.png"
        },
        {
            name: "Squareboat",
            image: "/MLSA_WEBSITE/sponsers_logo/squareboat.png"
        },
        {
            name: "Azure Developer Community",
            image: "/images/sponsors/azure-dev.png"
        },
        {
            name: "Devfolio",
            image: "/images/sponsors/devfolio.png"
        },
        {
            name: "Polygon",
            image: "/images/sponsors/polygon.png"
        },
        {
            name: "ETHIndia",
            image: "/images/sponsors/ethindia.png"
        },
        {
            name: "GitHub",
            image: "/images/sponsors/github.png"
        },
        {
            name: "Virtual Protocol",
            image: "/images/sponsors/virtual-protocol.png"
        },
        {
            name: "Tekshila AI",
            image: "/images/sponsors/tekshila.png"
        },
        {
            name: "Quill Audits",
            image: "/images/sponsors/quill.png"
        },
        {
            name: "Tezos",
            image: "/images/sponsors/tezos.png"
        },
        {
            name: "Dcornerr",
            image: "/images/sponsors/dcornerr.png"
        }
    ];

    return (
        <section className="py-16 px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-[#203A61] primary">
                    Our Trusted Sponsors
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                    {sponsors.map((sponsor, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center w-full"
                        >
                            <div className="mb-4 flex items-center justify-center h-20">
                                <img
                                    src={sponsor.image}
                                    alt={`${sponsor.name} logo`}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>
                            <p className="text-center text-gray-800 font-medium secondary">
                                {sponsor.name}
                            </p>
                        </div>
                    ))}
                </div>
                <p className="text-center text-gray-700 mt-8 secondary">
                    Supported by {sponsors.length}+ leading sponsors, backed by global and
                    community-driven brands.
                </p>
            </div>
        </section>
    );
};

export default SponsorsSection;