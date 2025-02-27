'use client'; // Essa linha precisa estar no topo

import Image from 'next/image';
import { useState, FormEvent } from 'react';

interface FormErrors {
    email?: string;
    message?: string;
}

export default function Form() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [errors, setErrors] = useState<FormErrors>({});
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const validateForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let formErrors: FormErrors = {};

        if (!email) {
            formErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            formErrors.email = "Please enter a valid email.";
        }

        if (!message) {
            formErrors.message = "Message is required.";
        }

        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            handleFormSubmit();
        }
    };

    const handleFormSubmit = () => {
        console.log('Form submitted with data:', { name, email, message });
        setErrors({});
        setSuccessMessage("Your message has been sent successfully!");

        // Resetando os valores do formulário
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className={`flex items-center justify-between lg:py-[40px] lg:pl-[40px] lg-h-[773px] lg:bg-Grey lg:rounded-[45px] lg:overflow-hidden`}>
            <div className={`bg-[#F3F3F3] rounded-[45px] px-[30px] py-[40px] lg:w-[556px] lg:mb-[40px] flex flex-col items-center w-full h-auto`}>
                <form onSubmit={validateForm} className="w-full flex flex-col gap-[25px] items-center" autoComplete="off">
                    <div className="flex justify-between w-full mb-[36px]">
                        <label className="flex items-center">
                            <input type="radio" name="option" />
                            <span className="ml-[10px] text-black text-[16px] font-medium">Say Hi</span>
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="option" />
                            <span className="ml-[10px] text-black text-[16px] font-medium">Get a Quote</span>
                        </label>
                    </div>

                    <label className="flex flex-col gap-[10px] w-full">
                        <span className="text-[14px] lg:text-[16px]">Name</span>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            autoComplete="name"
                            className={`
        h-[60px] rounded-[14px] py-[18px] px-[20px]
        border border-black
        placeholder-opacity-50 placeholder-gray-500
    `}
                        />
                    </label>

                    <label className="flex flex-col gap-[10px] w-full">
                        <span className="text-[14px] lg:text-[16px]">Email*</span>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            autoComplete="email"
                            className={`
        h-[60px] rounded-[14px] py-[18px] px-[20px]
        border border-black
        placeholder-opacity-50 placeholder-gray-500
        ${errors.email ? 'border-red-500' : ''}
    `}
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                    </label>

                    <label className="flex flex-col gap-[10px] w-full">
                        <span className="text-[14px] lg:text-[16px]">Message*</span>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Message"
                            autoComplete="off"
                            className={`
        h-[132px] rounded-[14px] py-[18px] px-[20px]
        border border-black
        placeholder-opacity-50 placeholder-gray-500
        resize-none
        ${errors.message ? 'border-red-500' : ''}
      `}
                        ></textarea>
                        {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
                    </label>

                    <button
                        type="submit"
                        className={`
                        h-[68px] rounded-[14px] bg-Dark text-white
                        w-full mt-[30px]
    `}
                    >
                        Send Message
                    </button>

                    {successMessage && <span className="text-green-500 text-sm">{successMessage}</span>}
                </form>

            </div>
            <div className="hidden lg:block mr-[4px]  ">
                <Image width={336.21} height={638} src={"/assets/IllustrationForm.svg"} alt="form" />
            </div>
        </div>
    );
}
