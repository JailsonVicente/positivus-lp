import CardService from "./CardService";

export default function Services() {
    return (

        <section className={`flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:gap-y-10 lg:items-center`}>
            <div className="flex justify-center">
                <CardService
                    title1="Search engine"
                    title2="optimization"
                    titleColor="#B9FF66"
                    ArrowColor="/assets/ArrowGreen.svg"
                    cardImage="/assets/cardImage1.svg"
                    width={165}
                    height={129}
                    cardBackground="#F3F3F3"
                    textColor="#000000"
                />
            </div>
            <div className="flex justify-center">
                <CardService
                    title1="Pay-per-click"
                    title2="advertising"
                    titleColor="#FFFFFF"
                    ArrowColor="/assets/ArrowGreen.svg"
                    cardImage="/assets/cardImage2.svg"
                    width={165}
                    height={116.47}
                    cardBackground="#B9FF66"
                    textColor="#000000"
                />
            </div>
            <div className="flex justify-center">
                <CardService
                    title1="Social Media"
                    title2="Marketing"
                    titleColor="#FFFFFF"
                    ArrowColor="/assets/ArrowBlack.svg"
                    cardImage="/assets/cardImage3.svg"
                    width={127.12}
                    height={129}
                    cardBackground="#191A23"
                    textColor="#FFFFFF"
                />
            </div>
            <div className="flex justify-center">
                <CardService
                    title1="Email"
                    title2="Marketing"
                    titleColor="#B9FF66"
                    ArrowColor="/assets/ArrowGreen.svg"
                    cardImage="/assets/cardImage4.svg"
                    width={155}
                    height={142}
                    cardBackground="#F3F3F3"
                    textColor="#000000"
                />
            </div>
            <div className="flex justify-center">
                <CardService
                    title1="Content"
                    title2="Creation"
                    titleColor="#FFFFFF"
                    ArrowColor="/assets/ArrowGreen.svg"
                    cardImage="/assets/cardImage5.svg"
                    width={138.72}
                    height={129}
                    cardBackground="#B9FF66"
                    textColor="#000000"
                />
            </div>
            <div className="flex justify-center">
                <CardService
                    title1="Analytics and"
                    title2="Tracking"
                    titleColor="#FFFFFF"
                    ArrowColor="/assets/ArrowBlack.svg"
                    cardImage="/assets/cardImage6.svg"
                    width={157.78}
                    height={129}
                    cardBackground="#191A23"
                    textColor="#FFFFFF"
                />
            </div>
        </section>

    )
}