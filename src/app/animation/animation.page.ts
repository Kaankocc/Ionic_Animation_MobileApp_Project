import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.page.html',
  styleUrls: ['./animation.page.scss'],
})
export class AnimationPage implements OnInit {

  desiredHours: any;
  totalHours: any;
  percent: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  async ngOnInit() {

    this.route.queryParams.subscribe(params => {
      if (params && params['desiredHours'] && params['totalHours']) {
        this.desiredHours = parseInt(params['desiredHours']);
        this.totalHours = parseInt(params['totalHours']);
        // Now you have access to desiredHours and totalHours
        // You can use them as needed in your component
      }
    });

    var percentage = this.calculatePercentage(this.totalHours, this.desiredHours / 3)
    this.percent = ((100*this.totalHours)/ this.desiredHours);
    this.addRule(percentage);
  }

 
  async addRule(persentage) {
    var sheet = document.styleSheets[0];

    if (persentage <= 100)
    {
      sheet.insertRule(`@keyframes spin1 { 0% {transform: translateY(0) rotate(0deg);} 100% {transform: translateY(-${persentage}%) rotate(500deg); }  }  `, 1);
    }
    else if (persentage > 100 && persentage <= 200)
    {
      var totalHours = (persentage - 100);
      sheet.insertRule(`@keyframes spin1 { 0% {transform: translateY(0) rotate(0deg);} 100% {transform: translateY(-100%) rotate(500deg); }  }  `, 1);
      sheet.insertRule(`@keyframes spin2 { 0% {transform: translateY(0) rotate(0deg);} 100% {transform: translateY(-${totalHours}%) rotate(500deg); }  }  `, 1);
    }
    else if (persentage > 200 && persentage < 300) 
    {
      var totalHours = (persentage - 200);

      sheet.insertRule(`@keyframes spin1 { 0% {transform: translateY(0) rotate(0deg);} 100% {transform: translateY(-100%) rotate(500deg); }  }  `, 1);
      sheet.insertRule(`@keyframes spin2 { 0% {transform: translateY(0) rotate(0deg);} 100% {transform: translateY(-100%) rotate(500deg); }  }  `, 1);
      sheet.insertRule(`@keyframes spin3 { 0% {transform: translateY(0) rotate(0deg);} 100% {transform: translateY(-${totalHours}%) rotate(500deg); }  }  `, 1);
    }
    else if (persentage >= 300)
    {
      sheet.insertRule(`@keyframes spin1 { 0% {transform: translateY(0) rotate(0deg);} 100% {transform: translateY(-100%) rotate(500deg); }  }  `, 1);
      sheet.insertRule(`@keyframes spin2 { 0% {transform: translateY(0) rotate(0deg);} 100% {transform: translateY(-100%) rotate(500deg); }  }  `, 1);
      sheet.insertRule(`@keyframes spin3 { 0% {transform: translateY(0) rotate(0deg);} 100% {transform: translateY(-100%) rotate(500deg); }  }  `, 1);
    }

  }

    calculatePercentage(num, total) {
    return (100 * num) / total;
  }

  navigate() {
  
    this.router.navigate(['/']).then(() => {
      // Reload the page after navigation
      window.location.reload();
    });

}
}
