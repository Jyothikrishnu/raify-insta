import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpUrlEncodingCodec
} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';

export class CustomHttpUrlEncodingCodec extends HttpUrlEncodingCodec {
  encodeValue(v: string): string {
    return customEncoding(v);
  }
}

function customEncoding(v: string): string {
  return encodeURIComponent(v)
    .replace(/%40/gi, "@")
    .replace(/%24/gi, "$")
    .replace(/%2C/gi, ",")
    .replace(/%3B/gi, ";")
    .replace(/%3D/gi, "=")
    .replace(/%3F/gi, "?")
    .replace(/%2F/gi, "/");
}

@Injectable({
  providedIn: "root"
})
export class ApiBaseService {
  baseUrl = environment.baseUrl;
  apiPrefix = "apiPrefix";
  apiVersion = "v2";

  constructor(private httpClient: HttpClient) {}

  public getFullApiRoute(route: string, id?: number): string {
    let apiRoute;
    if (id) {
      apiRoute = `${this.baseUrl}/${this.apiVersion}/${route}/${id}/`;
    } else {
      apiRoute = `${this.baseUrl}/${this.apiVersion}/${route}`;
    }
    return apiRoute;
  }

  private getDefaultHeaders() {
    let headers = new HttpHeaders();
    headers = headers
      .append("Content-Type", "application/json")
      .append("Access-Control-Allow-Methods", "*")
      .append("Access-Control-Allow-Methods", "GET,POST,OPTIONS,DELETE,PUT")
      .append("Access-Control-Allow-Origin", "*")
    return headers;
  }

  private getHttpParams(params?) {
    return new HttpParams({
      fromObject: params,
      encoder: new CustomHttpUrlEncodingCodec()
    });
  }

  private getOptions(optionalParams?) {
    const headers = this.getDefaultHeaders();
    const httpParams = this.getHttpParams(optionalParams);
    return { params: httpParams, headers: headers };
  }

  public get<T>(route: string, params?): Observable<any> {
    return this.httpClient.get<T>(
      this.getFullApiRoute(route),
      this.getOptions(params)
    );
  }

}
