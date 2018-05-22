import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TextService} from './text.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  text: string;
  puntuationsOccurrence: any;
  public frmText: FormGroup;
  constructor(private textService: TextService, private _fb: FormBuilder) { }

  ngOnInit() {
    this.frmText = this._fb.group({
      text: ['', [<any>Validators.required]]
    });
  }

  /**
   *Calculate number of punctuations within a text
   * @param {boolean} isValid
   */
  onCalculate(isValid: boolean, text: string) {
    if (isValid) {
      // call service
      this.textService.getPunctuationsNumber(text).subscribe(
        data => {
          console.log('success', data.value);
          this.puntuationsOccurrence = data.value;
        },
            error => {
          console.log('error', error);
          alert('An Error occurred while calculating punctuations occurrence');
        }
      );
    }
  }

}
