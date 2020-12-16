# Button

Buttons allow users to take actions, and make choices, with a single tap.
<br/> <br/>


```example
<script>
  import { Button } from 'skaffa';
</script>

<div style="display:flex; justify-content:center">

  <Button>Button</Button>

</div>
```
<br/>

### Contained Button

Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app.

```example
<script>
  import { Button } from 'skaffa';
</script>

<div style="display:flex; justify-content:center">

  <Button>Default</Button>
  <Button color="#e91e63">Colored</Button>
  <Button disabled>Disabled</Button>

</div>
```

You can remove the elevation and ripple effect with the `disableElevation` and `disableRipple` props respectively.

```example
<script>
  import { Button } from 'skaffa';
</script>

<div style="display:flex; justify-content:center">

  <Button disableElevation>Disable Elevation</Button>
  <Button disableRipple>Disable Ripple</Button>

</div>
```

<br/>

### Outlined Button

Outlined buttons are medium-emphasis buttons. They contain actions that are important, but aren’t the primary action in an app.
 

```example
<script>
  import { Button } from 'skaffa';
</script>

<div style="display:flex; justify-content:center">

  <Button variant="outlined">Default</Button>
  <Button variant="outlined" color="#e91e63">Colored</Button>
  <Button variant="outlined" disabled>Disabled</Button>

</div>
```

<br/>

### Text Button

Text buttons are typically used for less-pronounced actions, including those located:
* In dialogs
* In cards

In cards, text buttons help maintain an emphasis on card content.

```example
<script>
  import { Button } from 'skaffa';
</script>

<div style="display:flex; justify-content:center">

  <Button variant="text">Default</Button>
  <Button variant="text" color="#e91e63">Colored</Button>
  <Button variant="text" disabled>Disabled</Button>

</div>
```

<br/>

### Sizes

Fancy larger or smaller buttons? Use the `size` property.

```example
<script>
  import { Button } from 'skaffa';
</script>

<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>

```

<br/><br/>

<!-- 
## Properties
```properties
type | Type of the button | 'default','error','success'('default')
disabled | Make button disabled | bool(false)
``` -->