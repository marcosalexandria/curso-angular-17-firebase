import { User } from './../interfaces/user';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore' //banco de dados do firebase
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private dataBaseStore: AngularFirestore) { }

  user: User = {
    name: 'Marcos',
    email: 'marcos@email.com',
    sector: 'Tecnologia',
    role: 'Desenvolvedor'
  }

  getAllUsers(){
      //          obtem todos da coleção('users', ordena o que vier por('nome')).pega o({idField: muda o nome para 'firebaseId'})
                                                                                                                    //é um array de Observable
    return this.dataBaseStore.collection('users', user => user.orderBy('name')).valueChanges({idField: 'firebaseId'}) as Observable<any[]>
  }

  addUsers(user: User){
    return this.dataBaseStore.collection('users').add(user);
  }

  update(userId: string, user: User){
    return this.dataBaseStore.collection('users').doc(userId).update(user);
  }

  deleteUser(userId: string){
    return this.dataBaseStore.collection('users').doc(userId).delete();
  }
}
