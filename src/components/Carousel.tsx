import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const memories = [
  {
    url: 'https://github.com/uzair9799/Rajeev-Malka/blob/main/src/lib/11.jpeg',
    title: 'A Beautiful Beginning',
    desc: 'The start of a lifelong journey.'
  },
  {
    url: 'https://github.com/uzair9799/Rajeev-Malka/blob/main/src/lib/22.jpeg',
    title: 'Shared Dreams',
    desc: 'Building a future filled with love.'
  },
  {
    url: 'https://github.com/uzair9799/Rajeev-Malka/blob/main/src/lib/33.jpeg',
    title: 'Moments to Cherish',
    desc: 'Every second spent together is a gift.'
  }
];

export default function Carousel() {
  return (
    <section className="py-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-xl border-[8px] border-double border-gold bg-cream shadow-2xl"
      >
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="h-[400px] w-full"
        >
          {memories.map((photo, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="h-full w-full object-cover grayscale-[20%] transition-transform duration-10000 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-cream">
                  <h3 className="font-serif text-2xl font-bold tracking-wide">{photo.title}</h3>
                  <p className="font-serif text-sm italic opacity-80">{photo.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="absolute top-4 right-4 z-10 rounded-full bg-gold/20 px-3 py-1 backdrop-blur-sm">
          <span className="font-serif text-[10px] uppercase tracking-widest text-gold text-white">25 Years of Love</span>
        </div>
      </motion.div>
    </section>
  );
}
