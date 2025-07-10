// components/CrescentRatingBanner.tsx
import { Button } from "..";

interface CrescentRatingBannerProps {
    buttonNameBlue?: string;
    buttonNameWhite?: string;
}

export default function CrescentRatingBanner({ buttonNameBlue, buttonNameWhite }: CrescentRatingBannerProps) {
    return (
        <div className="w-full flex flex-col justify-center items-center rounded-lg"
            style={{ backgroundImage: "url('/image/rating-accreditation/bg.webp')", backgroundSize: "contain" }}>
            <div className="w-full h-full min-h-[300px] text-white flex rounded-lg flex-col  gap-4 justify-center items-center bg-primary-cr-700/90">
                <p className="sm:text-desktop-heading-2 text-mobile-heading-4 font-bold mb-4 text-center w-full">Get Your Services Crescent Rated Today</p>
                <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center">Join the ranks of globally recognized halal-friendly services. Apply now for our comprehensive rating services.</p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
                    {
                        buttonNameWhite && (
                            <Button className="!py-5 !px-6 bg-white min-w-[280px] !border-white text-primary-cr-700">
                                {buttonNameWhite}
                            </Button>
                        )
                    }
                    {
                        buttonNameBlue && (
                            <Button className="!py-5 !px-6 bg-primary-cr-700 min-w-[280px] !border-primary-cr-700 text-white">
                                {buttonNameBlue}
                            </Button>
                        )
                    }
                </div>
            </div>
        </div>
    );
};
