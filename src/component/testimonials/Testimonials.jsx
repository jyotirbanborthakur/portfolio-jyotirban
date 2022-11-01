import React from 'react'
import './Testimonials.css'
import avtr1 from '../../assets/1.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination,Autoplay,Navigation} from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import avtr2 from '../../assets/2.jpg'
import avtr3 from '../../assets/3.jpg'

const Testimonials = () => {
  const reviews=
  [
    {
      avatar:avtr1,
      name:'Jetaban Borthakur',
      review: 'Jyotirban is what you may call a real freelancer. I am grateful to have him for around 5 years as my IT Consultant. He has been my first preference when it comes to website development'
    },
    {
      avatar:avtr2,
      name:'Akshat Vishwakarma',
      review: 'Jyotirban and me met each other for the first time 7years back. Since then I have been his close friend, his problem solving skills and dedication towards his duty has no words. He does every possible works in a creative manner, best wishes for him '
    },
    {
      avatar:avtr3,
      name:'Celesty',
      review: 'The most humble and down to earth person I have ever met, I met him as a photographer in an ad shoot, his passion and dedication keeps the whole crew motivated. The best person to be trusted and relied'
    }
  ]
  return (
    <section id="Testimonials">
      <h1>Reviews from clients</h1>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials_container mySwiper"  spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
         >
        {
          reviews.map(({avatar,name,review},index)=>
          {
            return ( <SwiperSlide className="testimonial" key={index}>
            <div className="client_avatar">
              <img src={avatar} alt="" />
            </div>
            <h5 className='client_name'>
                {name}
              </h5>
              <small className='client_review'>
               {review}
              </small>
          </SwiperSlide>)
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials