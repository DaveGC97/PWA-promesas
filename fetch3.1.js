fetch('https://youtube.com')
.then(res => res.text())
.then(html => {
    document.open();
    document.write(html);
    document.close();
})