'use client'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import Question from '@/components/Question'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function FormComponent({ className }: { className?: string }) {
    const [selectedItems, setSelectedItems] = useState({})

    const handleItemSelected = (name: string, value: number) => {
        setSelectedItems((prevSelectedItems) => ({
            ...prevSelectedItems,
            [name]: value,
        }));
    }
    return (
        <>
            <Swiper
                pagination={{
                    type: 'progressbar',
                    dynamicBullets: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className={`${className}`}
            >
                <SwiperSlide>
                    <Question name="Q1" onSelect={handleItemSelected} question='Ask me anything. This is a test!' />
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
            </Swiper>
        </>
    )
}