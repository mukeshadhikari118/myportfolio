import dbConnect from "../../middlewares/dbConnect";
import Message from '../../models/Message'

const handler =  async(req, res) => {
    await dbConnect();

    if (req.method === 'POST') {
        const newMessage = new Message({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
        })
        try {
            const savedMessage = await newMessage.save();
            res.status(200).send(savedMessage);
        } catch (error) {
            res.status(400).send(error)
        }
        
      }
}

export default handler