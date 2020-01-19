import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() dataToSend;
  @Output() emitter = new EventEmitter();

  showModal: boolean;
  userform: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {

    this.userform = this.fb.group({
      userId: ['', Validators.required],
      id: ['', Validators.required],
      title: ['', Validators.required],
    });

    this.showModal = true;
    this.patchForm();
  }

  patchForm() {
    this.userform.patchValue({
      userId: this.dataToSend.userId,
      title: this.dataToSend.title
    });
  }

  closeModal() {
    this.showModal = false;
    this.emitter.emit();
  }

}
