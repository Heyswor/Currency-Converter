import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-ex-rates-tab',
  templateUrl: './ex-rates-tab.component.html',
  styleUrls: ['./ex-rates-tab.component.css'],
})
export class ExRatesTabComponent implements OnInit {
  exchangeRates: any[] = [];

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getExchangeRates().subscribe((data) => {
      this.exchangeRates = data;
    });
  }
}
