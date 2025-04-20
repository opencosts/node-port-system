import { Document } from "mongoose";
import { ICounter, Counter } from "../models";

export async function setAutoIncrementId<T extends Document>(model: T, identifier: string): Promise<void> {
    if (model.isNew && typeof (model as any).id === 'undefined') {
        const counter = await Counter.findOneAndUpdate(
            { _id: identifier },
            { $inc: { seq: 1 } },
            { new: true, upsert: true }
        ).exec() as ICounter;

        (model as any).id = counter?.seq;
    }
}

