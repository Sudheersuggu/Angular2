import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core'

@Component({
    selector: "grid-ui",
    templateUrl: "../ui/Grid.html"
})
export class GridComponent {
    // the columns
    gridColumns: Array<Object> = new Array<Object>();
    //the rows
    gridData: Array<Object> = new Array<Object>();

    @Output("grid-selected")
    selected: EventEmitter<Object> = new EventEmitter<Object>();

    @Input("grid-data")
    set gridDataset(_gridData: Array<Object>) {

        //get the columns
        //get the rows
        if (_gridData.length > 0) {
            //Fill coulmn names in gridcolumns collection
            if (this.gridColumns.length == 0) {
                var columnNames = Object.keys(_gridData[0]);
                this.gridColumns = new Array<Object>();
                for (var index in columnNames) {
                    this.gridColumns.push(columnNames[index]);
                }
            }
            this.gridData = _gridData;
        }
    }

    OnSelect(_selected: any) {
        this.selected.emit(_selected);
    }

}