import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
// @ts-ignore make it only for test purposes
import mates from '../../../assets/mates/mates.json';
import {IMate} from '../../interfaces/mate';


@Injectable({
    providedIn: 'root'
})
export class MatesTableService {

    private _matesList$ = new BehaviorSubject<IMate[]>(mates);
    private _isFormOpen$ = new BehaviorSubject<boolean>(false);
    private _mateToEdit$ = new BehaviorSubject<IMate>(null);
    private _currentGuid = 0;

    constructor() {
    }

    public get matesList$(): Observable<IMate[]> {
        return this._matesList$.asObservable();
    }

    public get isFormOpen$(): Observable<boolean> {
        return this._isFormOpen$.asObservable();
    }

    public get mateToEdit$(): Observable<IMate> {
        return this._mateToEdit$.asObservable();
    }

    public openForm(): void {
        window.scroll(0, 0);

        this._isFormOpen$.next(true);
    }

    public closeForm(): void {
        this._isFormOpen$.next(false);
    }

    public deleteMate(mateGuid: string): void {
        this._matesList$.next(this._matesList$.value.filter((mate: IMate) => mate.guid !== mateGuid));
    }

    public editMate(mate: IMate): void {
        this.openForm();
        this._mateToEdit$.next(mate);
    }

    public createMate(formData: IMate): void {
        const matesList = this._matesList$.value;
        let existingMate = matesList.find((mate: IMate) => mate.guid === formData.guid);

        if (existingMate) {
            existingMate = Object.assign(existingMate, formData);

            this._matesList$.next(matesList);
        } else {
            formData.guid = Number(++this._currentGuid).toString();

            this._matesList$.next([...this._matesList$.value, formData]);
        }

        this.closeForm();
    }
}
