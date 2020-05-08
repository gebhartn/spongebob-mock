# speengbab

gEnERaTe teXt to moCk YoUR fRiENds

<center>

![screenshot](https://github.com/gebhartn/spongebob-mock/raw/master/scs.png)

</center>

## Quckstart

#### With npm:

```
npm i speengbab
```

#### With yarn:

```
yarn add speengbab
```

#### Usage:

```javascript
import speeng from 'speengbab'

const mocking = speeng("Ghengis Khan had some pretty good ideas!") // GhEngiS KhAn HaD SomE PrETTy GoOd iDeaS!

```

#### Command line:

```bash
yarn global add speengbab

speeng hello world # HeLlo WoRlD
```


```bash
npm install -g speengbab

speeng hello world # HELlo woRld
```

#### Flags

- `-c` will copy the resulting string to the clipboard. Flag can be added before or after the primary string.
  - ex. `npx speeng -c lorem ipsum` will result in something like `LOreM iPSum` being added to the clipboard.
