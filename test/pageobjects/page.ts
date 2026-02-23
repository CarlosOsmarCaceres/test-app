export default class Page {
    public async pause (ms: number) {
        await new Promise(resolve => setTimeout(resolve, ms))
    }
}
