import { Request, Response, NextFunction } from "express";
import { AuthService } from "../../services"
class AuthController {

    store = async (req: Request, res: Response) => {
        const { name, email, password } = req.body;
        const token = await AuthService.login(email, password);
        res.status(200).json({ token });
    };

    destroy = async (req: Request, res: Response) => {
        const { name, email, password } = req.body;

        try {

            // const user = await UserService.createUser(name, email, password);

            // const existingUser = await User.findOne({ email });

            // const user = new User({ name, email, password });
            // await user.save();

            res.json({
                "user": "we"
            });

        } catch (error: any) {
            res.status(500).json({ message: 'Server error', error: error?.message || error });
        }
    };


}

export default new AuthController();
