import { API_CONFIG } from './../../Config/api.config';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Rx';
import { CategoriaDTO } from '../../models/categotia.dto';

@Injectable()
export class CategoriaService{

    constructor(public http: HttpClient){
    }

    findAll() : Observable<CategoriaDTO[]> {
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`);
    }
}