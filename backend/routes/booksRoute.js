const express = require("express");
const bookCtrl = require("../controllers/booksController")
const router = express.Router()


router.post("/", bookCtrl.createBook);


router.get("/", bookCtrl.getAllBook)

router.get("/:id", bookCtrl.getABook)

router.put("/:id",  bookCtrl.updateABook);

router.delete("/:id",  bookCtrl.deleteABook);


module.exports = router;