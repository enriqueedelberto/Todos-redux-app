import { createAction, props } from "@ngrx/store";

export type validFilters = 'all' | 'completed' | 'pending';

export const setFilter = createAction(
    '[Filter] Set filter',
    props<{filter: validFilters}>()
    );