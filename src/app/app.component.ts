import {Component, OnInit} from '@angular/core';
import {MatesTableService} from './services/mates-table/mates-table.service';
import {Observable} from 'rxjs';
import {IMate} from './interfaces/mate';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public matesList$: Observable<IMate[]>;
    public isFormOpen$: Observable<boolean>;
    public mateToEdit$: Observable<IMate>;

    constructor(private matesTableService: MatesTableService) {
    }

    ngOnInit(): void {
        this.matesList$ = this.matesTableService.matesList$;
        this.isFormOpen$ = this.matesTableService.isFormOpen$;
        this.mateToEdit$ = this.matesTableService.mateToEdit$;
    }

    public deleteMate(mateGuid: string): void {
        this.matesTableService.deleteMate(mateGuid);
    }

    public editMate(mate: IMate): void {
        this.matesTableService.editMate(mate);
    }

    public createMate(formData: IMate): void {
        this.matesTableService.createMate(formData);
    }

    public openForm(): void {
        this.matesTableService.openForm();
    }

    public closeForm(): void {
        this.matesTableService.closeForm();
    }
}
