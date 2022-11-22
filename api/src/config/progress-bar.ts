const form = document.getElementById("form");
const inputFile = document.getElementById("flle")
const uploadFile = document.getElementById("upload-file")
const uploaded = document.getElementById("uploaded")

form?.addEventListener('click', (e) => {
    inputFile?.click();
})

inputFile?.addEventListener('change', (e) => {
    console.log(e.target.files);
    const filename = e.target.files[0].name;

    console.log(filename);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'posts', true);

    xhr.upload.onprogress = ({loaded, total}) => {
        console.log(loaded, total);
        
    }
    let formData = new FormData(form)
   xhr.send(formData);
    
    
})