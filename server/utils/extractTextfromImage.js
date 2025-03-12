import Tesseract from "tesseract.js";

async function extractTextFromImage(file) {
    const data = await Tesseract.recognize(
        file.data,
        "eng",
        {
            logger:(m) =>{ },
        }
    )
    console.log(data.data.text);

    return data.data.text;

}

export default extractTextFromImage