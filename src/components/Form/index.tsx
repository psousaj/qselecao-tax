'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import Question from '@/components/Question'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';

export default function Form({ className }: { className: string }) {
    const [selectedItems, setSelectedItems] = useState({})

    const handleItemSelected = (name: string, value: number) => {
        setSelectedItems((prevSelectedItems) => ({
            ...prevSelectedItems,
            [name]: value,
        }));
    }

    return (
        <form action="" className={className}>
            <Swiper
                pagination={{
                    type: 'progressbar',
                    dynamicBullets: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className='w-full h-full'
            >
                <SwiperSlide>
                    <Question name="Q1" onSelect={handleItemSelected} />
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
            </Swiper>
        </form>
    )
}