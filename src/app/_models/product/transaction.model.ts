export interface Transaction{
    status:string,
    invoiceUrl:string
}

export interface allTransactionResponse{
    data:Transaction[];
    
}