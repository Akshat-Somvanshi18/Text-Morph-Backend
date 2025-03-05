import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


export const errorCheck = async(req,res) =>{
    try {
    let {text} = req.body;
    let prompt = text+"I would give you a text. Your task is to proofread the given text. Then, suggest any grammatical, spelling errors only in the text. Just suggest the changes to be made in the text point wise and nothing else. Also provide the edited text with suggested changes."
    const result = await model.generateContent(prompt);
    const textData = result.response.candidates[0].content.parts[0].text;
    res.status(200).json({message:textData});
        
    } catch (error) {
        console.log(error);
        res.status(400).json({message:error});
    }
};