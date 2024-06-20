import { ComponentFixture, TestBed} from "@angular/core/testing";
import { RegistrolistoComponent} from "./registrolisto.component";

describe('RegistrolistoComponent', () => {
  let component: RegistrolistoComponent;
  let fixture: ComponentFixture<RegistrolistoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrolistoComponent]
    });
    fixture = TestBed.createComponent(RegistrolistoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});