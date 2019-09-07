import { Component, Input } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
})

export class EventComponent {

    @Input() value: any;

    handleDeleteClick() {
        this.deleteEventInstanceEvent.emit(this.value);
          }

    @Output() deleteEventInstanceEvent: EventEmitter<any> = new EventEmitter<any>();
}