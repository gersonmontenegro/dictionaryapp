import { app_id, app_key } from 'src/providers/keys';

class SearchWord {
    constructor() {
        this.onCatch = this.onCatch.bind(this);
        this.onValidateResponse = this.onValidateResponse.bind(this);
        this.onResponseWord = this.onResponseWord.bind(this);
    }

    initSearch(word) {
        let url = `https://od-api.oxforddictionaries.com/api/v1/entries/en/${word}/regions=us`;
        let options = {
            headers: { "app_id": app_id, "app_key": app_key },
            method: 'GET'
        }
        fetch(url, options)
            .then(this.onValidateResponse)
            .then(this.onResponseWord)
            .catch(this.onCatch);
    }

    async initSearchAsync(word) {
        let url = `https://od-api.oxforddictionaries.com/api/v1/entries/en/${word}/regions=us`;
        let options = {
            headers: { "app_id": app_id, "app_key": app_key },
            method: 'GET'
        }
        let response = await fetch(url, options);
        return response.status === 200 ? response.json() : false;
    }

    onCatch(error) {
        console.debug("E", JSON.stringify(error));
    }

    onValidateResponse(response) {
        if (response.status == 200) {
            return response.json();
        } else {
            console.debug("Fetching error...", JSON.stringify(response));
        }
    }

    onResponseWord(data) {
        console.debug(">>>", data);
    }
}

export default SearchWord;