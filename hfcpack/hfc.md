```hfz-view id=osxbgm95lfk
<template hfz import:uiv-button-1="dev">
  <div style="display: flex; justify-content: center; padding: 100px">
<uiv-button-1 text="Hover me"></uiv-button-1>
  </div>
  
</template>

```

```hfz-view id=vv0glreiyz
<template hfz import:uiv-button-1="dev" :data="{count: 0}">
  <uiv-button-1 :text="'Click me: ' + count" @onClick="count += 1"></uiv-button-1>
</template>

```

```hfz-view id=ak7icsg7q79
<template hfz import:uiv-button-1="dev" :data="{count: 0}">
  <uiv-button-1 @onClick="count += 1">default text: {{count}}</uiv-button-1>
</template>

```

