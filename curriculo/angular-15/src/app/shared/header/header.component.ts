import { Component, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() title: string | undefined;

  constructor(
    private authService: AuthService,
  ) { }

  logout() {
    this.authService.logout();
  }

}