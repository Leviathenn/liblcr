/**
 * @author Leviathenn
 */

import * as fs from "fs"

module liblmr{
    export class reader{
        private csv: String;
        read(){
            let lCSV = this.csv.split("\n");
            let fistLINE = lCSV[0];
            let sections = fistLINE.split(",");
            console.log(sections)
            let restOfFIle = this.csv.split(fistLINE)[1].split("\n");
            restOfFIle.forEach((rof)=>{
                let lines = rof.split(",");
                for (let index = 0; index < lines.length; index++) {
                    console.log(`
                    [${sections[index]}]
                    ${lines[index]}
                    `)
                    
                }
            })
        }
        constructor(csv: String){
            this.csv = csv
        }
    }
}
let lmr = new liblmr.reader(fs.readFileSync("results.csv",).toString());
lmr.read();