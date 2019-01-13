import { TestBed, async, inject } from '@angular/core/testing';

import { OtpguardGuard } from './otpguard.guard';

describe('OtpguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OtpguardGuard]
    });
  });

  it('should ...', inject([OtpguardGuard], (guard: OtpguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
