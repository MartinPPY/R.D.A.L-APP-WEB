import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GeneralModule } from '../modules/general/general-module';

@Component({
  selector: 'app-auth',
  imports: [RouterOutlet,GeneralModule],
  templateUrl: './auth.html',
  styleUrl: './auth.scss'
})
export class Auth {

}
