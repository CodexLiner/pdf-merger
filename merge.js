const PDFMerger = require('pdf-merger-js')

var merger = new PDFMerger();

const mergerPdfs = async (p1,p2) =>{
    await merger.add(p1);
    await merger.add(p2);
    let a = new Date().getTime();
    await merger.save(`public/${a}.pdf`);
    return a;
}
module.exports = {mergerPdfs}