import { AboutCardDialogContent } from "@/config";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"
import { Separator } from "../ui/separator";
import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import { useState } from "react";

const AboutDetailsDialog = ({ open, setOpen, selectedCard, setSelectedCard }) => {

    const [like, setLike] = useState(false);
    const [unLike, setUnLike] = useState(false);

    const handleCloseDialog = () => {
        setOpen(false);
        setSelectedCard(null);
    }

    return (
        <Dialog open={open} onOpenChange={handleCloseDialog}>
            <DialogContent className='w-96 sm:w-1/2 md:w-1/3 lg:w-[600px] rounded-lg p-6 bg-sky-900 dark:bg-red-900'>
                {
                    AboutCardDialogContent.map((item) => (
                        item.name === selectedCard ?

                            <div className="flex flex-col items-center justify-center gap-4">
                                <div className="flex items-center justify-center my-4">
                                    <DialogHeader>
                                        <DialogTitle className='text-5xl text-white dark:text-white'>{item.heading}</DialogTitle>
                                    </DialogHeader>
                                    <h1></h1>
                                </div>
                                <Separator/>
                                <div className="flex items-center overflow-auto">
                                    <p className="font-bold text-white">{item.description}</p>
                                </div>
                                <div className="flex w-full items-center justify-between">
                                    <ThumbsUpIcon onClick={() => setLike(previ => !previ)} className={`${like? 'fill-white' : ''} w-5 h-5`}/>
                                    <p className="font-semibold text-sm">______just for a fun______</p>
                                    <ThumbsDownIcon onClick={() => setUnLike(previ => !previ)} className={`${unLike? 'fill-white' : ''} w-5 h-5`}/>
                                </div>
                            </div>

                            : null
                    ))
                }
            </DialogContent>
        </Dialog>
    )
}

export default AboutDetailsDialog
