import Router from 'express'
import upload from 'multer'
import { configMulter } from '../config/multer';


export const routes = Router()

routes.post('/posts', upload(configMulter).array('file'), (req, res) => {
    console.log(req.files);

    return res.status(200).json({ hello: 'succeed' })
})

routes.get("/getUsers", async (req, res) => {
    const [name, email] = req.body;

})


