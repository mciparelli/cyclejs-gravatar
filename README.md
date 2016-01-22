# cyclejs-gravatar

> Gravatar component for Cycle.js

## Install

```bash
npm install cyclejs-gravatar --save
```

## [Demo live](http://mciparelli.github.io/cyclejs-gravatar/example/)

## Usage

```javascript
import Cycle from '@cycle/core';
import {div, h1, makeDOMDriver} from '@cycle/dom';
import Gravatar from 'cyclejs-gravatar';

function main({DOM}) {
  const gravatarProps$ = Observable.of({
    email: 'your@email.com'
  });

  const gravatar = Gravatar({ props$: gravatarProps$ });

  return {
    DOM: gravatar.DOM.map(gravatarVTree =>
      div([
        h1('My Gravatar'),
        gravatarVTree
      ])
    )
  };
}

Cycle.run(main, {
  DOM: makeDOMDriver('.app')
});
```

### Inspirations

- [cyclejs-calendar](https://github.com/enten/cyclejs-calendar)
- [react-gravatar](https://github.com/KyleAMathews/react-gravatar)

## License

MIT
