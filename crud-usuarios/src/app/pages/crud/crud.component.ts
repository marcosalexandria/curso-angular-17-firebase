import { Component, ViewChild } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { User } from '../../interfaces/user';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CrudComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'benefits', 'action']; //propriedades das colunas da tabela
  dataSource: any;
  listUsers: User[] = [];
  //PAGINAÇÃO
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private usersService: UsersService){
    this.dataSource = new MatTableDataSource<any>(this.listUsers)
  }

  ngOnInit(){
    this.getListUsers();
  }


  getListUsers(){
    //subscribe é como um ouvirdor, ele conecta ao metodo e a cada mudança, ele já atualiza conferme as alterações, recebe um obj
    //next é oq vai acontecer se caso der certo a conexão
    //error é caso dê um erro
    this.usersService.getAllUsers().subscribe({
      next: (response: any) => {
        this.listUsers = response;  //AQUI JÁ PEGA OS USURARIOS QUE VEM EM RESPONSE
        this.dataSource = new MatTableDataSource<any>(this.listUsers) //PARA ITERAGIR COM A TABELA DO MATERIAL

        //PAGINA CONFORME OS USUARIOS ENCONTRADOS (PROPRIO DO MATERIAL)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => { console.log(err) }
    });
  }

  //FILTRO
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage()
    }
  }
}
