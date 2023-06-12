import { CurrencyService } from '../currency.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
})
export class CurrencyConverterComponent implements OnInit {
  amount1: number = 0;
  amount2: number = 0;
  selectedCurrency1: string = '';
  selectedCurrency2: string = '';
  currencies: any[] = []; // Массив для хранения списка валют

  exchangeRates: any = {}; // Объект для хранения курсов обмена валют

  updatedField: string = ''; // Переменная для хранения информации о последнем обновленном поле

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getExchangeRates().subscribe((data) => {
      this.currencies = data;
      this.selectedCurrency1 = 'USD';
      this.selectedCurrency2 = 'EUR';
      this.updateExchangeRates();
    });
  }

  updateExchangeRates(): void {
    this.exchangeRates = {};

    for (const currency1 of this.currencies) {
      this.exchangeRates[currency1.cc] = {};

      for (const currency2 of this.currencies) {
        if (currency1.cc !== currency2.cc) {
          this.exchangeRates[currency1.cc][currency2.cc] =
            currency2.rate / currency1.rate;
        }
      }
    }

    this.convertCurrency();
  }

  convertCurrency(): void {
    const rate1 =
      this.exchangeRates[this.selectedCurrency1][this.selectedCurrency2];
    const rate2 =
      this.exchangeRates[this.selectedCurrency2][this.selectedCurrency1];

    if (this.updatedField === 'amount1') {
      if (this.amount1 && !isNaN(this.amount1)) {
        this.amount2 = this.amount1 * rate1;
        this.amount2 = Number(this.amount2.toFixed(2));
      } else {
        this.amount2 = 0;
      }
    } else if (this.updatedField === 'amount2') {
      if (this.amount2 && !isNaN(this.amount2)) {
        this.amount1 = this.amount2 * rate2;
        this.amount1 = Number(this.amount1.toFixed(2));
      } else {
        this.amount1 = 0;
      }
    }
  }

  onAmount1Input(): void {
    this.updatedField = 'amount1';
    this.convertCurrency();
  }

  onAmount2Input(): void {
    this.updatedField = 'amount2';
    this.convertCurrency();
  }
}
