import { Request, Response } from "express";
import { User } from "../../models"
import { UserService } from "../../services"

class UserController {

    index = async (req: Request, res: Response) => {
        try {
            const users = await UserService.getUsers();
            res.json({ users });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server Error' });
        }
    };

    store = async (req: Request, res: Response) => {
        const { name, email, password } = req.body;

        try {

            const user = await UserService.createUser(name, email, password);

            // const existingUser = await User.findOne({ email });

            // const user = new User({ name, email, password });
            // await user.save();

            res.json({
                user
            });

        } catch (error: any) {
            res.status(500).json({ message: 'Server error', error: error?.message || error });
        }
    };




    show = async (req: Request, res: Response) => {
        const user = await UserService.getUserById(req.params.id);

        res.json({
            user
        });

    }

    update = async (req: Request, res: Response) => {

        const { id } = req.params;

        const { name, email, password, status } = req.body;

        try {

            const user = await UserService.updateUser(id, name, email, password, status);

            res.json({ user });
        } catch (error) {

        }
    }

    destroy = async (req: Request, res: Response) => {

        const { id } = req.params;

        try {

            const user = await UserService.deleteUser(id);

            res.json({ user });
        } catch (error) {

        }
    }
}


export default new UserController(); // ✅ export instance
