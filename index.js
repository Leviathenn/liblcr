/**
 * @author Leviathenn
 */

import * as fs from "fs"


export class reader{
    getSection(name){
        let section = this.sectionsME[this.sectionMap[name]][0];
        let sectionC = new class {
            get(index){
                if(this.sectionME[this.sectionID][[0]]){

                    return this.sectionME[this.sectionID][0]["keys"][index];
                }else{

                }
            }
            remove(index){
                delete this.sectionME[this.sectionID][0]["keys"][index]
            }
            constructor(sectionME,sectionMap,sectionsID){
                this.sectionME = sectionME || [];
                this.sectionMap = sectionMap || {};
                this.sectionID = sectionsID || 0;
            }
            
        }(this.sectionsME,this.sectionMap,this.sectionMap[name]);
        return sectionC;
    }
    removeSections(name){
        delete this.sectionsME[this.sectionMap[name]][0];
    }
    sections(){
        return this.sectionsE;
    }
    constructor(csv){
        this.csv = csv
        this.sectionsME = [];
        this.sectionMap = {};
        let lCSV = this.csv.split("\n");
        let fistLINE = lCSV[0];
        let sections = fistLINE.split(",");
        this.sectionsE = sections;
        sections.forEach(()=>{
          
            this.sectionsME.push(
        [
            {
                "keys": [

                ]
            }
        ])
        
    });
     for (let index = 0; index < sections.length; index++) {
        this.sectionMap[index] = sections[index];
        this.sectionMap[sections[index]] = index
    }
        
        let restOfFIle = this.csv.split(fistLINE)[1].split("\n");
        restOfFIle.forEach((rof)=>{
            let lines = rof.split(",");
            for (let index = 0; index < lines.length; index++) {
                if(lines[index] == undefined || lines[index] == ""){
                }else{
                    this.sectionsME[index][0]["keys"].push(lines[index]);
                }
            }
        })
    } 
};

let lmr = new reader(fs.readFileSync("results.csv").toString());
//console.log(lmr.sections());
console.log(lmr.getSection("way").get(42))