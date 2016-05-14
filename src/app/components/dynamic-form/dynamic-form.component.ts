import { Component, Input, OnInit }  from '@angular/core';
import { ControlGroup }              from '@angular/common';
import { QuestionBase }                 from './questions/question-base';
import { QuestionControlService }       from '../../common/services/question-control.service';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
@Component({
  selector:'dynamic-form',
  templateUrl:'app/components/dynamic-form/dynamic-form.component.html',
  directives: [DynamicFormQuestionComponent],
  providers:  [QuestionControlService]
})
export class DynamicForm {
  @Input() questions: QuestionBase<any>[] = [];
  form: ControlGroup;
  payLoad = '';
  constructor(private qcs: QuestionControlService) {  }
  ngOnInit(){
    this.form = this.qcs.toControlGroup(this.questions);
  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
