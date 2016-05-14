# Genesis-Andromeda
MMORTS Space opera sur navigateur

## Set-Up

Pré requis (avec ajout des executables au PATH à chaque fois ):

- Git
- NodeJs
- MongoDB
- SublimeText3

### Bower

Installation :
```javascript
$ npm install -g bower
```

Installation des librairies FRONT-END:
```javascript
$ cd client
```
```javascript
$ bower install
```
```javascript
$ npm install
```

Installation des librairies BACK-END:
```javascript
$ cd server
```
```javascript
$ npm install
```

### Build du client

Installation :
```javascript
$ npm install -g gulp
```
```javascript
$ cd client
```
```javascript
$ gulp
```

### Lancement de la base de données
Aller à la racine du projet (optionel) et lancer la commande suivante dans un terminal
```javascript
$ mongod
```

### Lancement du serveur
```javascript
$ cd server
```
```javascript
$ npm start
```

### Livereload
Installer l'extension Livereload pour Chrome, permet de rafraichir automatiquement le navigateur suite à un changement du front-end. Pour que cela fonctione il faut que le serveur d'ecoute de changement soit lancé ( gulp )

## Must have
- client [GitHub](https://desktop.github.com/) pour windows
- client [MongoDB](https://robomongo.org/)
- [PostMan](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop) pour tester les appels REST

## Configuration de Sublime Text 3

Plugins :
- Package control (à installer le premier)
- DocBlockr
- Javascript Beautify
- SideBar Enhancement
- JSHint
- JSHint Gutter

Configurer Javascript Beautify et JSHint Gutter pour beautify et lint à la sauvegarde de chaque fichier.
