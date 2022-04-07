export interface Transaction{
    status:string,
    invoiceUrl:string,
    phone:number,
    address:string
}

export interface allTransactionResponse{
    data:Transaction[];
}