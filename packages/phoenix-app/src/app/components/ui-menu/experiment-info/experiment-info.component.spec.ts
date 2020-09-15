import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentInfoComponent } from './experiment-info.component';
import { AppModule } from 'src/app/app.module';
import { EventDisplayService } from '../../../services/event-display.service';

describe('ExperimentInfoComponent', () => {
  let component: ExperimentInfoComponent;
  let fixture: ComponentFixture<ExperimentInfoComponent>;

  const mockEventDisplayService = jasmine.createSpyObj('EventDisplayService', ['getEventMetadata', 'listenToDisplayedEventChange']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [{
        provide: EventDisplayService,
        useValue: mockEventDisplayService
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize experiment info', () => {
    component.ngOnInit();
    expect(mockEventDisplayService.listenToDisplayedEventChange).toHaveBeenCalled();
  });
});
