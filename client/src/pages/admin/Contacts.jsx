import ContactMessageDialog from "@/components/adminView/ContactDialog";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getAllContacts } from "@/store/user/contactSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";




const AdminContacts = () => {

  const [openDialog, setOpenDialog] = useState(false);
  const {contact} = useSelector(state => state.contact);
  const dispatch = useDispatch();

  
  
useEffect(() => {
  dispatch(getAllContacts());
}, [dispatch])

  return (
    <Table>
      <TableCaption>The List of contacts that contacted me</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Subject</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {contact.map((contact) => (
          <TableRow key={contact.name}>
            <TableCell className="font-medium">{contact.name}</TableCell>
            <TableCell>{contact.email}</TableCell>
            <TableCell>{contact.subject}</TableCell>
            <TableCell className="text-right"><Button onClick={() => setOpenDialog(true)}>Message</Button></TableCell>
            <ContactMessageDialog open={openDialog} setOpen={setOpenDialog} message={contact.message} />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}


export default AdminContacts;