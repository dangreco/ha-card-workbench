<h3 align="center">Home Assistant Card Workbench</h3>

  <p align="center">
    Faster and more intuitive development & testing for Home Assistant custom cards.
    <br />
    <br />
    <a href="https://workbench.dangre.co"><strong><u>Live Site</u></strong></a>
    <br/>
    <br/>
    <a href="https://github.com/dangreco/ha-card-workbench/issues">Report Bug</a>
    ·
    <a href="https://github.com/dangreco/ha-card-workbench/issues">Request Feature</a>
  </p>
</p>




<!-- ABOUT THE PROJECT -->
## About The Project

![Screenshot](https://raw.githubusercontent.com/dangreco/ha-card-workbench/master/screenshots/workbench.png)

I couldn't find a nice way of playing around with state values while being able to live refresh the card
while working on custom Home Assistant cards. This workbench is a solution to both of those problems.
### Built With

* [Preact](https://preactjs.com/)
* [Zustand](https://preactjs.com/)
* [home-assistant-js-websocket](https://github.com/home-assistant/home-assistant-js-websocket)
* [dayjs](https://day.js.org/)
* [js-yaml](https://github.com/nodeca/js-yaml)
* [react-json-tree](https://www.npmjs.com/package/react-json-tree)
* [@uiw/react-codemirror](https://uiwjs.github.io/react-codemirror/)


<!-- GETTING STARTED -->
## Getting Started

### Online Workbench

Go to [the live workbench](https://workbench.dangre.co).

Disable protection for the site (otherwise it won't be able 
to load the card script):

![disable protection](https://raw.githubusercontent.com/dangreco/ha-card-workbench/master/screenshots/fixblock.png)


### Local Workbench

#### Clone the repository:

```zsh
$ git clone https://github.com/dangreco/ha-card-workbench && cd ha-card-workbench
```

#### Install dependencies:
```zsh
$ yarn install
```

#### Start server:
```zsh
$ yarn dev
```


## Features/Usage

### Entities Editor/Viewer
![Entities Editor](https://raw.githubusercontent.com/dangreco/ha-card-workbench/master/screenshots/entitiesEditor.png)

#### Entities
This editor is for modifying/viewing entity states. Disconnected from HASS, you can write and read mock values.
If you are connected to HASS, the view will change to a JSON tree in read-only mode. (If you want to modify your HASS values, simply disconnect from HASS, and the workbench will remember all the entity states.)

#### Connection
In the top right corner there is a button to enable a connection to your HASS server for real-time entity access.

### Card Config Editor
![Config Editor](https://raw.githubusercontent.com/dangreco/ha-card-workbench/master/screenshots/configEditor.png)

This editing window lets you edit your card's configuration in the same way that you would normally.


### Workbench Config
![Workbench Config](https://raw.githubusercontent.com/dangreco/ha-card-workbench/master/screenshots/workbenchConfig.png)

This panel allows you to set the location of your card's JS file. If you are on the online workbench and this is not working,
please see above on disabling site protection.

There are two "Name" inputs: one for the card's element name (e.g. `threedy-card`) and the other for the configuration
carc's element name (e.g. `threedy-config-card`). 



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/dangreco/ha-card-workbench/issues) for a list of proposed features (and known issues).


- [ ] Allow emulation/usage of Home Assistant events & services
- [ ] Implement native Lovelace Cards
- [ ] Visual/Code config editor switch


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


