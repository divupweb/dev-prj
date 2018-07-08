import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DbService} from "../../db.service";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  constructor(private dbService: DbService) { }

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      question: new FormControl('', Validators.required)
    });
  }


  onSubmit() {

    if (this.form.valid) {
      console.log(this.form);
      let object = {
        name: this.form.controls.name.value,
        email: this.form.controls.email.value,
        question: this.form.controls.question.value
      }
      this.dbService.send_mail(object).subscribe(() => {
        createMessage('Сообщение отправлено');
      },
      () => {
        createMessage('Произошла ошибка.');
      });
      this.form.reset();
    }

    function createMessage(text) {
      let message = document.createElement('div');
      message.style.cssText = "position:fixed;" +
        "color: white;" +
        "padding: 30px 70px 30px 70px;" +
        "background: black;";
      message.style.left = document.documentElement.clientWidth/100*5 + "px";
      message.style.top = document.documentElement.clientHeight/100*80 + "px";
      message.textContent = text;
      document.body.appendChild(message);
      setTimeout(function() {
        document.body.removeChild(message);
      }, 2500);

      return message;
    }
  }

}
