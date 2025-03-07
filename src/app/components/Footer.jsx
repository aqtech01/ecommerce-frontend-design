import React from 'react';
import Image from 'next/image';
import US from 'country-flag-icons/react/3x2/US'
import UK from 'country-flag-icons/react/3x2/US'

export default function Footer() {
    return (
        <footer className="mt-6 bg-gray-100 py-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    <Brand />
                    <About />
                    <Partnership />
                    <Information />
                    <ForUsers />
                    <GetApp />
                </div>
            </div>
            <div className=" mt-3 flex flex-wrap justify-around gap-6">
               <p className=" ">
                ©Ecommerce 2023
               </p>
                <select>
                    <option value="English">English</option>
                </select>

            </div>
        </footer>
    );
}

const Brand = () => {
    const icons = ['facebook3', 'twitter3', 'linkedin3', 'instagram3', 'youtube3']
    return (
        <div>
            <Image src="/logo-colored.png" alt="Company Logo" width={128} height={96} className="w-24 md:w-32" />
            <p className="text-gray-600 text-sm mt-2">
                Best information about the company goes here but now lorem ipsum is
            </p>
            <div className="flex space-x-3 mt-3">
                {icons.map((platform) => (
                    <a href="#" key={platform}>
                        <Image src={`/${platform}.png`} alt={platform} width={32} height={32} />
                    </a>
                ))}
            </div>
        </div>
    );
};

const Section = ({ title, links }) => {
    return (
        <div>
            <h2 className="font-semibold text-lg mb-2">{title}</h2>
            <ul className="space-y-2 text-gray-600 text-sm">
                {links.map((link, index) => (
                    <li key={index}>
                        <a href="#" className="hover:text-gray-800">{link}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const About = () => <Section title="About" links={["About Us", "Find Store", "Categories", "Blogs"]} />;
const Partnership = () => <Section title="Partnership" links={["Become a Partner", "Affiliate Program", "Investor Relations"]} />;
const Information = () => <Section title="Information" links={["Help Center", "Money Refund", "Shipping", "Contact Us"]} />;
const ForUsers = () => <Section title="For Users" links={["Login", "Register", "My Orders", "Settings"]} />;

const GetApp = () => {
    return (
        <div>
            <h2 className="font-semibold text-lg mb-2">Get App</h2>
            <div className="flex flex-col space-y-2">
                <a href="#">
                    <Image src="/apple-store.png" alt="Download on the App Store" width={120} height={40} />
                </a>
                <a href="#">
                    <Image src="/google-store.png" alt="Get it on Google Play" width={120} height={40} />
                </a>
            </div>
        </div>
    );
};
