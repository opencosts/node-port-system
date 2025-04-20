import { User } from "../../models"

export function index(req: any, res: any) {

}
export async function store(req: any, res: any) {
    const { name, email, password } = req.body;
    try {


        const existingUser = await User.findOne({ email });

        const user = new User({ name, email, password });
        await user.save();

        res.json({
            user
        });

    } catch (error: any) {
        res.status(500).json({ message: 'Server error', error: error?.message || error });
    }



}
export function show(req: any, res: any) {

}
export function update(req: any, res: any) {

}

export function destroy(req: any, res: any) {

}