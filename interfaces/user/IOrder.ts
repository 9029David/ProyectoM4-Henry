export interface IOrder {
    id: number
    status: Status.APPROVED,
    date: Date,
}

enum Status {
    APPROVED = "approved",
    DESAPROVED = "desaproved"
}