import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Navigate, AppRoutes } from 'src/app/router.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
  }

  routeTodos() {
    this.store.dispatch(new Navigate(AppRoutes.TODO));
  }

  logout() {
    this.store.dispatch(new Navigate(AppRoutes.LOGIN));
  }

}
