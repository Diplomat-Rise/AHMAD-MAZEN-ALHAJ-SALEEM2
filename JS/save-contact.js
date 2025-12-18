

function downloadVCard() {
  const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:AHMAD MAZEN ALHAJ SALEEM
TITLE:Sales Manager
ORG:RISE Properties
TEL;TYPE=WORK,VOICE:+971521268553‬ ‬‬‬‬‬‬‬‬‬‬‬‬
TEL;TYPE=WORK,VOICE:+971557670632‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬
EMAIL:Ahmed.alhaj@riseproperties.ae
URL:http://www.riseproperties.ae
ADR;TYPE=WORK:;;PO Box No 181702, Office NO.1607, Opal Tower, Business Bay;Dubai;;UAE
END:VCARD
  `.trim();

  const blob = new Blob([vCardData], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'AHMAD MAZEN ALHAJ SALEEM.vcf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

document.querySelector('.save-contact-button').addEventListener('click', function (e) {
  e.preventDefault();
  downloadVCard();
});



