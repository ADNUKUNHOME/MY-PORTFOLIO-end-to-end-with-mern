import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"

const ProjectDetailsDialog = ({ open, setOpen, project }) => {

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className='max-w-[400px] max-h-[400px] overflow-auto'>
                <DialogHeader>
                    <DialogTitle>{project.title}</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-5">
                    <p>{project.description}</p>
                    <a href={project.deployUrl}>{project.deployUrl}</a>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ProjectDetailsDialog;
