import { Router } from 'express'
import createSessionController from '../controllers/sessionController'




const sessionRoutes = Router()

sessionRoutes.post('', createSessionController)


export default sessionRoutes