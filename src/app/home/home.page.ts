import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  desiredHours: any;
  totalHours: any;

  constructor(private router: Router) {}

  async ngOnInit() {

   
  }

  navigate() {
    if (this.isValidInput()) {
      this.router.navigate(['/animation'], {
        queryParams: {
          desiredHours: this.desiredHours,
          totalHours: this.totalHours
        }
      });
    } else {
      console.log('Please enter valid numbers for desired and total hours.');
    }
  }

  isValidInput(): boolean {
    return !isNaN(this.desiredHours) && !isNaN(this.totalHours);
  }
}

 

