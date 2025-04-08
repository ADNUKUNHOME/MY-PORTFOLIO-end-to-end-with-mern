import { newProjectAddControlls } from "@/config"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"
import CommonForm from "@/common/CommonForm"
import { useRef, useState } from "react"
import { CloudUpload, Trash2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useDispatch } from "react-redux"
import { addNewProject, fetchAllProjects } from "@/store/admin-slice/projectSlice"

const AddProjectDialog = ({ open, setOpen }) => {

    const [formData, setFormData] = useState({});
    const fileInputs = useRef([]);
    const [images, setImages] = useState([null, null, null, null]);
    const { toast } = useToast();
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        if (images.some(img => !img)) {
            toast({
                title: 'Oops!',
                description: 'Please upload 4 images',
                variant: 'destructive'
            })
            return;
        }

        const { title, description, deployUrl, technologies } = formData;
        if (!title || !description || !deployUrl || !technologies) {
            toast({
                title: 'Missing fields',
                description: 'Please fill in all required form fields.',
                variant: 'destructive'
            });
            return;
        }

        const data = new FormData();
        data.append("title", formData.title);
        data.append("description", formData.description);
        data.append("deployUrl", formData.deployUrl);
        data.append("technologies", formData.technologies);

        images.forEach((img, index) => {
            data.append("images", img);
        });

        dispatch(addNewProject(data))
            .unwrap()
            .then(() => {
                toast({
                    title: 'Success',
                    description: 'Project is added Successfully'
                })
                setOpen(false);
                setFormData({});
                setImages([null, null, null, null]);
            })
            .catch((err) => {
                console.error("Project submission failed:", err);
                toast({
                    title: 'Oops!',
                    description: 'Project submission failed',
                    variant: 'destructive'
                })
            });
    }



    const handleFileChange = (index, event) => {
        const file = event.target.files[0];
        if (file) {
            const updatedImages = [...images];
            updatedImages[index] = file;
            setImages(updatedImages);
        }
    };

    const triggerUpload = (index) => {
        if (fileInputs.current[index]) {
            fileInputs.current[index].click();
        }
    };

    const removeImage = (index) => {
        const updatedImages = [...images];
        updatedImages[index] = null;
        setImages(updatedImages);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>


            <DialogContent>
                <DialogHeader className='items-center justify-center'>
                    <DialogTitle>Add A New Project</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex gap-2 items-center justify-between">
                        {[0, 1, 2, 3].map((index) => (
                            <div
                                key={index}
                                className="relative flex w-20 h-20 items-center justify-center border-2 rounded-xl bg-gray-500 hover:bg-gray-400 hover:shadow-xl cursor-pointer overflow-hidden"
                                onClick={() => triggerUpload(index)}
                            >
                                {images[index] ? (
                                    <>
                                        <img
                                            src={URL.createObjectURL(images[index])}
                                            alt={`uploaded-${index}`}
                                            className="w-full h-full object-cover rounded-xl"
                                        />
                                        <div
                                            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition"
                                            onClick={(e) => {
                                                e.stopPropagation(); // prevent triggering upload
                                                removeImage(index);
                                            }}
                                            title="Remove image"
                                        >
                                            <Trash2 className="w-6 h-6 text-red-500 hover:text-red-700" />
                                        </div>
                                    </>
                                ) : (
                                    <CloudUpload className="w-8 h-8 text-white" />
                                )}
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    ref={(el) => (fileInputs.current[index] = el)}
                                    onChange={(e) => handleFileChange(index, e)}
                                />
                            </div>
                        ))}
                    </div>
                    <div className='w-full p-5 gap-3'>
                        <CommonForm formControls={newProjectAddControlls} formData={formData} setFormData={setFormData} onSubmit={onSubmit} buttonText={'Add Project'} />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default AddProjectDialog
