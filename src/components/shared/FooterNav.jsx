import React from 'react';
import { Footer } from 'flowbite-react'

const FooterNav = () => {
    return (
        <div>
            <Footer container={true}>
                <div className="w-full text-center">
                    <div className="w-[80%] mx-auto justify-between sm:flex sm:items-center sm:justify-between">
                        <Footer.Brand
                            href="/"
                            src="https://i.ibb.co/1MM33P6/kindpng-2104250.png"
                            alt="Logo"
                            name="TinySpeedsters"
                        />
                        <Footer.LinkGroup>
                            <Footer.Link href="/">
                                Home
                            </Footer.Link>
                            <Footer.Link href="/all-toys">
                                All Toys
                            </Footer.Link>
                            <Footer.Link href="/blogs">
                                Blogs
                            </Footer.Link>
                            <Footer.Link href="add-toy">
                                Add Toy
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <Footer.Divider />
                    <Footer.Copyright
                        href="#"
                        by="TinySpeedsters"
                        year={2023}
                    />
                </div>
            </Footer>
        </div>
    );
};

export default FooterNav;