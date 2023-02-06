import { Router } from "express";
import { createContactController, deleteContactController, listContactController, updateContactController } from "../controllers/contactController";
import verifyUserMeddleware from "../middlewares/verifyUserMeddleware";


const contactsRoutes = Router();

contactsRoutes.post("", createContactController )




contactsRoutes.get("", listContactController )
contactsRoutes.patch('/:id',  updateContactController)
contactsRoutes.delete('/:id',  deleteContactController)


export default contactsRoutes