const byteSize = 64;
const buffer = new ArrayBuffer(byteSize);
const i32View = new Int32Array(buffer);
console.log('Printing buffer length: ' + buffer.byteLength);
console.log('Printing view length: ' + i32View.byteLength);
console.log(i32View);