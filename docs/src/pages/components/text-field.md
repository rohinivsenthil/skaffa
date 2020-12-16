# Text Field

Text fields allow users to enter text into a UI. They typically appear in forms and dialogs.

The TextField wrapper component is a complete form control including a label and input. It supports standard and filled styling.
<br/> <br/>


```example
<script>
  import { TextField } from 'skaffa';
</script>

<div style="display:flex; justify-content:center">

  <TextField label="Standard"/>
  <TextField variant="filled" label="Filled"/>

</div>
```
<br/>


<br/><br/>

<!-- 
## Properties
```properties
type | Type of the button | 'default','error','success'('default')
disabled | Make button disabled | bool(false)
``` -->