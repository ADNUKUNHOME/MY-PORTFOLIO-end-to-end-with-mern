import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"

const ContactMessageDialog = ({open, setOpen, message}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className='max-w-[500px] max-h-[500px] overflow-auto'>
            <DialogHeader>
                <DialogTitle>Message For You</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col overflow-auto">
                <p className="font-bold text-gray-600">{message}</p>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default ContactMessageDialog
