import dynamic from "next/dynamic"

const ImageWithFallback = dynamic(() => import("@/components/common/imageWithFallback/imageWithFallback"))
const Input = dynamic(() => import("@/components/common/input/input"))
const Button = dynamic(() => import("@/components/common/button/button"))
const Card = dynamic(() => import("@/components/common/card/card"))
const GmtiCard = dynamic(() => import("@/components/common/card/gmtiCard"))
const Pagination = dynamic(() => import("@/components/common/pagination/pagination"))
const BreadCrumb = dynamic(() => import("@/components/common/breadcrumb/breadcrumb"))
const YouTubeCard = dynamic(() => import("@/components/common/card/youtubeCard"))
const BasicCard = dynamic(() => import("@/components/common/card/basicCard"))
const CarouselGlossaryPage = dynamic(() => import("@/components/common/carouselGlossaryPage/carouselGlossaryPage"))
const CardReports = dynamic(() => import("@/components/common/card/cardReports"))
const CardBlogs = dynamic(() => import("@/components/common/card/cardBlogs"))
const CardReports2 = dynamic(() => import("@/components/common/card/cardReports2"))
const CardResearch = dynamic(() => import("@/components/common/card/cardResearch"))
const CardInsights = dynamic(() => import("@/components/common/card/cardInsights"))
const CardProfile = dynamic(() => import("@/components/common/card/cardProfile"))
const CardPodcasts = dynamic(() => import("@/components/common/card/cardPodcasts"))
const CardTestimonials = dynamic(() => import("@/components/common/card/cardTestimonials"))
const HeroCard = dynamic(() => import("@/components/common/card/heroCard"))
const CardLandingPage = dynamic(() => import("@/components/common/card/cardLandingPage"))
const HITGSCard = dynamic(() => import("@/components/common/card/hitgsCard"))
const NProgress = dynamic(() => import("@/components/common/nProgress/nProgress"))
const PricingCard = dynamic(() => import("@/components/common/card/pricingCard"))
const RatingCard = dynamic(() => import("@/components/common/card/ratingCard"))
const HitAwardCard = dynamic(() => import("@/components/common/card/hitCardAward"))
const HeadSection = dynamic(() => import("@/components/common/headSection/headSection"))
const ProfileCard2 = dynamic(() => import("@/components/common/card/profileCard2"))
const CheckBox = dynamic(() => import("@/components/common/checkBox/checkBox"))
const HotelCard = dynamic(() => import("@/components/common/card/hotelCard"))
const CrRatingBanner = dynamic(() => import("@/components/common/banner/banner"))
const PricingCard2 = dynamic(() => import("@/components/common/card/pricingCard2"))
const OpenStreetMap = dynamic(() => import("@/components/common/maps/OpenStreetMap"), { ssr: false })
const RichTextEditor = dynamic(() => import("@/components/common/richTextEditor/richTextEditor"), { ssr: false })
const FileUpload = dynamic(() => import("@/components/common/uploadFIle/uploadFile"))
export {
  CheckBox,
  FileUpload,
  OpenStreetMap,
  RichTextEditor,
  CrRatingBanner,
  ProfileCard2,
  HeadSection,
  PricingCard2,
  HitAwardCard,
  PricingCard,
  RatingCard,
  NProgress,
  ImageWithFallback,
  CardLandingPage,
  HotelCard,
  Input,
  Card,
  Button,
  GmtiCard,
  Pagination,
  BreadCrumb,
  YouTubeCard,
  CarouselGlossaryPage,
  BasicCard,
  CardBlogs,
  CardReports,
  CardReports2,
  CardResearch,
  CardInsights,
  CardProfile,
  CardPodcasts,
  CardTestimonials,
  HeroCard,
  HITGSCard
}
