import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html'
})
export class TestComponent {
    @Input() name: string = '';
    @Output() nameChanged = new EventEmitter<boolean>()
    @Input() condition = true;

    emitChange(){
        this.nameChanged.emit(true);    }
}
