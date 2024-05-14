import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(ApiService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a method getUser', () => {
    expect(service.getUser).toBeTruthy();
  });

  it('should have a method getSearchTerm', () => {
    expect(service.getSearchTerm).toBeTruthy();
  });

  it('should have a method setTotalPages', () => {
    expect(service.setTotalPages).toBeTruthy();
  });

  it('should have a method setCurrPage', () => {
    expect(service.setCurrPage).toBeTruthy();
  });

  it('should have a method getRepos', () => {
    expect(service.getRepos).toBeTruthy();
  });


});
