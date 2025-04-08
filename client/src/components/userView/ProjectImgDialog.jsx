import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectImgDialog = ({ open, setOpen, images, initialIndex = 0 }) => {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent
                className="p-0 m-0 max-w-[90vw] max-h-[90vh] overflow-hidden flex flex-col bg-black"
            >
                <DialogHeader className="w-full px-4 py-2 bg-black text-white text-center">
                    <DialogTitle className="text-lg">Preview</DialogTitle>
                </DialogHeader>

                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    initialSlide={initialIndex}
                    spaceBetween={30}
                    className="w-full h-[400px] rounded-lg"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-contain"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </DialogContent>
        </Dialog>
    )
}

export default ProjectImgDialog