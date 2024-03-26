import { TestBed } from '@angular/core/testing';
import { AngularDefaultComponent } from './angular-default.component';

describe('AngularDefaultComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularDefaultComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AngularDefaultComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'demo-app' title`, () => {
    const fixture = TestBed.createComponent(AngularDefaultComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('demo-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AngularDefaultComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, demo-app');
  });
});

