import debounce from 'lodash/debounce';

const FORM_ID = 'pageadminform';
const URL_INPUT_NAME = 'preview_url';
const IFRAME_ID = 'iframe-live-preview';

let urlInput;

function init() {
    const form = document.getElementById(FORM_ID);

    if (form) {
        const inputs = [...form.querySelectorAll('input, textarea')];
        urlInput = document.querySelector(`input[name=${URL_INPUT_NAME}]`);

        // Wait for window to load to add event listeners to CKEditors
        window.onload = () => {
            Object.keys(CKEDITOR.instances).forEach((instanceName) => {
                const instance = CKEDITOR.instances[instanceName];
                if (instance) {
                    instance.on('change', debounce(() => {
                        instance.updateElement();
                        handleLivePreview();
                    }, 500));
                }
            });
        };

        // Add eventlistener to each input
        inputs.forEach((input) => {
            input.addEventListener('input', debounce(handleLivePreview, 500));
        });
    }
}

function handleLivePreview() {
    const form = document.getElementById(FORM_ID);
    const formData = new FormData(form);
    const iframe = document.getElementById(IFRAME_ID);

    if (urlInput && urlInput.value && iframe) {
        fetch(urlInput.value, {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.text())
            .then((data) => {
                const newDoc = document.createElement('html');
                newDoc.innerHTML = data;
                const bodyNewDoc = newDoc.getElementsByTagName('body')[0];

                // Replace only the body of the iframe
                iframe.contentWindow.document.body.parentNode.replaceChild(
                    bodyNewDoc,
                    iframe.contentWindow.document.body,
                );

                // TODO: check performance of both ways to replace content of iframe
                // Another way to update iframe content
                // iframe.contentDocument.open();
                // iframe.contentDocument.write(data);
                // iframe.contentDocument.close();
            });
    }
}

export default { init };
