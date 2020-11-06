# hangman
Game hangman based on the list of superheroes

Check the project on http://hangman.sergiobogatsky.com

## Installation

Use the package manager [composer](https://getcomposer.org/) to install php dependencies:

```bash
composer install
```

Use [Node.js](https://nodejs.org) with the package manager `npm` to install javascript dependencies:

```bash
npm install
```
### Locally:

To use it locally just put it inside of your local server folder.

Example of route: ´http://localhost/hangman/public´

### Server:

To use it on server point the main domain to the `/public` folder of the project. 

The main `index.php` is there.

`/database` folder has to be writable.


## Modification

To make a change in js files:
 
 * you need to do it in folder `src`.
 * then run `npm run build` in a main directory to make the changes to the `public/js` folder
 * if you need to run the changes in real time use command `npm run watch`
 * to change the configuration: file `webpack.config.js`

## Explanation

* Backend uses PHP with MVC pattern
* Front uses plain javascript with [webback](https://webpack.js.org/) to minify and compile files.
* Project doesn't use database, just a little system of JSON files in `database` folder
> Keyboard button will not work on Android phone!