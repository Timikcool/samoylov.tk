import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// export function print() {
//     const filename  = 'ThisIsYourPDFFilename.pdf';

//     html2canvas(document.querySelector('#nodeToRenderAsPDF')).then(canvas => {
//         let pdf = new jsPDF('p', 'mm', 'a4');
//         pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
//         pdf.save(filename);
//     });
// }

// Variant
// This one lets you improve the PDF sharpness by scaling up the HTML node tree to render as an image before getting pasted on the PDF.
 const print = (quality = 3) => {
    hideDownloadButton();
    const resume = document.querySelector('.resume');
    resume.style.cursor = 'wait';
    const filename  = 'Timur_Samoylov_resume.pdf';
    html2canvas(resume, 
                            {scale: quality}
                     ).then(canvas => {
        let pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 297);
        pdf.addImage(document.querySelector('.resume .avatar'), 'JPEG', 30, 7, 45, 45);
        pdf.save(filename);
        resume.style.cursor = 'inherit';
        showDownloadButton();
    });
}

const hideDownloadButton = () => document.querySelector('#download_resume').style.setProperty('visibility','hidden')

const showDownloadButton = () => document.querySelector('#download_resume').style.setProperty('visibility','visible');

export default print;