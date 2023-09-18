export class PollutionItem {
    public weight=0
    constructor(public id:number, public title: string, public tags: any[], public image_path: string, 
        public lon: number, public lat: number, prob: number) {

            this.weight=this.getWeightsSum()
         }

    getWeightsSum() {
        var w = 0;
        this.tags.forEach((e: any) => { w += e })
        return w
    }
    addTag(tag: string) { this.tags.push(tag) }
}