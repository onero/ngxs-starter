import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { Navigate, AppRoutes } from 'src/app/router.state';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  title = 'Ngxr Test';

  constructor(private store: Store) { }

  ngOnInit() {
  }

  logout() {
    this.store.dispatch(new Navigate(AppRoutes.LOGIN));
  }

}
