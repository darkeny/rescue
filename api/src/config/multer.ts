import multer from 'multer'
import path from 'path'
import crypto from 'crypto'

const uploadsFolder = path.resolve(__dirname, "..", "tmp", "uploads")
export const configMulter = {
    dest: uploadsFolder,
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, uploadsFolder)    
        },
        filename: (req, file, callback) => {
            crypto.randomBytes(16, (err, hash) => {
                const uniqueSuffix = `${hash.toString('hex')}-${file.originalname}`
                callback(null, uniqueSuffix)
            })
        },
    }), 

}