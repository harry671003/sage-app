export class BasicApi {
    async getData() {
        if(__DEV__) {
            return await fetch('http://www.mocky.io/v2/58700461110000fc0d3b0592');
        }
    }
}