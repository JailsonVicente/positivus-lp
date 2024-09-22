"use client"

import Image from "next/image";
import { useState } from "react";


// interface FAQItem {
//     question: string;
//     answer: string;
//     number: string;
// }

// const faqData: FAQItem[] = [
//     {
//         number: "01",
//         question: "O que é Next.js?",
//         answer: "Next.js é um framework React para desenvolvimento de aplicações web, que permite renderização do lado do servidor e geração de sites estáticos.",
//     },
//     {
//         number: "02",
//         question: "O que é Tailwind CSS?",
//         answer: "Tailwind CSS é um framework de CSS utilitário que permite estilizar rapidamente aplicações usando classes utilitárias.",
//     },
//     {
//         number: "03",
//         question: "Como funciona a renderização em Next.js?",
//         answer: "Next.js pode renderizar páginas no lado do servidor (SSR) ou gerar páginas estáticas (SSG), dependendo da configuração.",
//     },
// ];

// const CardProcess: React.FC = () => {
//     const [openIndex, setOpenIndex] = useState<number | null>(null);

//     const toggleItem = (index: number) => {
//         setOpenIndex(openIndex === index ? null : index);
//     };

//     const renderIcon = (index: number) => {
//         return openIndex === index ? (
//             <Image
//                 width={58}
//                 height={58}
//                 src={"/assets/MinusIcon.svg"}
//                 alt="Minus Icon"
//             />
//         ) : (
//             <Image
//                 width={58}
//                 height={58}
//                 src={"/assets/PlusIcon.svg"}
//                 alt="Plus Icon"
//             />
//         );
//     };

//     return (
//         <div className="">
//             {faqData.map((item, index) => {
//                 const isActive = openIndex === index;
//                 return (
//                     <div key={index} className="flex flex-col">
//                         <button
//                             onClick={() => toggleItem(index)}
//                             className={`flex justify-between w-full p-[30px] items-center
//                                 ${isActive ? 'bg-Green text-White shadow-none rounded-[30px] rounded-b-none' : 'bg-Grey shadow-[0px_5px_0px_0px_#191A23] rounded-[45px]'}
//                             `}
//                         >
//                             <div className="flex items-center gap-[33px]">
//                                 <span className="font-medium text-[33px] lg:text-[60px]">{item.number}</span>
//                                 <span className="font-medium text-[18px] lg:text-[30px]">{item.question}</span>
//                             </div>
//                             {renderIcon(index)}
//                         </button>
//                         {isActive && (
//                             <div className={`bg-Green p-[20px] rounded-b-[30px] transition-all duration-300`}>
//                                 <p className="text-[16px] lg:text-[24px] text-White">
//                                     {item.answer}
//                                 </p>
//                             </div>
//                         )}
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default CardProcess;

interface FAQItem {
    question: string;
    answer: string;
    number: string;
}

const faqData: FAQItem[] = [
    {
        number: "01",
        question: "Consultation",
        answer: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
        number: "02",
        question: "Research and Strategy Development",
        answer: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
        number: "03",
        question: "Implementation",
        answer: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
        number: "04",
        question: "Monitoring and Optimization",
        answer: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
        number: "05",
        question: "Reporting and Communication",
        answer: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
        number: "06",
        question: "Continual Improvement",
        answer: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
];

const CardProcess: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const renderIcon = (index: number) => {
        return openIndex === index ? (
            <Image
                width={58}
                height={58}
                src={"/assets/MinusIcon.svg"}
                alt="Minus Icon"
            />
        ) : (
            <Image
                width={58}
                height={58}
                src={"/assets/PlusIcon.svg"}
                alt="Plus Icon"
            />
        );
    };

    return (
        <div className="flex flex-col gap-5 mb-[140px]">
            {faqData.map((item, index) => {
                const isActive = openIndex === index;
                return (
                    <div key={index} className="flex flex-col gap-[20px]">
                        <div className={`w-full transition-all duration-300 ${isActive ? 'bg-Green text-White rounded-[30px] shadow-[0px_5px_0px_0px_#191A23] border border-black' : 'bg-Grey rounded-[45px] shadow-[0px_5px_0px_0px_#191A23] border border-black'}`}>
                            <button
                                onClick={() => toggleItem(index)}
                                className="flex justify-between w-full p-[20px] items-center "
                            >
                                <div className="flex items-center gap-[33px] text-left">
                                    <span className="font-medium text-[33px] lg:text-[60px]">{item.number}</span>
                                    <span className="font-medium text-[18px] lg:text-[30px]">{item.question}</span>
                                </div>
                                {renderIcon(index)}
                                
                            </button>
                            {isActive && (
                                <div className="p-[20px]">
                                    
                                    <p className=" border-t-[1px] border-black pt-[30px]">
                                        {item.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CardProcess;