import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  endPoint = "http://localhost:8080/api/monsters";

  constructor(private httpClient: HttpClient) { }

  getMonsterById(id: number): Observable<any> {
    return this.httpClient.get(this.endPoint + "/" + id);
  }

  getMonsters() {
    return this.httpClient.get(this.endPoint);
  }

  createMonster(monster: any, blob: any) {
    let formData = new FormData();
    formData.append("name", monster.name);
    formData.append("type", monster.type);
    formData.append("filename", blob);

    return this.httpClient.post(this.endPoint, formData);
  }

  deleteMonster(id: number) {
    return this.httpClient.delete(this.endPoint + "/" + id);
  }

  updateMonster(id: number, monster: any, blob: any) {
    let formData = new FormData();
    formData.set("name", monster.name);
    formData.set("type", monster.type);
    formData.set("filename", blob);
    return this.httpClient.put(this.endPoint + `/${id}`, formData);
  }


}
