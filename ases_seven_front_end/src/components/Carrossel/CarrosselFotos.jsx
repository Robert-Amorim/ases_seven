import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export default function CarrosselFotos() {
  const fotos = Array.from({ length: 14 }, (_, idx) => `../../public/foto${idx + 1}.jpg`);

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="w-full max-w-3xl"
    >
      {fotos.map((src, idx) => (
        <SwiperSlide key={idx}>
          <div className="text-center">
            <img
              src={src}
              alt={`Foto ${idx + 1}`}
              className="rounded-xl shadow mb-1 w-full h-[250px] object-cover"
            />
            <p className="text-xs text-slate-600">Foto {idx + 1}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
