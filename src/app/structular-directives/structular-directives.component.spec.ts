import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructularDirectivesComponent } from './structular-directives.component';

describe('StructularDirectivesComponent', () => {
  let component: StructularDirectivesComponent;
  let fixture: ComponentFixture<StructularDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructularDirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructularDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
