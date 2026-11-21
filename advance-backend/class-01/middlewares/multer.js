import multer from "multer";
import fs from "fs"

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (!fs.existsSync("./uploads")) {
            fs.mkdir("./uploads", (error, res) => {
                if (error) {
                    cb(true, false)
                } else {
                    cb(false, "./uploads");
                }
            })
        }
    },
    filename: (req, file, cb) => {
        const filename = 
    }
})