import { Component } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  currentDate: string = '';
  currentTime: string = '';
  filteredCurrencies$!: Observable<any[]>;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.filteredCurrencies$ = this.currencyService.getExchangeRates().pipe(
      map((currencies) => {
        const filteredCurrencies = currencies.filter(
          (currency: any) => currency.cc === 'USD' || currency.cc === 'EUR'
        );
        return filteredCurrencies;
      })
    );
    this.updateDateTime();
    setInterval(() => {
      this.updateDateTime();
    }, 1000);
  }
  updateDateTime() {
    const now = new Date();
    this.currentDate = now.toLocaleDateString();
    this.currentTime = now.toLocaleTimeString();
  }
}
