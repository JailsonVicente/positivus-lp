import Image from "next/image";

interface cardProps {
    title1: string;
    title2: string;
    titleColor: string;
    ArrowColor: string;
    cardImage: string;
    cardBackground: string;
    width: number;
    height: number;
    textColor: string;
}

export default function CardService(props: cardProps) {
    return (
        <div className={`
            w-full h-[322px] px-[57px] py-[50px] relative
            border border-Dark rounded-[45px] shadow-[0px_5px_0px_0px_#191A23]
            lg:w-[550px] lg:h-[310px]
        `}
            style={{ backgroundColor: props.cardBackground }}
        >
            <div>
                <h3 className="leading-[32px] lg:leading-[38px]">
                    <span className="rounded-[7px] m-0" style={{ backgroundColor: props.titleColor }}>
                        {props.title1}
                    </span>
                </h3>
                <h3 className="leading-[32px] lg:leading-[38px]">
                    <span className="rounded-[7px] m-0" style={{ backgroundColor: props.titleColor }}>
                        {props.title2}
                    </span>
                </h3>
            </div>
            <button className="absolute left-[50px] bottom-[50px]">
                <div className="flex items-center gap-2  hover:scale-110 hover:drop-shadow-2xl" style={{ color: props.textColor }}>
                <Image
                    width={41}
                    height={41}
                    src={props.ArrowColor}
                    alt="Learn More"
                />
                <p className="font-medium hidden lg:block leading-[41px]">Learn More</p>
                </div>
            </button>

            <Image
                width={props.width}
                height={props.height}
                src={props.cardImage}
                alt="Card Image"
                className="absolute bottom-[50px] right-[50px] lg:bottom-[75px]"
            />
        </div>
    )
}
