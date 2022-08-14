import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

 
   testUrl:string="http://localhost:3000/api/tests"

  constructor(private httpClinet :HttpClient) { }


  addTest(test: any) {
    return this.httpClinet.post(this.testUrl,test );
  }

getAllTests()  {
  return this.httpClinet.get<{tests:any}>(this.testUrl);
 }

 editTest(test: any) {
  return this.httpClinet.put<{test : any}>(`${ this.testUrl }/${test._id}`, test);

}

getTestById(id: any) {

  return this.httpClinet.get<{test: any}>(`${ this.testUrl }/${id}`)
}

deleteTest(id: any) {
return this.httpClinet.delete(`${ this.testUrl }/${id}`)
}

findAllTests(){
  return this.httpClinet.get<{tests:any}>(this.testUrl + "/find/allTests")
}






}
