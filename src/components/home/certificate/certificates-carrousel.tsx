"use client";
import { sizes } from "@/assets";
import { IMG } from "@/components/common/IMG";
import { CertificationFragment } from "@/generated/graphql";
import "swiper/css";
import { Autoplay, EffectCreative, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  certifications: CertificationFragment[];
}
export const CertificateCarrousel = ({ certifications }: Props) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      effect="creative"
      spaceBetween={30}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay, EffectCreative]}
    >
      {certifications.map(({ id, picture, name }, idx) => (
        <SwiperSlide key={id}>
          <div className="aspect-[4/3] ">
            <IMG src={picture.url} alt={name} sizes={sizes.md} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
