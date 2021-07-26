import { Option, Style } from '../interfaces';
import { Observable } from 'rxjs';
import { VItem } from "./v-item.model";

export class VList extends VItem {
    options: Option[] | Observable<Option[]>;
    multiple?: boolean;
    editHandler?: Function;
    deleteHandler?: Function;

    constructor(opts: {
        options: Option[] | Observable<Option[]>,
        label?: string,
        value?: string | number,
        multiple?: boolean,
        editHandler?: Function,
        deleteHandler?: Function,
        styles?: Style,
        cls?: string
    }) {
        super(opts);
        this._vtype = 'vlist';
        this.options = opts['options'] || [];
        this.multiple = opts['multiple'] || false;
        this.editHandler = opts['editHandler'] || null;
        this.deleteHandler = opts['deleteHandler'] || null;
    }
}
