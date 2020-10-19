import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WebappService } from './webapp.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('WebappService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, RouterTestingModule
      ]
    });
  });
  it('should be created', () => {
    const service: WebappService = TestBed.get(WebappService);
    expect(service).toBeTruthy();
  });
});
