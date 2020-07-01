import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaInscriptosComponent } from './tabla-inscriptos.component';

describe('TablaInscriptosComponent', () => {
  let component: TablaInscriptosComponent;
  let fixture: ComponentFixture<TablaInscriptosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaInscriptosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaInscriptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
