```hfz-view id=osxbgm95lfk
<template hfz import:uiv-button-1="dev">
  <uiv-button-1 class="abab" text="Hover me"></uiv-button-1>
</template>

```

```hfz-view id=vv0glreiyz
<template hfz import:uiv-button-1="dev" :data="{count: 0}">
  <uiv-button-1 :text="'Click me: ' + count" @onClick="count += 1"></uiv-button-1>
</template>

```

