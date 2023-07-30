import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { NewUser } from 'src/app/model/createUser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CreateUserService {
  @Injectable()
  private userUrl = 'NewlyCreatedUser';
  private registerNewUser = 'RegisterNewUser';

  authenticated: boolean = false;
  constructor(private http: HttpClient) {}

  GetAllUsers(): Observable<NewUser[]> {
    return this.http.get<NewUser[]>(`${environment.baseURL}/${this.userUrl}`);
  }
}
