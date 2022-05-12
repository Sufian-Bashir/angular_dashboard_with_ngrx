import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { concat } from "rxjs";
import { delay } from "rxjs/operators";
import { ChartModel } from "../store/models/chart.model";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private API_URL = "http://localhost:3000";
  constructor(private http: HttpClient) {}
  getChartData() {
    return this.http.get<Array<ChartModel>>(`${this.API_URL}/chartData`).pipe(
      // Just adding it on purpose to delay the call
      delay(1000)
    );
  }
  addChartData(payload: ChartModel) {
    return this.http.post(`${this.API_URL}/chartData`, payload).pipe(
      // Just adding it on purpose to delay the call
      delay(1000)
    );
  }
  deleteChartData(tabId: number) {
    return this.http.delete(`${this.API_URL}/chartData/${tabId}`).pipe(
      // Just adding it on purpose to delay the call
      delay(1000)
    );
  }
}
