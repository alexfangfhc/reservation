import { Context } from "koa";
import { Reservations } from "../collections";

export const reservationCtrl = {
    Query: {
        async reservations(_: any, { input }: any, ctx: Context) {
            const reservation = Reservations.find({ createdBy: input.userId }).fetch();
            return reservation;
        }
    },
    Mutation: {
        updateReservationstatus(_: any, { id, status }: any, ctx: Context) {
            const result = Reservations.update({ _id: id }, { $set: { status: status } });
            return result;
        }
    }
}