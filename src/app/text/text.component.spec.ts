import { TextComponent } from './text.component';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TextService} from './text.service';
import {HttpClientModule} from '@angular/common/http';

fdescribe('Component: Edit', () => {

  let textService;
  let fixture;
  let textComponent;
  let spy;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      declarations: [
        TextComponent
      ],
      providers : [TextService]
    })
      .compileComponents();

  });


  beforeEach(() => {
    fixture = TestBed.createComponent(TextComponent);
    textService = fixture.debugElement.injector.get(TextService);
    spy = spyOn(textService, 'getPunctuationsNumber').and.returnValue(Observable.of([]));

  });

  it('should call service with the right param', fakeAsync(() => {
    textComponent = fixture.debugElement.componentInstance;
    textComponent.onCalculate(true, 'Lorem!.');
    tick();
    expect(spy).toHaveBeenCalledWith('Lorem!.');

  }));

});
