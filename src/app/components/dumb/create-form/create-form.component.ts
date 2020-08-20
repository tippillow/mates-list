import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IMate} from '../../../interfaces/mate';

@Component({
    selector: 'app-create-form',
    templateUrl: './create-form.component.html',
    styleUrls: ['./create-form.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateFormComponent implements OnInit, OnChanges {

    @Input() mate: IMate;

    @Output() createMate: EventEmitter<IMate> = new EventEmitter<IMate>();
    @Output() closeForm: EventEmitter<void> = new EventEmitter<void>();

    public createForm: FormGroup;

    constructor() {
    }

    ngOnInit(): void {
        this.createForm = this.constructForm();
    }

    ngOnChanges(): void {
        this.createForm = this.constructForm();
    }

    public onCreateClick(): void {
        this.createMate.emit({
            age: this.createForm.value.age,
            email: this.createForm.value.email,
            guid: this.mate ? this.mate.guid : null,
            name: {
                first: this.createForm.value.firstName,
                last: this.createForm.value.lastName,
            },
        });
    }

    public onCloseCLick(): void {
        this.closeForm.emit();
    }

    private constructForm(): FormGroup {
        return new FormGroup({
            firstName: new FormControl('' || this.mate?.name.first, [Validators.required]),
            lastName: new FormControl('' || this.mate?.name.last, [Validators.required]),
            email: new FormControl('' || this.mate?.email, [Validators.required, Validators.email]),
            age: new FormControl(0 || this.mate?.age,
                [
                    Validators.required,
                    Validators.max(120),
                    Validators.min(0)
                ]),
        });
    }

}
