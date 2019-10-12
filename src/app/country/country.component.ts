import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';  


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  
  public countrydetails;
  public flagImage: string;
  public selectedCountry: string;
  public showImage=false;
  constructor(private flag:CommonService) { }

  ngOnInit() {
    this.getCountryDetails();  
  }

  public getCountryDetails() {
    this.flag.getcountry().subscribe(data => {
      console.log(data);
      this.countrydetails = data;
    })
  }

  public showInfo(selectedCountry) {
    this.showImage= true;
    let dataIndex = this.countrydetails.findIndex(p => p.name == selectedCountry);
   this.flagImage = this.countrydetails[dataIndex].flag;

  }

}
