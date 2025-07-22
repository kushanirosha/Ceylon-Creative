/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Button } from './ui/button'

const WhoWeAre = () => {
    return (
        <div className='py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className="flex items-center ">
                <div className="flex-1 flex flex-wrap justify-around items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png" alt="LinkedIn Ads" className="m-2 h-12" />
                    <img src="https://www.google.com/images/branding/googlemic/2x/googlemic_color_24dp.png" alt="Google Tag Manager" className="m-2 h-12" />
                    <img src="https://www.google.com/images/branding/googlemic/2x/googlemic_color_24dp.png" alt="Google Ads" className="m-2 h-12" />
                    <img src="https://www.hotjar.com/wp-content/uploads/2023/08/hotjar-logo.png" alt="Hotjar" className="m-2 h-12" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png" alt="Meta" className="m-2 h-12" />
                    <img src="https://www.google.com/images/branding/googlemic/2x/googlemic_color_24dp.png" alt="Google Analytics" className="m-2 h-12" />
                </div>
                <div className="flex-1 pl-10">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Are?</h2>
                    <p className="text-gray-600 mb-4">
                        At Ceylon Creative, we are dedicated to elevating your business with our premier digital solutions. As a leading digital marketing agency, we specialize in four core areas: Digital Marketing, Web Development, Graphic Design, and SEO Services. Our goal is to empower businesses by enhancing their online presence and driving measurable success.
                    </p>
                    <Button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">
                        Read More →
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre
