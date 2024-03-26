import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.page.html',
  styleUrls: ['./animation.page.scss'],
})
export class AnimationPage implements OnInit {

  totalWorkHour = 100;
  number: any;
  constructor() { }

  async ngOnInit() {

    this.number = 50;

    var percentage = this.calculatePercentage(this.number, this.totalWorkHour / 3)
    this.addRule(percentage);
    console.log(this.number);
  }

 
  async addRule(persentage) {
    var sheet = document.styleSheets[0];

    if (persentage <= 100)
    {
      sheet.insertRule(`@keyframes spin1 { 0% {transform: translateY(0) rotate(0deg);} 100% {transform: translateY(-${persentage}%) rotate(500deg); }  }  `, 1);
    }
    else if (persentage > 100 && persentage <= 200)
    {
      var number = (persentage - 100);
      sheet.insertRule(`@keyframes spin1 { 0% {transform: translateY(0) rotate(0deg);} 100% {transform: translateY(-100%) rotate(500deg); }  }  `, 1);
      sheet.insertRule(`@keyframes spin2 { 0% {transform: translateY(0) rotate(0deg);} 100% {transform: translateY(-${number}%) rotate(500deg); }  }  `, 1);
    }
    else if (persentage > 200 && persentage < 300) 
    {
      var number = (persentage - 200);

      sheet.insertRule(`@keyframes spin1 { 0% {transform: translateY(0) rotate(0deg);} 100% {transform: translateY(-100%) rotate(500deg); }  }  `, 1);
      sheet.insertRule(`@keyframes spin2 { 0% {transform: translateY(0) rotate(0deg);} 100% {transform: translateY(-100%) rotate(500deg); }  }  `, 1);
      sheet.insertRule(`@keyframes spin3 { 0% {transform: translateY(0) rotate(0deg);} 100% {transform: translateY(-${number}%) rotate(500deg); }  }  `, 1);
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

  

}
