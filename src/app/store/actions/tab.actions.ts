import { Action, ActionType } from "@ngrx/store";
import { TabModel } from "../models/tab.model";


export enum TabActionTypes {

    ADD_TAB = '[TAB] Add tab',
    DELETE_TAB = '[TAB] Delete tab',
    ADD_TAB_SUCCESS = '[TAB] Add tab success',
    ADD_TAB_FAILURE = '[TAB] Add tab failure',
    UDATE_TAB = '[TAB] Update tab',
}
export class AddTabAction implements Action {
    readonly type: string = TabActionTypes.ADD_TAB;
    constructor(public pyaload: TabModel) {
    }
}
export class DeleteTabAction implements Action {
    readonly type: string = TabActionTypes.DELETE_TAB;
    constructor(public pyaload: number) { }
}
export class UpdateTabAction implements Action {
    readonly type: string = TabActionTypes.UDATE_TAB;
    constructor(public pyaload: TabModel) {
    }
}
export type TabAction = AddTabAction | DeleteTabAction;
