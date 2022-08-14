import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  paymentUrl:string='http://localhost:3000/api/payments'
  constructor(private httpClient:HttpClient) { }

  addPayment(payment:any){
    return this.httpClient.post(`${this.paymentUrl}`,payment)
  }
  getAllPayments(){
    return this.httpClient.get<{payments:any}>(`${this.paymentUrl}/find/allPayment`)
  }
  getPaymentById(id:any){
    return this.httpClient.get<{payment:any}>(`${this.paymentUrl}/${id}`)
  }
  updatePayment(payment:any){
    return this.httpClient.put(`${this.paymentUrl}/${payment._id}`,payment)

  }
  deletePayment(id:any){
    return this.httpClient.delete(`${this.paymentUrl}/${id}`)
  }
}
