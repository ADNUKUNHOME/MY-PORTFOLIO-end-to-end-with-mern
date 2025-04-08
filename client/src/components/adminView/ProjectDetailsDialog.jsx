import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"

const ProjectDetailsDialog = ({ open, setOpen, project }) => {

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{project.title}</DialogTitle>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default ProjectDetailsDialog;
