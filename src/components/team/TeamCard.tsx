import Image from "next/image";

interface cardProps {
    profileSRC: string
    name: string
    position: string
    description: string
}

export default function TeamCard(props: cardProps){
    return(
        <div className={`
            h-[300px] rounded-[45px] bg-[#FFFFFF]
            border border-Dark shadow-[0px_5px_0px_0px_#191A23]
            px-[35px] py-[40px]  lg:h-[350px]
        `}>
            <div  className="flex pb-[20px] border-b border-black relative justify-between">
                <div> 
                    <Image 
                        width={102.82}
                        height={102.82}
                        src={props.profileSRC}
                        alt="Team Image Profile"
                        
                    />
                </div>
                <div className="flex flex-col justify-end overflow-visible">
                    <h4 className="font-bold">{props.name}</h4>
                    <p className="whitespace-nowrap">{props.position}</p>
                </div>
                <div className="flex justify-end items-start">
                    <Image 
                            width={34}
                            height={34}
                            src={"/assets/linkedinIcon.svg"}
                            alt="linkedin Icon"
                        />
                </div>
            </div>
            <div className="mt-[20px] lg:mt-[25px]">
                <p>{props.description}</p>
            </div>
        </div>
    )
}