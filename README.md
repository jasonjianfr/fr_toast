# FR Toast Document

### Introduction
FR Toast is an easy poping up message which will be toasted while calling.

### Note
This product is made for a practice of jQuery plugin research, so it will no longer be maintained.

HAVE FUN!

### Supported Browsers
latest Chrome only!

### Version
1.0.2

### Installation
Just import fr_toast.min.js and fr_toast.min.css into your HTML after jQuery main js.

### How To Use

```sh
$.frToast();
```

```sh
$.frToast({
    icon: 'fr_toast_icon_add',
    title: 'SUCCESS!'
}};
```

### Parameter

It provides manay parameters below:

* icon: 'fr_toast_icon_accept',  'fr_toast_icon_add', 'fr_toast_icon_delete', or 'fr_toast_icon_exclude'.
* title: any words you key in.
* context: any words you key in.
* bgColor: '#000000' or any color code.
* fontColor: '#FFFFFF' or any color code.
* position: 'center', 'left', 'right', 'top', 'bottom' or you can combin different axis, just like 'top left'.
* init: function() {}, a function will be triggered when init.
* before: function() {}, a function will be triggered before toast.
* after: function() {}, a function will be triggered after toast.
* finish: function() {}, a function will be triggered when toast fade out completely.

### Demo

https://jsfiddle.net/pilisir/7Lcs2s3o/15/

### License
----

WTFPL