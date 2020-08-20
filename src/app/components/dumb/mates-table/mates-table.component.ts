import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IMate} from '../../../interfaces/mate';

@Component({
    selector: 'app-mates-table',
    templateUrl: './mates-table.component.html',
    styleUrls: ['./mates-table.component.css'],
})
export class MatesTableComponent implements OnInit {
    @Input() matesList: IMate[];

    @Output() deleteMate: EventEmitter<string> = new EventEmitter<string>();
    @Output() edit: EventEmitter<IMate> = new EventEmitter<IMate>();

    constructor() {
    }

    ngOnInit(): void {
    }

    public onDeleteClick(mateGuid: string): void {
        this.deleteMate.emit(mateGuid);
    }

    public onEditClick(mate: IMate): void {
        this.edit.emit(mate);
    }

}
