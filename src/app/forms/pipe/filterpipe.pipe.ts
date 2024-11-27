import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'filter',
    standalone: true
})
export class FilterPipe implements PipeTransform {

    transform(value: any) {
        return new Promise<any>((resolve, reject) =>{
            setTimeout(() => {
                if (value !== null) {
                    resolve(value.substr(0,2));
                } else {
                    resolve('');
                }
            }, 2000);
        });
    }
}