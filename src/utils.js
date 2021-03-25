const utils = {
    notifyAsk: function() {
        if (typeof Notification === 'function') {
            if (Notification.permission !== 'denied') {
                Notification.requestPermission(function(permission) {
                    if (Notification.permission !== permission) {
                        Notification.permission = permission;
                    }
                });
            }
        }
    },

    notify: function(string, options) {
        let notification;

        if (typeof Notification === 'function') {
            if (Notification.permission === 'granted') {
                notification = new Notification(string, options);

                setTimeout(function() {
                    notification.close();
                }, 5000);
            } else {
                utils.notifyAsk();
            }
        }

        return notification;
    },

    copyToClipboard: function(text) {
        const textField = document.createElement('textarea');

        utils.notifyAsk();

        textField.className = 'clipboard';
        textField.value = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        // Because Chrome is dumb and wants to jump to the bottom of the page.
        setTimeout(function() {
            textField.remove();
        }, 1);

        if (text !== ' ') {
            utils.notify(text + ' copied to clipboard');
        }
    },

    findInObject: function(needle, haystack) {
        const keyNames = Object.keys(haystack);
        const matches = [];

        for (let i = 0; i < keyNames.length; i += 1) {
            if (keyNames[i].toUpperCase().indexOf(needle.toUpperCase()) !== -1) {
                matches.push(keyNames[i]);
            }

            if (haystack[keyNames[i]].tags) {
                for (let tagIndex = 0; haystack[keyNames[i]].tags.length > tagIndex; tagIndex += 1) {
                    if (
                        haystack[keyNames[i]].tags[tagIndex].toUpperCase().indexOf(needle.toUpperCase()) !==
                        -1
                    ) {
                        matches.push(keyNames[i]);
                    }
                }
            }

            if (haystack[keyNames[i]].values) {
                if (utils.findInObject(needle, haystack[keyNames[i]].values)) {
                    matches.push(keyNames[i]);
                }
            }
        }

        return matches.length ? matches : null;
    }
};

module.exports = utils;
