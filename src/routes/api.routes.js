import express from 'express'
import SmartphoneController from '../controllers/smartphone.controller.js'

import upload from '../config/upload.js'
import UploadController from '../controllers/upload.controller.js'
import UserController from '../controllers/user.controller.js'
import WelcomeController from '../controllers/welcome.controller.js'

const router = express.Router()

router.get('/welcome', WelcomeController.welcome)
router.post('/users', UserController.store)
router.post('/upload', upload.single('file'), UploadController.store)

router.get('/smartphone',SmartphoneController.index)
router.get("/smartphone/:id",SmartphoneController.show)
router.post("/smartphone",SmartphoneController.store)
router.put("/smartphone/:id",SmartphoneController.update)
router.patch("/smartphone/:id",SmartphoneController.update) 
router.delete("/smartphone/:id",SmartphoneController.delete)

export default router
