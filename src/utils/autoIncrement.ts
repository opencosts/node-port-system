import { Document } from "mongoose";
import { IAutoIncrement, AutoIncrement } from "../models";

export async function setAutoIncrementId<T extends Document>(model: T, identifier: string): Promise<void> {
    if (model.isNew && typeof (model as any).id === 'undefined') {
        const autoIncrement = await AutoIncrement.findOneAndUpdate(
            { _id: identifier },
            { $inc: { seq: 1 } },
            { new: true, upsert: true }
        ).exec() as IAutoIncrement;

        (model as any).id = autoIncrement?.seq;
    }
}

