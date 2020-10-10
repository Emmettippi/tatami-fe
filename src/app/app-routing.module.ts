import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forRoot([
            // {
            //     path: "entry",
            //     component: EntryComponent
            // }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
