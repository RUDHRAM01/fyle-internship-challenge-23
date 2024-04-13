import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchTerm: string = '';
  isSearching: boolean = false; 
  constructor(private apiService: ApiService) {}

  onSearch(): void {
    this.isSearching = true;
    this.apiService.setSearchTerm(this.searchTerm);
    this.isSearching = false;
  }

}
