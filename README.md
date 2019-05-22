# Sbjr-React-Utils-Components - Modal

![React image](https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png)

**React Modal Component.**

## Install

This module is a React component, so you must obviously have [react](https://github.com/facebook/react) installed.

This module depends on another module, [@sbjr-react-utils-components/icons](https://github.com/Sbjr-React-Utils-Components/Icons), you must also install it.


### CDN
```js
<script type="text/javascript" src="https://unpkg.com/@sbjr-react-utils-components/icons@latest"></script>
<script type="text/javascript" src="https://unpkg.com/@sbjr-react-utils-components/modal@latest"></script>
```

### Npm
```bash
npm i -S @sbjr-react-utils-components/modal @sbjr-react-utils-components/icons
```

## Doc

This package as 1 component `<Modal />` and 1 constante `MODAL_TYPE`.

`import Modal, { MODAL_TYPE } from '@sbjr-react-utils-components/modal';`

### Modal Props

| Props         | Description                                | Type                        | Default Value            |
| ------------- | ------------------------------------------ | --------------------------- | ------------------------ |
| className     | Class of the Component                     | string                      |                          |
| show          | Show Component                             | boolean                     | false                    |
| title         | Title of the component                     | Component or string         | Modal Title              |
| body          | Body of the Component                      | Component or string         | Modal Body               |
| typeModal     | Style of the Component (See `MODAL_TYPE`)  | string                      | `MODAL_TYPE.INFORMATION` |
| onClose       | Function to close the modal                | function                    |                          |
| footerButtons | List of footer Component (Buttons)         | Array (Component or string) |                          |

### MODAL_TYPE Value

| Value                      |
| -------------------------- |
| `MODAL_TYPE.WARNING`       |
| `MODAL_TYPE.DANGER`        |
| `MODAL_TYPE.SUCCESS`       |
| `MODAL_TYPE.INFORMATION`   |

## Examples

### Basic

```js
import React from 'react';
import { render } from 'react-dom';
import Modal from '@sbjr-react-utils-components/modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  render() {
    return(
      <div>
        <button
          type="button"
          onClick={() => this.setState({ showModal: true })}
        >
          Open Modal
        </button>
        <Modal
          show={this.state.showModal}
          title="Information Modal"
          body="You Are informed"
          onClose={() => this.setState({ showModal: false })}
        />
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('react-container'),
);
```

### Complet
```js
import React from 'react';
import { render } from 'react-dom';
import Modal, { MODAL_TYPE } from '@sbjr-react-utils-components/modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      typeModal: MODAL_TYPE.INFORMATION,
      counterModal: 0,
    };
  }

  render() {
    return (
      <div>
        <button
          type="button"
          onClick={() => this.setState({ showModal: true })}
        >
          Open Modal
        </button>
        <Modal
          show={this.state.showModal}
          title={(
            <React.Fragment>
              a <em>Counter</em> For Modal
            </React.Fragment>
          )}
          body={(
            <p>
              Counter: <strong>{this.state.counterModal}</strong>
            </p>
          )}
          typeModal={this.state.typeModal}
          onClose={() => this.setState({ showModal: false })}
          footerButtons={[
            (
              <button
                type="button"
                onClick={() => this.setState({
                  counterModal: this.state.counterModal + 1,
                  typeModal: MODAL_TYPE.SUCCESS,
                })}
              >
                +
              </button>
            ),
            (
              <button
                type="button"
                onClick={() => this.setState({
                  counterModal: this.state.counterModal - 1,
                  typeModal: MODAL_TYPE.DANGER,
                })}
              >
                -
              </button>
            ),
          ]}
        />
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('react-container'),
);
```

**Have fun.**
