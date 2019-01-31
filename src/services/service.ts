import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class Service {
  url = 'src/Json/Provinces.json';
  constructor(public http: HttpClient) {}

  // QueryTrains(QueryTrains: QueryTrainsModel): Observable<ApiResult<{}>> {
  //   return this.http.get(ApiUrlManagement.QueryTrains, {
  //     params: <{}>QueryTrains
  //   });
  // }

  // InsertTrain(InsertTrain: InsertTrainModel): Observable<ApiResult<{}>> {
  //   return this.http.post(ApiUrlManagement.InsertTrain, InsertTrain);
  // }
  provinces() {
    return this.http.get(this.url);
  }
}

// export interface DelTrainModel extends PageData{
//   id?: string;
// }
