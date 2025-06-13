import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  template: `
    <p>Lifecycle Hooks Component</p>
    <p>Input Property: {{ simpleInput }}</p>
  `,
})
export class LifecycleHooksComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() simpleInput: string;

  constructor() {
    console.log('1. constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('2. ngOnChanges called', changes);
  }

  ngOnInit() {
    console.log('3. ngOnInit called');
  }

  ngDoCheck() {
    console.log('4. ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('5. ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('6. ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('7. ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    console.log('8. ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('9. ngOnDestroy called');
  }
}
