const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads'))
        console.log('here123');

    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '_' + file.originalname)
    }
})



function fileFilter(req, file, cb) {
    console.log('here');
    if (file.mimetype == 'image/jpg' || file.mimetype == 'image/png' || file.mimetype == 'image/jif' || file.mimetype == 'image/jpeg') {
        cb(null, true)
    } else {
        cb('in-valid file type', false)

    }
}

const upload = multer({ fileFilter, storage });

module.exports = upload