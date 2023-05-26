import React from 'react';
import { Footer } from 'flowbite-react'
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';


const FooterNav = () => {
    return (
        <div>
            <Footer>
                <div className="w-full bg-[#929292] bg-opacity-20">


                    <div className="grid w-[90%] mx-auto justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 p-4 gap-5">
                        <div className='flex flex-col gap-5  justify-center'>
                            <Footer.Brand
                                href="/"
                                src="https://i.ibb.co/1MM33P6/kindpng-2104250.png"
                                alt="Logo"
                                name="TinySpeedsters"
                            />
                            <div className="flex space-x-6 sm:mt-0 sm:justify-center">
                                <Footer.Icon
                                    href="#"
                                    icon={BsFacebook}
                                />
                                <Footer.Icon
                                    href="#"
                                    icon={BsInstagram}
                                />
                                <Footer.Icon
                                    href="#"
                                    icon={BsTwitter}
                                />
                                <Footer.Icon
                                    href="#"
                                    icon={BsGithub}
                                />
                                <Footer.Icon
                                    href="#"
                                    icon={BsDribbble}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:mt-4  sm:gap-6 ">
                            <div>
                                <Footer.Title title="Contact us" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        Email
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Discord
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Location
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Legal" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        Privacy Policy
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Terms & Conditions
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Refund Policy
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                        </div>
                    </div>
                    <Footer.Divider />
                    <div className="pb-5 text-center">
                        <Footer.Copyright
                            href="#"
                            by="TinySpeedsters"
                            year={2023}

                        />
                    </div>
                </div>
            </Footer >
        </div >
    );
};

export default FooterNav;