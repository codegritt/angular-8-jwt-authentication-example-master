import { Component, ViewChild } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';


export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
    email:string;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Gokul',email:'gokul@gmail.com', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Max', email:'max@gmail.com',weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'John',email:'john@gmail.com', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Nathan',email:'nathan@gmail.com', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Cecilia',email:'cecilia@gmail.com', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Karl',email:'karl@gmail.com', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Billy',email:'billy@gmail.com', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Butcher',email:'butcher@gmail.com', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Hugh', email:'hugh@gmail.com',weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Jack', email:'jack@gmail.com',weight: 20.1797, symbol: 'Ne'},
    {position: 11, name: 'Mann',email:'mann@gmail.com', weight: 1.0079, symbol: 'H'},
    {position: 12, name: 'Anita',email:'anita@gmail.com', weight: 4.0026, symbol: 'He'},
    {position: 13, name: 'Ethan',email:'ethan@gmail.com', weight: 6.941, symbol: 'Li'},
    {position: 14, name: 'Atlas',email:'atlas@gmail.com', weight: 9.0122, symbol: 'Be'},
    {position: 15, name: 'Hercules',email:'hercules@gmail.com', weight: 10.811, symbol: 'B'},
    {position: 16, name: 'Amit', email:'amit@gmail.com',weight: 12.0107, symbol: 'C'},
    {position: 17, name: 'Goyal',email:'goyal@gmail.com', weight: 14.0067, symbol: 'N'},
    {position: 18, name: 'Selene',email:'selene@gmail.com', weight: 15.9994, symbol: 'O'},
    {position: 19, name: 'Akash', email:'akash@gmail.com',weight: 18.9984, symbol: 'F'},
    {position: 20, name: 'Brock',email:'brock@gmail.com', weight: 20.1797, symbol: 'Ne'}
  ];
  

@Component({ templateUrl: 'home.component.html',
styleUrls: ['./home.component.css'] })
export class HomeComponent {
    loading = false;
    users: User[];

    
  specialEvents = []
 
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
 

    constructor(private userService: UserService) { }


    
 @ViewChild(MatPaginator ,{ static: true }) paginator:MatPaginator;
 @ViewChild(MatSort ,{ static: true }) sort : MatSort;


 
 ngAfterViewInit() {
  this.dataSource.sort = this.sort;
}


    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });

        
    this.dataSource.sort = this.sort;

    this.dataSource.paginator = this.paginator;
    }
    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }
}