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


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/dangreco/ha-card-workbench/issues) for a list of proposed features (and known issues).


- [ ] Allow emulation/usage of Home Assistant events & services
- [ ] Implement native Lovelace Cards


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


