 import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
 import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService, HttpClientModule, HttpClient, HttpHandler ]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
