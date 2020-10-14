import debounce from 'lodash/debounce';

let updateButton;
let titleInput;
let urlInput;
let iframe;

function init() {
    updateButton = document.getElementById('update-live-preview');
    titleInput = document.querySelector('input[name=title]');
    urlInput = document.querySelector('input[name=preview_url]');
    iframe = document.getElementById('iframe-live-preview');

    if (updateButton) {
        updateButton.addEventListener('click', handleLivePreview);
    }

    if (titleInput) {
        titleInput.addEventListener('input', debounce(handleLivePreview, 500));
    }
}

function handleLivePreview() {
    if (titleInput && urlInput) {
        const newUrl = new URL(urlInput.value);
        newUrl.searchParams.append('title', titleInput.value);

        fetch(newUrl.href)
            .then((response) => response.text())
            .then((data) => {
                iframe.contentDocument.open();
                iframe.contentDocument.write(data);
                iframe.contentDocument.close();
            });
    }
}

export default {init};

